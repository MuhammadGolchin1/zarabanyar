(function ($) {
    'use strict';

    var Jalali = {
        g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        j_months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],

        toJalali: function (gy, gm, gd) {
            var g_days_in_month = this.g_days_in_month.slice();
            var j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
            var gy2 = gy - 1600;
            var gm2 = gm - 1;
            var gd2 = gd - 1;
            var g_day_no = 365 * gy2 + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400);
            var i;
            for (i = 0; i < gm2; ++i) {
                g_day_no += g_days_in_month[i];
            }
            if (gm2 > 1 && ((gy2 % 4 === 0 && gy2 % 100 !== 0) || (gy2 % 400 === 0))) {
                g_day_no++;
            }
            g_day_no += gd2;
            var j_day_no = g_day_no - 79;
            var j_np = Math.floor(j_day_no / 12053);
            j_day_no %= 12053;
            var jy = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
            j_day_no %= 1461;
            if (j_day_no >= 366) {
                jy += Math.floor((j_day_no - 1) / 365);
                j_day_no = (j_day_no - 1) % 365;
            }
            for (i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
                j_day_no -= j_days_in_month[i];
            }
            return [jy, i + 1, j_day_no + 1];
        },

        toGregorian: function (jy, jm, jd) {
            var jy2 = jy - 979;
            var jm2 = jm - 1;
            var jd2 = jd - 1;
            var j_day_no = 365 * jy2 + Math.floor(jy2 / 33) * 8 + Math.floor((jy2 % 33 + 3) / 4);
            var i;
            for (i = 0; i < jm2; ++i) {
                j_day_no += (i < 6 ? 31 : 30);
            }
            j_day_no += jd2;
            var g_day_no = j_day_no + 79;
            var gy = 1600 + 400 * Math.floor(g_day_no / 146097);
            g_day_no %= 146097;
            var leap = true;
            if (g_day_no >= 36525) {
                g_day_no--;
                gy += 100 * Math.floor(g_day_no / 36524);
                g_day_no %= 36524;
                if (g_day_no >= 365) {
                    g_day_no++;
                } else {
                    leap = false;
                }
            }
            gy += 4 * Math.floor(g_day_no / 1461);
            g_day_no %= 1461;
            if (g_day_no >= 366) {
                leap = false;
                g_day_no--;
                gy += Math.floor(g_day_no / 365);
                g_day_no %= 365;
            }
            var g_days_in_month = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            for (i = 0; g_day_no >= g_days_in_month[i]; i++) {
                g_day_no -= g_days_in_month[i];
            }
            return [gy, i + 1, g_day_no + 1];
        },

        pad: function (n) {
            return n < 10 ? '0' + n : '' + n;
        },

        formatGregorian: function (y, m, d) {
            return y + '-' + this.pad(m) + '-' + this.pad(d);
        }
    };

    function parseConfigAttr(raw) {
        if (!raw) {
            return null;
        }
        try {
            return JSON.parse(raw);
        } catch (e) {
            return null;
        }
    }

    function getConsultationData(context) {
        if (typeof window.zfbConsultationData !== 'undefined') {
            return window.zfbConsultationData;
        }

        var $scope = context ? $(context) : $('.zfb-consultation-booking-wrap').first();
        if ($scope.length) {
            var fromWrap = parseConfigAttr($scope.attr('data-zfb-consultation-config'));
            if (fromWrap) {
                window.zfbConsultationData = fromWrap;
                return fromWrap;
            }
        }

        var $picker = context ? $(context).closest('.zfb-appointment-picker') : $('.zfb-appointment-picker').first();
        if ($picker.length) {
            var fromPicker = parseConfigAttr($picker.attr('data-zfb-consultation-config'));
            if (fromPicker) {
                window.zfbConsultationData = fromPicker;
                return fromPicker;
            }
        }

        return null;
    }

    function Picker($root) {
        this.$root = $root;
        this.$hidden = $root.find('.zfb-appointment-value');
        this.$dateMount = $root.find('.zfb-appointment-date');
        this.$slotsMount = $root.find('.zfb-appointment-slots');
        this.$timeSection = $root.find('.zfb-appointment-section--time');
        this.availableDates = {};
        this.bounds = { min: '', max: '' };
        this.viewJy = 0;
        this.viewJm = 0;
        this.selectedDate = '';
        this.selectedSlot = '';
        this.init();
    }

    Picker.prototype.init = function () {
        var self = this;
        var data = getConsultationData(this.$root[0]);
        if (!data) {
            this.$dateMount.html('<p class="zfb-appointment-error">پیکربندی رزرو بارگذاری نشد.</p>');
            return;
        }

        this.$dateMount.html('<p class="zfb-appointment-loading">' + (data.i18n.loading || '...') + '</p>');
        this.setTimeSectionDisabled(true);
        $.post(data.ajaxurl, {
            action: 'zfb_consultation_availability',
            nonce: data.nonce,
            mode: 'dates'
        }).done(function (res) {
            if (!res.success) {
                self.$dateMount.html('<p class="zfb-appointment-error">' + (res.data && res.data.message ? res.data.message : 'خطا') + '</p>');
                return;
            }
            self.bounds = res.data.bounds || {};
            (res.data.dates || []).forEach(function (item) {
                self.availableDates[item.date] = item;
            });
            var today = new Date();
            var j = Jalali.toJalali(today.getFullYear(), today.getMonth() + 1, today.getDate());
            self.viewJy = j[0];
            self.viewJm = j[1];
            self.renderCalendar();
        }).fail(function () {
            self.$dateMount.html('<p class="zfb-appointment-error">خطا در بارگذاری</p>');
        });
    };

    Picker.prototype.renderCalendar = function () {
        var self = this;
        var data = getConsultationData(this.$root[0]);
        if (!data) {
            return;
        }

        var jm = this.viewJm;
        var jy = this.viewJy;
        var daysInMonth = jm <= 6 ? 31 : (jm <= 11 ? 30 : (this.isLeapJalali(jy) ? 30 : 29));
        var gFirst = Jalali.toGregorian(jy, jm, 1);
        var firstDate = new Date(gFirst[0], gFirst[1] - 1, gFirst[2]);
        var startWeekday = (firstDate.getDay() + 1) % 7;

        var html = '<div class="zfb-jalali-calendar">';
        html += '<div class="zfb-jalali-header">';
        html += '<button type="button" class="zfb-jalali-prev" aria-label="' + data.i18n.prevMonth + '">&lsaquo;</button>';
        html += '<span class="zfb-jalali-title">' + Jalali.j_months[jm - 1] + ' ' + jy + '</span>';
        html += '<button type="button" class="zfb-jalali-next" aria-label="' + data.i18n.nextMonth + '">&rsaquo;</button>';
        html += '</div>';
        html += '<div class="zfb-jalali-weekdays"><span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span></div>';
        html += '<div class="zfb-jalali-days">';

        var i;
        for (i = 0; i < startWeekday; i++) {
            html += '<span class="zfb-jalali-day zfb-jalali-day--empty"></span>';
        }
        for (var d = 1; d <= daysInMonth; d++) {
            var g = Jalali.toGregorian(jy, jm, d);
            var ymd = Jalali.formatGregorian(g[0], g[1], g[2]);
            var available = !!self.availableDates[ymd];
            var inBounds = (!self.bounds.min || ymd >= self.bounds.min) && (!self.bounds.max || ymd <= self.bounds.max);
            var classes = 'zfb-jalali-day';
            if (!available || !inBounds) {
                classes += ' zfb-jalali-day--disabled';
            }
            if (self.selectedDate === ymd) {
                classes += ' zfb-jalali-day--selected';
            }
            html += '<button type="button" class="' + classes + '" data-date="' + ymd + '" ' + ((!available || !inBounds) ? 'disabled' : '') + '>' + d + '</button>';
        }
        html += '</div></div>';

        this.$dateMount.html(html);

        this.$dateMount.find('.zfb-jalali-prev').on('click', function () {
            self.viewJm--;
            if (self.viewJm < 1) {
                self.viewJm = 12;
                self.viewJy--;
            }
            self.renderCalendar();
        });
        this.$dateMount.find('.zfb-jalali-next').on('click', function () {
            self.viewJm++;
            if (self.viewJm > 12) {
                self.viewJm = 1;
                self.viewJy++;
            }
            self.renderCalendar();
        });
        this.$dateMount.find('.zfb-jalali-day:not(.zfb-jalali-day--disabled)').on('click', function () {
            self.selectDate($(this).data('date'));
        });
    };

    Picker.prototype.isLeapJalali = function (jy) {
        var breaks = [1, 5, 9, 13, 17, 22, 26, 30];
        var jp = jy - 979;
        var jump = 0;
        var i;
        for (i = 0; i < breaks.length; i++) {
            var jm = breaks[i];
            jump -= 33 * Math.floor(jp / jm);
            jp %= jm;
        }
        return ((jp + jump) % 33) % 4 === 0 && (jp + jump) % 33 !== 0;
    };

    Picker.prototype.selectDate = function (ymd) {
        var self = this;
        var data = getConsultationData(this.$root[0]);
        if (!data) {
            return;
        }

        this.selectedDate = ymd;
        this.selectedSlot = '';
        this.$hidden.val('');
        this.renderCalendar();
        this.setTimeSectionDisabled(false);
        this.$slotsMount.html('<p class="zfb-appointment-loading">' + data.i18n.loading + '</p>');

        $.post(data.ajaxurl, {
            action: 'zfb_consultation_availability',
            nonce: data.nonce,
            mode: 'slots',
            date: ymd
        }).done(function (res) {
            if (!res.success) {
                self.$slotsMount.html('<p class="zfb-appointment-error">' + (res.data && res.data.message ? res.data.message : 'خطا') + '</p>');
                return;
            }
            self.renderSlots(res.data.slots || []);
        });
    };

    Picker.prototype.renderSlots = function (slots) {
        var self = this;
        var data = getConsultationData(this.$root[0]);
        if (!data) {
            return;
        }

        var open = slots.filter(function (s) { return s.remaining > 0; });
        if (!slots.length || !open.length) {
            this.$slotsMount.html('<p class="zfb-appointment-no-slots">' + data.i18n.noSlots + '</p>');
            return;
        }
        var html = '<div class="zfb-appointment-slot-list">';
        slots.forEach(function (slot) {
            var isDisabled = slot.remaining <= 0;
            var value = self.selectedDate + 'T' + slot.start + ':00';
            var label = slot.start + ' – ' + slot.end;
            var classes = 'zfb-appointment-slot' + (isDisabled ? ' zfb-appointment-slot--disabled' : '');
            html += '<button type="button" class="' + classes + '" data-value="' + value + '"' + (isDisabled ? ' disabled' : '') + '>' + label + '</button>';
        });
        html += '</div>';
        this.$slotsMount.html(html);
        this.$slotsMount.find('.zfb-appointment-slot:not(.zfb-appointment-slot--disabled)').on('click', function () {
            self.$slotsMount.find('.zfb-appointment-slot').removeClass('is-selected');
            $(this).addClass('is-selected');
            self.selectedSlot = $(this).data('value');
            self.$hidden.val(self.selectedSlot).trigger('change');
        });
    };

    Picker.prototype.setTimeSectionDisabled = function (disabled) {
        var data = getConsultationData(this.$root[0]);
        var placeholderText = (data && data.i18n && data.i18n.selectDateFirst)
            ? data.i18n.selectDateFirst
            : 'ابتدا تاریخ را انتخاب کنید';

        if (disabled) {
            this.$timeSection.addClass('is-disabled').attr('aria-disabled', 'true');
            if (!this.$slotsMount.find('.zfb-appointment-slots-placeholder').length) {
                this.$slotsMount.html('<p class="zfb-appointment-slots-placeholder">' + placeholderText + '</p>');
            }
            return;
        }

        this.$timeSection.removeClass('is-disabled').attr('aria-disabled', 'false');
        this.$slotsMount.find('.zfb-appointment-slots-placeholder').remove();
    };

    function initPickers(context) {
        getConsultationData(context);

        var $scope = context ? $(context) : $(document);
        $scope.find('.zfb-appointment-picker').not('[data-zfb-picker-init]').each(function () {
            var $picker = $(this);
            if (!getConsultationData($picker[0])) {
                return;
            }
            $picker.attr('data-zfb-picker-init', '1');
            new Picker($picker);
        });
    }

    function safeInitPickers(context) {
        try {
            initPickers(context);
        } catch (e) {
            if (window.console && console.error) {
                console.error('ZFB consultation picker init failed:', e);
            }
        }
    }

    window.zfbInitConsultationPickers = safeInitPickers;

    $(function () {
        safeInitPickers();
    });

    $(window).on('load', function () {
        safeInitPickers();
    });

    $(window).on('elementor/frontend/init', function () {
        safeInitPickers();
        if (typeof elementorFrontend !== 'undefined' && elementorFrontend.hooks) {
            elementorFrontend.hooks.addAction('frontend/element_ready/widget', function ($el) {
                safeInitPickers($el[0]);
            });
            elementorFrontend.hooks.addAction('frontend/element_ready/shortcode.default', function ($el) {
                safeInitPickers($el[0]);
            });
        }
    });

    if (typeof MutationObserver !== 'undefined') {
        var observerTimer = null;
        var observer = new MutationObserver(function () {
            if (observerTimer) {
                return;
            }
            observerTimer = window.setTimeout(function () {
                observerTimer = null;
                if (document.querySelector('.zfb-appointment-picker:not([data-zfb-picker-init])')) {
                    safeInitPickers();
                }
            }, 150);
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    }
})(jQuery);
