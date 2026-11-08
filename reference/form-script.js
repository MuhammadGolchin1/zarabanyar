jQuery(document).ready(function($) {

    const form = $('.zfb-form');

    if (!form.length) {
        // No form elements found - this might be expected on non-form pages
        return;
    }


    // =============================================
    // VALIDATION HELPERS & ARCHITECTURE
    // =============================================
    
    window.ZFBValidation = {
        /**
         * Get .zfb-question container for a field
         */
        getQuestion: function($field) {
            return $field.closest('.zfb-question');
        },

        /**
         * Read validation rules from data attributes
         * Returns object with type ('text', 'radio', 'checkbox') and validation config
         */
        readRules: function($question) {
            const $firstInput = $question.find('input, textarea, select').first();
            const fieldType = $firstInput.attr('type') || $firstInput.prop('tagName').toLowerCase();
            let groupType = 'text';

            if (fieldType === 'radio') groupType = 'radio';
            if (fieldType === 'checkbox') groupType = 'checkbox';

            // For group types, read from container; for text, read from input
            let $source = (groupType === 'text') ? $firstInput : $question;

            // Check for required status: first check container data-required, then input required attribute
            const isRequired = $question.attr('data-required') === 'true' || $firstInput.is('[required]');

            return {
                type: groupType,
                rule: $source.data('validation-rule') || '',
                min: parseInt($source.data('validation-min')) || 0,
                max: parseInt($source.data('validation-max')) || 0,
                customMessage: $source.data('validation-message') || '',
                isRequired: isRequired
            };
        },

        /**
         * Show validation error under question
         */
        showError: function($question, message) {
            $question.addClass('error');
            $question.find('.validation-error').remove();

            if (message) {
                const errorHtml = $('<div class="validation-error"></div>')
                    .html(message);

                const $footer = $question.find('.zfb-question-footer').first();
                if ($footer.length) {
                    const $hint = $footer.find('.zfb-field-hint').first();
                    if ($hint.length) {
                        $hint.before(errorHtml);
                    } else {
                        $footer.prepend(errorHtml);
                    }
                } else {
                    $question.append(errorHtml);
                }
                errorHtml.hide().fadeIn(300);
            }
        },

        /**
         * Clear validation error from question
         */
        clearError: function($question) {
            $question.removeClass('error');
            $question.find('.validation-error').remove();
        },

        // =============================================
        // TEXT FIELD VALIDATORS
        // =============================================
        
        /**
         * Validate text field by rule
         */
        validateFieldByRule: function(value, rule, min, max, customMessage) {
            let isValid = true;
            let message = '';
            const length = value.length;

            switch (rule) {
                case 'min_length':
                    if (length < min) {
                        isValid = false;
                        message = `حداقل ${min} کاراکتر مورد نیاز است.`;
                    }
                    break;

                case 'max_length':
                    if (length > max) {
                        isValid = false;
                        message = `حداکثر ${max} کاراکتر مجاز است.`;
                    }
                    break;

                case 'range_length':
                    if (length < min || length > max) {
                        isValid = false;
                        message = `تعداد کاراکتر باید بین ${min} تا ${max} باشد.`;
                    }
                    break;

                case 'email':
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        isValid = false;
                        message = 'فرمت ایمیل صحیح نیست.';
                    }
                    break;

                case 'phone':
                    if (!/^(۰۹|09)[\d\u0660-\u0669]{9}$/.test(value)) {
                        isValid = false;
                        message = 'شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد.';
                    }
                    break;

                case 'national_id':
                    if (!this.validateNationalId(value)) {
                        isValid = false;
                        message = 'کد ملی وارد شده معتبر نیست.';
                    }
                    break;

                case 'numbers_only':
                    if (!/^[\d\u0660-\u0669]+$/.test(value)) {
                        isValid = false;
                        message = 'فقط عدد مجاز است.';
                    }
                    break;

                case 'letters_only':
                    if (!/^[\u0600-\u065F\u0670-\u06FFa-zA-Z\s]+$/.test(value)) {
                        isValid = false;
                        message = 'فقط حروف مجاز است.';
                    }
                    break;

                case 'alphanumeric':
                    if (!/^[\u0600-\u06FFa-zA-Z0-9\u0660-\u0669\s]+$/.test(value)) {
                        isValid = false;
                        message = 'فقط حروف و عدد مجاز است.';
                    }
                    break;

                case 'url':
                    try {
                        new URL(value);
                    } catch {
                        isValid = false;
                        message = 'آدرس وب معتبر نیست.';
                    }
                    break;

                case 'date':
                    // Strict check for YYYY/MM/DD format
                    if (!/^\d{4}\/\d{2}\/\d{2}$/.test(value)) {
                        isValid = false;
                        message = 'فرمت تاریخ صحیح نیست (YYYY/MM/DD).';
                    } else {
                        const parts = value.split('/');
                        const year = parseInt(parts[0], 10);
                        const month = parseInt(parts[1], 10);
                        const day = parseInt(parts[2], 10);
                        const currentYear = getCurrentJalaliYear(); // Use dynamic current year

                        // Year validation (1320 - Current)
                        if (year < 1320 || year > currentYear) {
                            isValid = false;
                            message = `سال باید بین ۱۳۲۰ تا ${toPersianNumber(currentYear)} باشد.`;
                        }
                        // Month validation
                        else if (month < 1 || month > 12) {
                            isValid = false;
                            message = 'ماه باید بین ۱ تا ۱۲ باشد.';
                        }
                        // Day validation
                        else if (day < 1 || day > 31) {
                            isValid = false;
                            message = 'روز باید بین ۱ تا ۳۱ باشد.';
                        } 
                        // Basic day count check (first 6 months 31, second 6 months 30, Esfand 29/30)
                        else if (month > 6 && day === 31) {
                            isValid = false;
                            message = 'در نیمه دوم سال ماه‌ها ۳۰ روزه هستند.';
                        }
                        // Esfand check (simple)
                        else if (month === 12 && day > 30) { // Allowing 30 for simplicity in leap years
                            isValid = false;
                            message = 'اسفند ماه حداکثر ۳۰ روز است.';
                        }
                    }
                    break;
            }

            return { 
                isValid, 
                message: customMessage && !isValid ? customMessage : message 
            };
        },

        /**
         * National ID validation function
         */
        validateNationalId: function(code) {
            if (!/^\d{10}$/.test(code)) return false;
            
            const check = parseInt(code[9]);
            let sum = 0;
            
            for (let i = 0; i < 9; i++) {
                sum += parseInt(code[i]) * (10 - i);
            }
            
            const remainder = sum % 11;
            return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
        },

        /**
         * Validate single text field (blur + submit)
         */
        validateTextField: function($field) {
            const $question = this.getQuestion($field);
            const rules = this.readRules($question);
            const value = $field.val() || '';
            const englishValue = $field.data('english-value') || value;

            // Clear previous errors
            this.clearError($question);

            // Check required
            if (rules.isRequired && !englishValue.trim()) {
                this.showError($question, 'این فیلد اجباری است.');
                return false;
            }

            // If empty and not required, pass
            if (!englishValue.trim()) {
                return true;
            }

            // Apply rule if present
            if (rules.rule) {
                const result = this.validateFieldByRule(englishValue, rules.rule, rules.min, rules.max, rules.customMessage);
                if (!result.isValid) {
                    this.showError($question, result.message);
                    return false;
                }
            }

            return true;
        },

        /**
         * Validate file field
         */
        validateFileField: function($field) {
            const $question = this.getQuestion($field);
            const rules = this.readRules($question);
            const file = $field[0].files[0];

            // Clear previous errors
            this.clearError($question);

            // Check required
            if (rules.isRequired && !file) {
                this.showError($question, 'این فیلد اجباری است.');
                return false;
            }

            // If no file and not required, pass
            if (!file) {
                return true;
            }

            // Check size
            const maxSize = $field.data('max-size');
            const maxSizeMB = $field.data('max-size-mb');
            if (maxSize && file.size > maxSize) {
                this.showError($question, `حجم فایل نباید بیشتر از ${maxSizeMB} مگابایت باشد.`);
                return false;
            }

            // Check file type
            const allowedTypes = $field.data('allowed-types');
            if (allowedTypes) {
                const allowedTypesArray = allowedTypes.split(',').map(type => type.trim().toLowerCase());
                const fileName = file.name.toLowerCase();
                const fileExt = fileName.split('.').pop();

                if (!allowedTypesArray.includes(fileExt)) {
                    this.showError($question, `فرمت فایل مجاز نیست. فرمت‌های مجاز: ${allowedTypes.toUpperCase()}`);
                    return false;
                }
            }
            return true;
        },

        /**
         * Validate gallery field for form submission
         */
        validateGalleryFieldForForm: function($field) {
            const $question = this.getQuestion($field);
            const rules = this.readRules($question);
            const files = Array.from($field[0].files || []);

            // Clear previous errors
            this.clearError($question);

            // Check required
            if (rules.isRequired && files.length === 0) {
                this.showError($question, 'این فیلد اجباری است.');
                return false;
            }

            // If no files and not required, pass
            if (files.length === 0) {
                return true;
            }

            // Use existing validateGalleryField method
            const validationResult = this.validateGalleryField($field, files);
            if (!validationResult.valid) {
                this.showError($question, validationResult.message);
                return false;
            }

            return true;
        },

        /**
         * Validate all file fields in the form before submission
         */
        validateAllFileFields: function($form) {
            let allValid = true;

            $form.find('input[type="file"]').each(function() {
                const $field = $(this);

                // Check if it's a gallery field
                if ($field.hasClass('zfb-gallery-field')) {
                    if (!ZFBValidation.validateGalleryFieldForForm($field)) {
                        allValid = false;
                    }
                } else {
                    // Regular file field
                    if (!ZFBValidation.validateFileField($field)) {
                        allValid = false;
                    }
                }
            });

            return allValid;
        },

        /**
         * Initialize file upload handlers
         */
        initFileUploads: function() {
            const self = this;

            // File input change handler
            $(document).on('change', '.zfb-file-field', function(e) {
                const $field = $(this);
                const file = e.target.files[0];

                if (file) {
                    self.handleFileSelection($field, file);
                } else {
                    self.clearFilePreview($field);
                }
            });

            // File remove button handler
            $(document).on('click', '.zfb-file-remove', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const $button = $(this);
                const $container = $button.closest('.zfb-file-upload-container');
                const $field = $container.find('.zfb-file-field');

                self.removeFile($field);
            });

            // Drag and drop handlers
            $(document).on('dragover dragenter', '.zfb-file-input-area', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).addClass('dragover');
            });

            $(document).on('dragleave dragend drop', '.zfb-file-input-area', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).removeClass('dragover');
            });

            $(document).on('drop', '.zfb-file-input-area', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const $area = $(this);
                $area.removeClass('dragover');

                const files = e.originalEvent.dataTransfer.files;
                if (files.length > 0) {
                    const $field = $area.find('.zfb-file-field');
                    const file = files[0];

                    // Set the file to the input
                    const dt = new DataTransfer();
                    dt.items.add(file);
                    $field[0].files = dt.files;

                    // Trigger change event
                    $field.trigger('change');
                }
            });

            // Click on input area to trigger file input
            $(document).on('click', '.zfb-file-input-area', function(e) {
                // Only trigger if clicking on the overlay (not on the hidden input)
                if (!$(e.target).hasClass('zfb-file-field')) {
                    const $field = $(this).find('.zfb-file-field');
                    $field.click();
                }
            });
        },

        /**
         * Initialize gallery upload handlers
         */
        initGalleryUploads: function() {
            const self = this;

            // Gallery input change handler
            $(document).on('change', '.zfb-gallery-field', function(e) {
                const $field = $(this);
                const files = Array.from(e.target.files);

                if (files.length > 0) {
                    self.handleGallerySelection($field, files);
                } else {
                    self.clearGalleryPreview($field);
                }
            });

            // Gallery remove button handler
            $(document).on('click', '.zfb-gallery-remove', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const $button = $(this);
                const $container = $button.closest('.zfb-gallery-upload-container');
                const $field = $container.find('.zfb-gallery-field');
                const index = parseInt($button.data('index'));

                self.removeGalleryImage($field, index);
            });

            // Drag and drop handlers for gallery
            $(document).on('dragover dragenter', '.zfb-gallery-input-area', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).addClass('dragover');
            });

            $(document).on('dragleave dragend drop', '.zfb-gallery-input-area', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).removeClass('dragover');
            });

            $(document).on('drop', '.zfb-gallery-input-area', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const $area = $(this);
                $area.removeClass('dragover');

                const files = Array.from(e.originalEvent.dataTransfer.files);
                if (files.length > 0) {
                    const $field = $area.find('.zfb-gallery-field');
                    
                    // Filter to only image files
                    const imageFiles = files.filter(file => file.type.startsWith('image/'));
                    
                    if (imageFiles.length > 0) {
                        // Get existing files
                        const existingFiles = Array.from($field[0].files || []);
                        const allFiles = [...existingFiles, ...imageFiles];
                        
                        // Create DataTransfer to set multiple files
                        const dt = new DataTransfer();
                        allFiles.forEach(file => dt.items.add(file));
                        $field[0].files = dt.files;

                        // Trigger change event
                        $field.trigger('change');
                    }
                }
            });

            // Click on input area to trigger gallery input
            $(document).on('click', '.zfb-gallery-input-area', function(e) {
                // Only trigger if clicking on the overlay (not on the hidden input)
                if (!$(e.target).hasClass('zfb-gallery-field')) {
                    const $field = $(this).find('.zfb-gallery-field');
                    $field.click();
                }
            });
        },

        /**
         * Handle gallery selection
         */
        handleGallerySelection: function($field, files) {
            const $container = $field.closest('.zfb-gallery-upload-container');
            const $question = this.getQuestion($field);

            // Clear previous errors
            this.clearError($question);
            $container.removeClass('error');

            // Get existing files from input
            const existingFiles = Array.from($field[0].files || []);
            
            // Combine existing and new files (files parameter contains newly selected files)
            // Note: $field[0].files already contains all files after selection, so we can use that directly
            const allFiles = Array.from($field[0].files || []);

            // Validate gallery
            const validationResult = this.validateGalleryField($field, allFiles);
            if (!validationResult.valid) {
                $container.addClass('error');
                this.showError($question, validationResult.message);
                // Reset input if validation failed
                $field[0].value = '';
                this.clearGalleryPreview($field);
                return;
            }
            
            // Limit to max count
            const maxCount = parseInt($field.data('max-count')) || 5;
            const limitedFiles = allFiles.slice(0, maxCount);
            
            // Update input if we had to limit
            if (allFiles.length > maxCount) {
                const dt = new DataTransfer();
                limitedFiles.forEach(file => dt.items.add(file));
                $field[0].files = dt.files;
            }

            // Show preview
            this.showGalleryPreview($field, limitedFiles);

            // Store gallery data for form navigation
            this.storeGalleryData($field, limitedFiles);
        },

        /**
         * Show gallery preview
         */
        showGalleryPreview: function($field, files) {
            const $container = $field.closest('.zfb-gallery-upload-container');
            const $preview = $container.find('.zfb-gallery-preview');
            const $grid = $preview.find('.zfb-gallery-grid');
            const $counter = $preview.find('.zfb-gallery-count');

            // Clear existing preview
            $grid.empty();

            // Update counter
            $counter.text(files.length);

            // Create thumbnail for each file
            files.forEach((file, index) => {
                const $item = $('<div class="zfb-gallery-item"></div>');
                
                // Create thumbnail
                const $thumbnail = $('<div class="zfb-gallery-thumbnail-wrapper"></div>');
                const $img = $('<img class="zfb-gallery-thumbnail" alt="' + this.escapeHtml(file.name) + '">');
                
                // Create preview URL
                const reader = new FileReader();
                reader.onload = function(e) {
                    $img.attr('src', e.target.result);
                };
                reader.readAsDataURL(file);

                $thumbnail.append($img);
                
                // File info
                const $info = $('<div class="zfb-gallery-item-info"></div>');
                $info.append($('<div class="zfb-gallery-item-name">' + this.escapeHtml(file.name) + '</div>'));
                $info.append($('<div class="zfb-gallery-item-size">' + this.formatFileSize(file.size) + '</div>'));
                
                // Remove button
                const $removeBtn = $('<button type="button" class="zfb-gallery-remove" data-index="' + index + '" title="حذف تصویر">×</button>');
                
                $item.append($thumbnail);
                $item.append($info);
                $item.append($removeBtn);
                
                $grid.append($item);
            });

            // Show preview
            $preview.show();
        },

        /**
         * Remove gallery image
         */
        removeGalleryImage: function($field, index) {
            const $container = $field.closest('.zfb-gallery-upload-container');
            const $question = this.getQuestion($field);

            // Get current files from input
            const currentFiles = Array.from($field[0].files || []);

            // Remove file at index
            if (index >= 0 && index < currentFiles.length) {
                currentFiles.splice(index, 1);

                // Update file input using DataTransfer
                const dt = new DataTransfer();
                currentFiles.forEach(file => {
                    dt.items.add(file);
                });
                $field[0].files = dt.files;

                // Update preview
                if (currentFiles.length > 0) {
                    this.showGalleryPreview($field, currentFiles);
                    this.storeGalleryData($field, currentFiles);
                } else {
                    this.clearGalleryPreview($field);
                }
            }

            // Clear any errors
            this.clearError($question);
            $container.removeClass('error');
        },

        /**
         * Clear gallery preview
         */
        clearGalleryPreview: function($field) {
            const $container = $field.closest('.zfb-gallery-upload-container');
            const $preview = $container.find('.zfb-gallery-preview');

            // Hide preview
            $preview.hide();

            // Clear stored data
            const $galleryData = $container.find('.zfb-gallery-data');
            $galleryData.val('');
        },

        /**
         * Store gallery data for form navigation
         */
        storeGalleryData: function($field, files) {
            const $container = $field.closest('.zfb-gallery-upload-container');
            const $galleryData = $container.find('.zfb-gallery-data');

            // Store file info (not actual file data for performance)
            const filesData = files.map(file => ({
                name: file.name,
                size: file.size,
                type: file.type,
                lastModified: file.lastModified
            }));

            $galleryData.val(JSON.stringify(filesData));
        },

        /**
         * Validate gallery field
         */
        validateGalleryField: function($field, files) {
            const maxCount = parseInt($field.data('max-count')) || 5;
            const maxSizeBytes = parseInt($field.data('max-size')) || (5 * 1024 * 1024);
            const allowedTypes = ($field.data('allowed-types') || '').split(',').map(t => t.trim().toLowerCase());

            // Check total count
            if (files.length > maxCount) {
                return {
                    valid: false,
                    message: 'تعداد تصاویر بیشتر از حد مجاز است (حداکثر ' + maxCount + ' تصویر)'
                };
            }

            // Validate each file
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                // Check if it's an image
                if (!file.type.startsWith('image/')) {
                    return {
                        valid: false,
                        message: 'فقط تصویر مجاز است'
                    };
                }

                // Check file size
                if (file.size > maxSizeBytes) {
                    const maxSizeMB = (maxSizeBytes / (1024 * 1024)).toFixed(1);
                    return {
                        valid: false,
                        message: 'حجم تصویر بیشتر از حد مجاز است (حداکثر ' + maxSizeMB + ' مگابایت)'
                    };
                }

                // Check file extension if allowed types specified
                if (allowedTypes.length > 0) {
                    const fileExt = file.name.split('.').pop().toLowerCase();
                    if (!allowedTypes.includes(fileExt)) {
                        const allowedTypesDisplay = allowedTypes.map(t => t.toUpperCase()).join('، ');
                        return {
                            valid: false,
                            message: 'فرمت تصویر مجاز نیست. فرمت‌های مجاز: ' + allowedTypesDisplay
                        };
                    }
                }
            }

            return { valid: true };
        },

        /**
         * Escape HTML to prevent XSS
         */
        escapeHtml: function(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, function(m) { return map[m]; });
        },

        /**
         * Handle file selection
         */
        handleFileSelection: function($field, file) {
            const $container = $field.closest('.zfb-file-upload-container');
            const $question = this.getQuestion($field);

            // Clear previous errors
            this.clearError($question);
            $container.removeClass('error');

            // Validate file
            if (!this.validateFileField($field)) {
                $container.addClass('error');
                return;
            }

            // Show preview
            this.showFilePreview($field, file);

            // Store file data for form navigation
            this.storeFileData($field, file);
        },

        /**
         * Show file preview
         */
        showFilePreview: function($field, file) {
            const $container = $field.closest('.zfb-file-upload-container');
            const $preview = $container.find('.zfb-file-preview');
            const $previewIcon = $preview.find('.zfb-file-preview-icon');
            const $previewName = $preview.find('.zfb-file-preview-name');
            const $previewSize = $preview.find('.zfb-file-preview-size');

            // Set file icon based on type
            const fileType = this.getFileType(file);
            $previewIcon.text(this.getFileIcon(fileType));

            // Set file name and size
            $previewName.text(file.name);
            $previewSize.text(this.formatFileSize(file.size));

            // Show preview
            $preview.show();

            // Hide only the visual overlay, keep file input accessible
            $container.find('.zfb-file-input-overlay').hide();
            // Keep the input area container visible so the file input remains accessible
        },

        /**
         * Clear file preview
         */
        clearFilePreview: function($field) {
            const $container = $field.closest('.zfb-file-upload-container');
            const $preview = $container.find('.zfb-file-preview');

            // Hide preview
            $preview.hide();

            // Show the visual overlay again
            $container.find('.zfb-file-input-overlay').show();

            // Clear stored data
            const $fileData = $container.find('.zfb-file-data');
            $fileData.val('');
        },

        /**
         * Remove file
         */
        removeFile: function($field) {
            // Clear file input
            $field[0].value = '';

            // Clear preview
            this.clearFilePreview($field);

            // Clear any errors
            const $question = this.getQuestion($field);
            this.clearError($question);
            $field.closest('.zfb-file-upload-container').removeClass('error');
        },

        /**
         * Store file data for form navigation
         */
        storeFileData: function($field, file) {
            const $container = $field.closest('.zfb-file-upload-container');
            const $fileData = $container.find('.zfb-file-data');

            // Store basic file info (not the actual file data for performance)
            const fileData = {
                name: file.name,
                size: file.size,
                type: file.type,
                lastModified: file.lastModified
            };

            $fileData.val(JSON.stringify(fileData));
        },

        /**
         * Get file type category
         */
        getFileType: function(file) {
            const type = file.type.toLowerCase();
            const name = file.name.toLowerCase();

            if (type.startsWith('image/')) return 'image';
            if (type.startsWith('video/')) return 'video';
            if (type.startsWith('audio/')) return 'audio';
            if (type.includes('pdf') || name.endsWith('.pdf')) return 'pdf';
            if (type.includes('document') || type.includes('word') || name.match(/\.(doc|docx)$/)) return 'document';
            if (type.includes('spreadsheet') || type.includes('excel') || name.match(/\.(xls|xlsx)$/)) return 'spreadsheet';

            return 'file';
        },

        /**
         * Get file icon based on type
         */
        getFileIcon: function(fileType) {
            const icons = {
                image: '🖼️',
                video: '🎥',
                audio: '🎵',
                pdf: '📄',
                document: '📝',
                spreadsheet: '📊',
                file: '📎'
            };

            return icons[fileType] || '📎';
        },

        /**
         * Format file size
         */
        formatFileSize: function(bytes) {
            if (bytes === 0) return '0 B';

            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
        },

        // =============================================
        // GROUP VALIDATORS (Radio/Checkbox)
        // =============================================
        
        /**
         * Validate radio/checkbox group
         */
        validateGroup: function($field) {
            const $question = this.getQuestion($field);
            const rules = this.readRules($question);
            let groupName = $field.attr('name');

            // Normalize group name (remove [] if present) to ensure selectors work correctly
            if (groupName && groupName.endsWith('[]')) {
                groupName = groupName.slice(0, -2);
            }

            // Clear previous errors
            this.clearError($question);

            // For radios/checkboxes, handle group selection
            if (rules.type === 'radio' || rules.type === 'checkbox') {
                // Check required
                if (rules.isRequired) {
                    // Scope to question container instead of entire form
                    const isChecked = $question.find(`input[name="${groupName}"]:checked, input[name="${groupName}[]"]:checked`).length > 0;
                    if (!isChecked) {
                        this.showError($question, 'این فیلد اجباری است.');
                        return false;
                    }
                }

                // Checkbox-specific selection rules
                if (rules.type === 'checkbox') {
                    // Use the normalized name to find checked items within question container
                    const $checked = $question.find(`input[name="${groupName}[]"]:checked`);
                    const checkedCount = $checked.length;

                    // When the only checked option is a "none" option, treat effective
                    // count as 0 for min/max rules (selecting "none" means no real
                    // selection, so it should not satisfy "choose at least N").
                    const onlyNoneChecked = checkedCount === 1 &&
                        $checked.first().data('zfb-none-option') === 1;
                    const effectiveCount = onlyNoneChecked ? 0 : checkedCount;

                    if (rules.rule === 'min_selection') {
                        if (effectiveCount < rules.min) {
                            const msg = rules.customMessage || `حداقل ${rules.min} گزینه باید انتخاب شود.`;
                            this.showError($question, msg);
                            return false;
                        }
                    } else if (rules.rule === 'max_selection') {
                        if (effectiveCount > rules.max) {
                            const msg = rules.customMessage || `حداکثر ${rules.max} گزینه می‌تواند انتخاب شود.`;
                            this.showError($question, msg);
                            return false;
                        }
                    } else if (rules.rule === 'range_selection') {
                        if (effectiveCount < rules.min) {
                            const msg = rules.customMessage || `حداقل ${rules.min} گزینه باید انتخاب شود.`;
                            this.showError($question, msg);
                            return false;
                        }
                        if (effectiveCount > rules.max) {
                            const msg = rules.customMessage || `حداکثر ${rules.max} گزینه می‌تواند انتخاب شود.`;
                            this.showError($question, msg);
                            return false;
                        }
                    }
                }
            }

            return true;
        },

        // =============================================
        // STAGE VALIDATORS
        // =============================================
        
        /**
         * Validate entire stage
         */
        validateStage: function(stageIndex, stages) {
            const $stage = $(stages[stageIndex]);
            let isValid = true;
            const validatedGroups = new Set();


            // Iterate through ALL question containers in the stage
            $stage.find('.zfb-question').each((idx, question) => {
                const $question = $(question);
                const questionType = $question.attr('data-question-type');

                if (questionType === 'content') {
                    return;
                }

                const $firstInput = $question.find('input, textarea, select').first();
                const isRequired = $question.attr('data-required') === 'true';

                // Handle questions without inputs (e.g., radio/checkbox with no options)
                if (!$firstInput.length) {
                    // If this is a required radio/checkbox question with no inputs, it should fail validation
                    if (isRequired && (questionType === 'radio' || questionType === 'checkbox')) {
                        this.showError($question, 'این فیلد اجباری است.');
                        isValid = false;
                    }
                    return; // Skip further processing for questions without inputs
                }

                const $field = $firstInput;
                const fieldType = $field.attr('type') || $field.prop('tagName').toLowerCase();

                if (fieldType === 'radio' || fieldType === 'checkbox') {
                    const groupName = $field.attr('name');
                    // Normalize for Set tracking
                    const normalizedName = groupName.endsWith('[]') ? groupName.slice(0, -2) : groupName;

                    if (validatedGroups.has(normalizedName)) return;
                    validatedGroups.add(normalizedName);

                    if (!this.validateGroup($field)) {
                        isValid = false;
                    }
                } else if (fieldType === 'file') {
                    if ($field.hasClass('zfb-gallery-field')) {
                        if (!this.validateGalleryFieldForForm($field)) {
                            isValid = false;
                        }
                    } else if (!this.validateFileField($field)) {
                        isValid = false;
                    }
                } else {
                    if (!this.validateTextField($field)) {
                        isValid = false;
                    }
                }
            });

            return isValid;
        }
    };

    // =============================================
    // EVENT HANDLERS
    // =============================================
    
    if (form.length > 0) {
        // Text field blur validation
        $(document).on('blur', '.zfb-form input[type="text"], .zfb-form input[type="email"], .zfb-form input[type="tel"], .zfb-form input[type="number"], .zfb-form input[type="url"], .zfb-form input[type="date"], .zfb-form textarea, .zfb-form select', function() {
            ZFBValidation.validateTextField($(this));
        });

        // Checkbox "none" option mutual exclusivity handler (runs before validation)
        $(document).on('change', '.zfb-form input[type="checkbox"]', function() {
            const $input    = $(this);
            const $question = ZFBValidation.getQuestion($input);

            if ($question.find('.zfb-checkbox-group').length === 0) return;

            const isNoneOption = $input.data('zfb-none-option') === 1;

            if (isNoneOption) {
                const isChecked = $input.is(':checked');
                const $others   = $question.find('input[type="checkbox"]').not($input);
                if (isChecked) {
                    $others.prop('checked', false)
                           .prop('disabled', true)
                           .closest('.zfb-checkbox-option')
                           .addClass('zfb-option-disabled-by-none');
                } else {
                    $others.prop('disabled', false)
                           .closest('.zfb-checkbox-option')
                           .removeClass('zfb-option-disabled-by-none');
                }
            } else if ($input.is(':checked')) {
                const $none = $question.find('input[type="checkbox"][data-zfb-none-option="1"]');
                if ($none.length && $none.is(':checked')) {
                    $none.prop('checked', false);
                    $question.find('input[type="checkbox"]').not($none)
                             .prop('disabled', false)
                             .closest('.zfb-checkbox-option')
                             .removeClass('zfb-option-disabled-by-none');
                }
            }
        });

        // Radio/checkbox change and blur validation (works on ANY option, not just first)
        $(document).on('change blur', '.zfb-form input[type="checkbox"], .zfb-form input[type="radio"]', function() {
            ZFBValidation.validateGroup($(this));
        });

        // Clear errors on input (for UX, show error only after blur)
        $(document).on('input', '.zfb-form input, .zfb-form textarea', function() {
            const $question = ZFBValidation.getQuestion($(this));
            if ($question.hasClass('error')) {
                ZFBValidation.clearError($question);
            }
        });
        
        // File input change validation
        $(document).on('change', '.zfb-form input[type="file"]', function() {
            const $field = $(this);
            if ($field.hasClass('zfb-gallery-field')) {
                ZFBValidation.validateGalleryFieldForForm($field);
            } else {
                ZFBValidation.validateFileField($field);
            }
        });
    }

    // Multi-stage form functionality
    let currentStage = 0;
    const stages = $('.zfb-stage');
    const stageIndicators = $('.zfb-stage-indicator');
    const isMultiStage = stages.length > 1;
    
    // Helper function to convert English numbers to Persian
    function toPersianNumber(num) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return String(num).replace(/\d/g, digit => persianDigits[parseInt(digit)]);
    }

    // Helper function to convert Persian numbers to English
    function toEnglishDigits(str) {
        if (!str) return str;
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        let result = str;
        for (let i = 0; i < 10; i++) {
            const regex = new RegExp(persianDigits[i], 'g');
            result = result.replace(regex, i.toString());
        }
        return result;
    }

    function showFormErrorSummary($form, $stage, message) {
        const $container = $form && $form.length ? $form.closest('.zfb-form-container') : $('.zfb-form-container').first();
        if (!$container.length) return;

        $container.find('.zfb-error-summary').remove();

        const $wrapper = $('<div class="zfb-error-message zfb-error-summary"></div>');
        const $title = $('<p></p>').text(message || 'لطفاً فیلدهای اجباری را تکمیل کنید.');
        $wrapper.append($title);

        if ($stage && $stage.length) {
            const $errorQuestions = $stage.find('.zfb-question.error');
            if ($errorQuestions.length) {
                const $list = $('<ul class="zfb-error-list"></ul>');
                $errorQuestions.each(function() {
                    const $question = $(this);
                    const labelText = $question.find('.zfb-question-label').first().clone().children('span.zfb-required').remove().end().text().trim();
                    const errorText = $question.find('.validation-error').first().text().trim();

                    const $item = $('<li></li>');
                    $('<span class="zfb-error-item-label"></span>').text(labelText).appendTo($item);
                    if (errorText) {
                        $('<span class="zfb-error-item-message"></span>').text(' — ' + errorText).appendTo($item);
                    }

                    $item.css('cursor', 'pointer').on('click', function() {
                        ZFBScroll.toQuestionTop($question);
                    });

                    $list.append($item);
                });
                $wrapper.append($list);
            }
            $stage.append($wrapper);
        } else {
            $container.append($wrapper);
        }
    }

    function clearFormErrorSummary($form) {
        const $container = $form && $form.length ? $form.closest('.zfb-form-container') : $('.zfb-form-container').first();
        if (!$container.length) return;
        $container.find('.zfb-error-summary').remove();
    }

    // Make showStage function globally accessible
    window.showStage = function(index, options) {
            if (index < 0 || index >= stages.length) return;

            // Hide all stages
            stages.hide();

            // Show target stage
            $(stages[index]).show();

            // Update stage indicators
            stageIndicators.removeClass('active completed');
            stageIndicators.each(function(i) {
                if (i < index) {
                    $(this).addClass('completed');
                } else if (i === index) {
                    $(this).addClass('active');
                }
            });

            currentStage = index;

            // Update button text and visibility (new format first, then old format)
            const $nextBtn = $('.zfb-btn-next, .zfb-next');
            const $prevBtn = $('.zfb-btn-prev, .zfb-prev');
            const $submitBtn = $('.zfb-btn-submit, .zfb-submit');

            $prevBtn.show().prop('disabled', index === 0);

            if (index === stages.length - 1) {
                $nextBtn.hide();
                $submitBtn.show();
            } else {
                $nextBtn.show();
                $submitBtn.hide();
            }

            // Update progress bar and text (multi-stage only)
            if (stages.length > 1) {
                const progressPercent = ((index + 1) / stages.length) * 100;
                const currentStageNumber = index + 1;
                const totalStages = stages.length;

                $('.zfb-progress-fill').css('width', progressPercent + '%');
                $('.zfb-progress-text').text('مرحله ' + toPersianNumber(currentStageNumber) + ' از ' + toPersianNumber(totalStages));
            }

            if (!options || options.scroll !== false) {
                ZFBScroll.toFormTop(form);
            }
        }

    if (isMultiStage) {
        // Navigation buttons (new format first, then old format)
        $('.zfb-btn-next, .zfb-next').on('click', function(e) {
            e.preventDefault();


            // Validate current stage before proceeding
            const validationResult = ZFBValidation.validateStage(currentStage, stages);

            if (validationResult) {
                clearFormErrorSummary(form);
                showStage(currentStage + 1);
            } else {
                const $failingStage = $(stages[currentStage]);
                showFormErrorSummary(form, $failingStage, 'لطفاً فیلدهای اجباری این مرحله را تکمیل کنید.');
                ZFBScroll.toFirstErrorQuestionInStage($failingStage);
            }
        });

        $('.zfb-btn-prev, .zfb-prev').on('click', function(e) {
            e.preventDefault();
            showStage(currentStage - 1);
        });

        // Stage indicator clicks
        $('.zfb-stage-indicator').on('click', function() {
            const targetStage = parseInt($(this).data('stage'));

            // Allow going back to previous stages without validation
            if (targetStage < currentStage) {
                showStage(targetStage);
                return;
            }

            // Allow going to next stage only if current stage is valid
            if (targetStage === currentStage + 1) {
                if (ZFBValidation.validateStage(currentStage, stages)) {
                    clearFormErrorSummary(form);
                    showStage(targetStage);
                } else {
                    const $failingStage = $(stages[currentStage]);
                    showFormErrorSummary(form, $failingStage, 'لطفاً فیلدهای اجباری این مرحله را تکمیل کنید.');
                    ZFBScroll.toFirstErrorQuestionInStage($failingStage);
                }
            }

            // Prevent jumping forward more than one stage
        });

        // Initialize
        showStage(0);
    } else {
        // Single stage - show all content, inline submit
        const $container = form.closest('.zfb-form-container');
        $container.addClass('zfb-form--single-stage');
        stages.show();
        $('.zfb-btn-next, .zfb-next, .zfb-btn-prev, .zfb-prev').hide();
        $('.zfb-stage-navigation').hide();
        $('.zfb-form-progress').hide();
        $('.zfb-btn-submit, .zfb-submit').show();
    }

    function stripLinksFromMessage(message) {
        return String(message).replace(/<a\b[^>]*>.*?<\/a>/gi, '').trim();
    }

    function resetFormState($container, $form) {
        const existingTimer = $container.data('successResetTimer');
        if (existingTimer) {
            clearTimeout(existingTimer);
            $container.removeData('successResetTimer');
        }

        $container.removeClass('zfb-form--success-hidden zfb-form--success-inline');
        $container.find('.zfb-success-message').remove();

        $form.find('input, select, textarea, button').prop('disabled', false);
        if ($form[0]) {
            $form[0].reset();
        }

        $form.find('.zfb-question').removeClass('error');
        $form.find('.validation-error').remove();
        clearFormErrorSummary($form);

        $('.zfb-btn-submit, .zfb-submit')
            .prop('disabled', false)
            .text(zfbFormData.submitText || 'ارسال');

        if (isMultiStage && typeof window.showStage === 'function') {
            window.showStage(0);
        }
    }

    function resolveSuccessMessage(response, responseData) {
        if (responseData && typeof responseData === 'object' && responseData.message) {
            return responseData.message;
        }
        if (response && response.message) {
            return response.message;
        }
        if (responseData && typeof responseData === 'string') {
            return responseData;
        }
        if (responseData && typeof responseData === 'object' && responseData.data && typeof responseData.data === 'string') {
            return responseData.data;
        }
        return '';
    }

    function getSuccessFallbackMessage() {
        if (zfbFormData && zfbFormData.isLoggedIn) {
            return zfbFormData.formSubmittedSuccess || 'فرم شما با موفقیت ارسال شد!';
        }
        return 'فرم با موفقیت ثبت شد. برای مشاهده پاسخنامه خود،‌ با شماره موبایل ثبت شده در فرم لاگین کنید.';
    }

    function handleFormSuccess($container, $form, responseData, response) {
        const display = $container.data('success-display') || 'hide_with_link';
        const resetAfter = parseInt($container.data('success-reset'), 10) || 0;
        const fallback = getSuccessFallbackMessage();

        let message = resolveSuccessMessage(response, responseData) || fallback;

        if (display === 'hide_only' || display === 'keep_form') {
            message = stripLinksFromMessage(message);
        }

        const existingTimer = $container.data('successResetTimer');
        if (existingTimer) {
            clearTimeout(existingTimer);
            $container.removeData('successResetTimer');
        }

        $container.removeClass('zfb-form--success-hidden zfb-form--success-inline');
        $container.find('.zfb-success-message').remove();

        const $successMessage = $('<div class="zfb-success-message"><p></p></div>');
        $successMessage.find('p').html(message);
        if (display === 'keep_form') {
            $container.prepend($successMessage);
        } else {
            $container.append($successMessage);
        }

        if (display === 'keep_form') {
            $container.addClass('zfb-form--success-inline');
            $form.find('input, select, textarea, button').prop('disabled', true);
        } else {
            $container.addClass('zfb-form--success-hidden');
        }

        if (resetAfter > 0) {
            const timerId = setTimeout(function() {
                resetFormState($container, $form);
            }, resetAfter * 1000);
            $container.data('successResetTimer', timerId);
        }
    }

    // Check for pending form submission data in localStorage
    function checkForPendingSubmission() {
        const isPending = localStorage.getItem('zfb_pending_submit');
        if (isPending && isPending === 'true') {
            const formId = $('.zfb-form-container').data('form-id');
            if (formId) {
                const storedData = localStorage.getItem('zfb_form_data_' + formId);
                if (storedData) {
                    try {
                        const formData = JSON.parse(storedData);
                        if (zfbFormData.isLoggedIn) {
                            submitSavedForm(formData);
                            return true;
                        }
                    } catch (e) {
                        console.error('Error parsing stored form data:', e);
                    }
                }
            }
        }
        return false;
    }

    // Submit saved form
    function submitSavedForm(formData) {
        const $container = form.closest('.zfb-form-container');
        $.ajax({
            url: zfbFormData.ajaxurl,
            type: 'POST',
            data: formData + '&action=zfb_submit_form',
            success: function(response) {
                if (response.success) {
                    localStorage.removeItem('zfb_pending_submit');
                    localStorage.removeItem('zfb_form_data_' + $container.data('form-id'));

                    const responseData = response.data || response;
                    handleFormSuccess($container, form, responseData, response);
                } else {
                    console.error('Saved form submission failed:', response.data);
                }
            },
            error: function() {
                console.error('AJAX error during saved form submission');
            }
        });
        }

        // Form submission
        form.on('submit', function(e) {
            e.preventDefault();


            // Define submitButton early and set loading state immediately
            const submitButton = $('.zfb-btn-submit, .zfb-submit');
            submitButton.prop('disabled', true).text(zfbFormData.submittingText || 'در حال ارسال...');

            let allStagesValid = true;
            let firstInvalidStage = -1;

            // Validate all stages
            if (isMultiStage) {
                for (let i = 0; i < stages.length; i++) {
                    if (!ZFBValidation.validateStage(i, stages)) {
                        allStagesValid = false;
                        firstInvalidStage = i;
                        break;
                    }
                }
            } else {
                if (!ZFBValidation.validateStage(0, stages)) {
                    allStagesValid = false;
                    firstInvalidStage = 0;
                }
            }

            if (!allStagesValid) {
                // Re-enable submit button on validation failure
                submitButton.prop('disabled', false).text(zfbFormData.submitText || 'ارسال');

                // Show the first invalid stage
                if (firstInvalidStage >= 0) {
                    showStage(firstInvalidStage, { scroll: false });
                    const $invalidStage = $(stages[firstInvalidStage]);
                    showFormErrorSummary(form, $invalidStage, 'لطفاً فیلدهای اجباری را تکمیل کنید.');
                    ZFBScroll.toFirstErrorQuestionInStage($invalidStage);
                }

                return false;
            }

            // Convert Persian numbers to English before submission
            const textFields = form.find('.zfb-text-field, .zfb-textarea-field, .zfb-text-input, .zfb-textarea');
            
            textFields.each(function() {
                const $input = $(this);
                const currentValue = $input.val();
                
                // Convert Persian digits to English digits
                const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
                let englishValue = currentValue;
                
                for (let i = 0; i < 10; i++) {
                    const regex = new RegExp(persianDigits[i], 'g');
                    englishValue = englishValue.replace(regex, i.toString());
                }
                
                if (currentValue !== englishValue) {
                    $input.val(englishValue);
                }
            });

            // Validate file fields before submission
            const fileFieldsValid = ZFBValidation.validateAllFileFields(form);
            if (!fileFieldsValid) {
                return false;
            }

            // Use FormData for file uploads
            const formData = new FormData(form[0]);
            formData.append('action', 'zfb_submit_form');

            // Check if required form data exists
            if (!zfbFormData.ajaxurl) {
                console.error('AJAX URL is missing!');
                const $errorMessage = $('<div class="zfb-error-message"><p>خطا: تنظیمات AJAX یافت نشد</p></div>');
                $('.zfb-form-container').prepend($errorMessage);
                submitButton.prop('disabled', false).text(zfbFormData.submitText || 'ارسال');
                setTimeout(function() { $errorMessage.fadeOut(400, function() { $(this).remove(); }); }, 10000);
                return false;
            }

            // Check if nonce exists in form data (new format first, then old format)
            const nonceField = form.find('input[name="zfb_form_nonce"]');
            const oldNonceField = form.find('input[name="nonce"]');
            if (nonceField.length === 0 && oldNonceField.length === 0) {
                console.error('Nonce field is missing from form!');
                const $errorMessage = $('<div class="zfb-error-message"><p>خطا: فیلد امنیتی یافت نشد</p></div>');
                $('.zfb-form-container').prepend($errorMessage);
                submitButton.prop('disabled', false).text(zfbFormData.submitText || 'ارسال');
                setTimeout(function() { $errorMessage.fadeOut(400, function() { $(this).remove(); }); }, 10000);
                return false;
            }

            // Check if form_id exists (new format first, then old format)
            const formIdField = form.find('input[name="zfb_form_id"]');
            const oldFormIdField = form.find('input[name="form_id"]');
            if (formIdField.length === 0 && oldFormIdField.length === 0) {
                console.error('Form ID field is missing from form!');
                const $errorMessage = $('<div class="zfb-error-message"><p>خطا: شناسه فرم یافت نشد</p></div>');
                $('.zfb-form-container').prepend($errorMessage);
                submitButton.prop('disabled', false).text(zfbFormData.submitText || 'ارسال');
                setTimeout(function() { $errorMessage.fadeOut(400, function() { $(this).remove(); }); }, 10000);
                return false;
            }

            $.ajax({
                url: zfbFormData.ajaxurl,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: function(response) {
                    // Handle both wp_send_json_success format (response.data.message) and legacy format (response.message)
                    const responseData = response.data || response;
                    const $container = form.closest('.zfb-form-container');

                    if (response.success) {
                        if (responseData.redirect && responseData.redirect_url) {
                        // Store form data for retrieval after login
                            try {
                                const formData = {};
                                $.each(form.serializeArray(), function(_, field) {
                                    formData[field.name] = field.value;
                                });
                                
                            localStorage.setItem('zfb_form_data_' + $container.data('form-id'), JSON.stringify(formData));
                            localStorage.setItem('zfb_pending_submit', 'true');
                            
                            window.location.href = responseData.redirect_url;
                        } catch (e) {
                            console.error('Error storing form data:', e);
                        }
                                            } else {
                        handleFormSuccess($container, form, responseData, response);
                                            }
                                        } else {
                    // Handle server-side validation errors
                    if (response.data && response.data.errors) {
                        // Clear all previous errors
                        $('.zfb-question').removeClass('error');
                        $('.validation-error').remove();
                        
                        // Show specific field errors
                        Object.keys(response.data.errors).forEach(function(fieldName) {
                            // Try to find the field - handle both old and new field naming formats
                            let $field = form.find('[name="' + fieldName + '"]');

                            // If not found, try different field name variations
                            if (!$field.length) {
                                // Try checkbox array format
                                if (!fieldName.includes('[]')) {
                                    $field = form.find('[name="' + fieldName + '[]"]');
                                }

                                // If still not found, try converting from old format to new format
                                if (!$field.length && fieldName.startsWith('question_')) {
                                    const questionId = fieldName.replace('question_', '');
                                    // Try to find field by data attribute or other means
                                    $field = form.find('[data-question-id="' + questionId + '"] input, [data-question-id="' + questionId + '"] textarea, [data-question-id="' + questionId + '"] select');
                                }
                            }

                            if ($field.length) {
                                const $questionContainer = ZFBValidation.getQuestion($field);
                                ZFBValidation.showError($questionContainer, response.data.errors[fieldName]);

                                // Show the stage containing the error
                                if (isMultiStage) {
                                    const stageIndex = $questionContainer.closest('.zfb-stage').index('.zfb-stage');
                                    if (stageIndex >= 0) {
                                        showStage(stageIndex);
                                    }
                                }
                            } else {
                                console.error('Could not find field for error display:', fieldName);
                                // Fallback: show error in a general message
                                if (!$('.zfb-general-error').length) {
                                    $('.zfb-form-container').prepend('<div class="zfb-general-error zfb-error-message"><p>خطاهای اعتبارسنجی: ' + response.data.errors[fieldName] + '</p></div>');
                                }
                            }
                        });
                        
                        // Show general error message
                        if (response.data.message) {
                            const $errorMessage = $('<div class="zfb-error-message"><p>' + response.data.message + '</p></div>');
                            $('.zfb-form-container').prepend($errorMessage);
                            
                            // Fade out after 10 seconds
                            setTimeout(function() {
                                $errorMessage.fadeOut(400, function() {
                                    $(this).remove();
                                });
                            }, 10000);
                        }
                    } else {
                        const $errorMessage = $('<div class="zfb-error-message"><p>' + (response.data || 'خطا در ارسال فرم') + '</p></div>');
                        $('.zfb-form-container').prepend($errorMessage);
                        
                        // Fade out after 10 seconds
                        setTimeout(function() {
                            $errorMessage.fadeOut(400, function() {
                                $(this).remove();
                            });
                        }, 10000);
                    }
                    
                    submitButton.prop('disabled', false).text(zfbFormData.submitText || 'ارسال');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('AJAX error details:', {
                        xhr: xhr,
                        status: status,
                        error: error,
                        responseText: xhr.responseText,
                        statusCode: xhr.status
                    });

                    // Only show error if it's not a successful response with BOM characters
                    if (xhr.status !== 200 || !xhr.responseText || !xhr.responseText.includes('"success":true')) {
                        const $errorMessage = $('<div class="zfb-error-message"><p>خطا در ارسال فرم. لطفاً دوباره تلاش کنید.</p></div>');
                        $('.zfb-form-container').prepend($errorMessage);
                        setTimeout(function() { $errorMessage.fadeOut(400, function() { $(this).remove(); }); }, 10000);
                    }

                    submitButton.prop('disabled', false).text(zfbFormData.submitText || 'ارسال');
                }
            });
        });


    // Check for pending submissions on page load
    checkForPendingSubmission();

    /**
     * Get current Jalali year (approximate)
     */
    function getCurrentJalaliYear() {
        const now = new Date();
        // Simple conversion: Gregorian Year - 621 (approx)
        // This is good enough for upper bound validation
        return now.getFullYear() - 621; 
    }

    // =============================================
    // DATE INPUT MASKING & HANDLING
    // =============================================
    
    // Handle date input masking
    $(document).on('input', '.zfb-form input[data-validation-rule="date"]', function(e) {
        const input = $(this);
        let val = input.val();
        
        // Don't interfere if user is deleting
        if (e.originalEvent && (e.originalEvent.inputType === 'deleteContentBackward' || e.originalEvent.inputType === 'deleteContentForward')) {
            return;
        }

        // Convert to English digits for processing
        let englishVal = toEnglishDigits(val);

        // Remove any non-digit characters except /
        let cleanVal = englishVal.replace(/[^\d\/]/g, '');
        
        // Replace hyphens with slashes strictly
        cleanVal = cleanVal.replace(/-/g, '/');

        // Split into parts to handle logic
        let parts = cleanVal.split('/');
        
        // Logic for auto-inserting slash after year (4 digits)
        if (parts[0] && parts[0].length === 4 && !englishVal.includes('/')) {
            cleanVal = parts[0] + '/';
        }
        
        // Logic for smart padding on month/day entry
        // If user enters a separator after a single digit, pad it
        if (englishVal.endsWith('/')) {
            // Check year part
            if (parts[0] && parts[0].length < 4 && parts[0].length > 0) {
                // Year shouldn't be padded usually
            }
            
            // Check month part (parts[1])
            if (parts[1] && parts[1].length === 1) {
                parts[1] = '0' + parts[1];
                cleanVal = parts[0] + '/' + parts[1] + '/';
            }
        }
        
        // Logic for auto-inserting slash after month (2 digits)
        // If we have Year/Month (where month is 2 digits) and no second slash
        if (parts[0] && parts[0].length === 4 && parts[1] && parts[1].length === 2 && (cleanVal.match(/\//g) || []).length === 1) {
             cleanVal = cleanVal + '/';
        }

        // Prevent double slashes
        cleanVal = cleanVal.replace(/\/{2,}/g, '/');

        // Prevent slash at the beginning
        if (cleanVal.startsWith('/')) {
            cleanVal = cleanVal.substring(1);
        }

        // Strict length limit (YYYY/MM/DD = 10 chars)
        if (cleanVal.length > 10) {
            cleanVal = cleanVal.substring(0, 10);
        }

        // Convert back to Persian for display consistency if needed
        const hasPersianChars = /[\u0600-\u06FF]/.test(val);
        
        if (hasPersianChars) {
            const persianVal = toPersianNumber(cleanVal);
            if (val !== persianVal) {
                input.val(persianVal);
                // Update internal english value for validation
                input.data('english-value', toEnglishDigits(persianVal));
            }
        } else {
            if (val !== cleanVal) {
                input.val(cleanVal);
                // Update internal english value for validation
                input.data('english-value', cleanVal);
            }
        }
    });

    // Handle date input blur for final padding
    $(document).on('blur', '.zfb-form input[data-validation-rule="date"]', function() {
        const input = $(this);
        let val = input.val();
        
        if (!val) return;

        // Work with English digits for logic
        let englishVal = toEnglishDigits(val);

        // Replace hyphens with slashes
        englishVal = englishVal.replace(/-/g, '/');
        
        const parts = englishVal.split('/');
        let newVal = englishVal;

        // Pad month if needed
        if (parts[1] && parts[1].length === 1) {
            parts[1] = '0' + parts[1];
        }

        // Pad day if needed
        if (parts[2] && parts[2].length === 1) {
            parts[2] = '0' + parts[2];
        }

        // Reconstruct
        if (parts.length >= 3) {
            newVal = `${parts[0]}/${parts[1]}/${parts[2]}`;
        } else if (parts.length === 2) {
            newVal = `${parts[0]}/${parts[1]}`;
        }

        // Convert back if input had Persian chars
        const hasPersianChars = /[\u0600-\u06FF]/.test(val);
        if (hasPersianChars) {
            const persianVal = toPersianNumber(newVal);
            if (val !== persianVal) {
                input.val(persianVal);
                // Update internal english value for validation
                input.data('english-value', toEnglishDigits(persianVal));
            }
        } else {
            if (val !== newVal) {
                input.val(newVal);
                // Update internal english value for validation
                input.data('english-value', newVal);
            }
        }
    });

    // Initialize file upload handlers
    ZFBValidation.initFileUploads();

    // Initialize gallery upload handlers
    ZFBValidation.initGalleryUploads();

});

/**
 * Image lightbox for file/gallery previews (user responses, admin views).
 * Lazy-created on first trigger click so empty overlay nodes are not injected on form pages.
 */
(function($) {
    'use strict';

    const ZFBLightbox = {
        overlay: null,
        image: null,

        removeBrokenOverlays: function() {
            document.querySelectorAll('.zfb-lightbox-overlay').forEach(function(node) {
                if (!node.querySelector('.zfb-lightbox-image')) {
                    node.remove();
                }
            });
            document.querySelectorAll('.zfb-lightbox-content').forEach(function(node) {
                if (!node.closest('.zfb-lightbox-overlay')) {
                    node.remove();
                }
            });
        },

        ensure: function() {
            if (this.overlay && this.image) {
                return;
            }

            this.removeBrokenOverlays();

            const existingOverlay = document.querySelector('.zfb-lightbox-overlay');
            if (existingOverlay) {
                this.overlay = existingOverlay;
                this.image = existingOverlay.querySelector('.zfb-lightbox-image');
                if (this.image) {
                    return;
                }
                existingOverlay.remove();
            }

            this.overlay = document.createElement('div');
            this.overlay.className = 'zfb-lightbox-overlay';
            this.overlay.setAttribute('hidden', '');
            this.overlay.setAttribute('aria-hidden', 'true');

            const content = document.createElement('div');
            content.className = 'zfb-lightbox-content';

            this.image = document.createElement('img');
            this.image.className = 'zfb-lightbox-image';
            this.image.alt = '';

            const closeBtn = document.createElement('button');
            closeBtn.type = 'button';
            closeBtn.className = 'zfb-lightbox-close';
            closeBtn.setAttribute('aria-label', 'بستن');
            closeBtn.textContent = '\u00d7';

            content.appendChild(this.image);
            content.appendChild(closeBtn);
            this.overlay.appendChild(content);
            document.body.appendChild(this.overlay);

            const self = this;
            closeBtn.addEventListener('click', function() {
                self.close();
            });
            this.overlay.addEventListener('click', function(e) {
                if (e.target === self.overlay) {
                    self.close();
                }
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && self.overlay && self.overlay.classList.contains('zfb-active')) {
                    self.close();
                }
            });
        },

        open: function(imageSrc) {
            if (!imageSrc) {
                return;
            }

            this.ensure();
            this.image.src = imageSrc;
            this.image.alt = 'تصویر بزرگ شده';
            this.overlay.removeAttribute('hidden');
            this.overlay.setAttribute('aria-hidden', 'false');
            this.overlay.classList.add('zfb-active');
            document.body.style.overflow = 'hidden';
        },

        close: function() {
            if (!this.overlay) {
                return;
            }

            this.overlay.classList.remove('zfb-active');
            this.overlay.setAttribute('hidden', '');
            this.overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        },

        init: function() {
            const self = this;
            $(document).on('click', '.zfb-lightbox-trigger', function(e) {
                e.preventDefault();
                const imgSrc = $(this).data('full-src') || $(this).attr('src');
                self.open(imgSrc);
            });
        }
    };

    $(function() {
        ZFBLightbox.removeBrokenOverlays();

        if ($('.zfb-lightbox-trigger').length) {
            ZFBLightbox.init();
        }
    });
})(jQuery); 