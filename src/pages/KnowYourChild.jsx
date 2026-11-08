import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function KnowYourChild() {
  return (
    <div {...{"id": "layout", "className": "clr layout_"}}>
      <div {...{"className": "inner_layout"}}>
        <div {...{"className": "cz_overlay", "aria-hidden": "true"}}>
        </div>
        <Header />
        <div {...{"className": "page_cover", "aria-hidden": "true"}}>
        </div>
        <div {...{"id": "page_content", "className": "page_content", "role": "main"}}>
          <div {...{"className": "row clr"}}>
            <div {...{"className": "s12 clr"}}>
              <div {...{"className": "cz_is_blank clr"}}>
                <div {...{"className": "cz_post_content clr"}}>
                  <div {...{"data-elementor-type": "wp-page", "data-elementor-id": "4276", "className": "elementor elementor-4276", "data-elementor-post-type": "page"}}>
                    <div {...{"className": "elementor-element elementor-element-091312a e-con-full e-flex e-con e-child", "data-id": "091312a"}}>
                      <div {...{"className": "elementor-element elementor-element-38719e6 elementor-widget elementor-widget-cz_title", "data-id": "38719e6"}}>
                        <div {...{"className": "elementor-widget-container"}}>
                          <div>
                            <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                              <div {...{"className": "cz_title_content"}}>
                                <div {...{"className": "cz_wpe_content"}}>
                                  <h2 {...{"style": {"color": "var(--zfb-color-primary)"}}}>
                                    {"شناخت دنیای "}
                                    <span {...{"style": {"color": "var(--zfb-color-secondary)"}}}>
                                      {"منحصر‌به‌فرد "}
                                    </span>
                                    {"کودکتان"}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div {...{"className": "elementor-element elementor-element-cc12b61 elementor-widget elementor-widget-cz_title", "data-id": "cc12b61"}}>
                        <div {...{"className": "elementor-widget-container"}}>
                          <div>
                            <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                              <div {...{"className": "cz_title_content"}}>
                                <div {...{"className": "cz_wpe_content"}}>
                                  <p>
                                    {"استعدادها، توانایی‌ها، سبک یادگیری و نیازهای رشدی فرزندتان را بهتر بشناسید و مسیر رشد او را آگاهانه‌تر همراهی کنید."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div {...{"className": "elementor-element elementor-element-682101 e-flex e-con-boxed e-con e-parent", "data-id": "682101"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-e92e3af elementor-widget elementor-widget-shortcode", "data-id": "e92e3af"}}>
                          <div {...{"className": "elementor-widget-container"}}>
                            <div {...{"className": "elementor-shortcode"}}>
                              <div {...{"className": "zfb-form-container zfb-form--single-stage zfb-form--embed-layout zfb-form--field-size-lg zfb-form--field-gap-y-3xl zfb-form--field-gap-x-xl zfb-form--footer-gap-3xl zfb-form--submit-align-end", "data-form-id": "4275", "data-success-display": "hide_with_link", "data-success-reset": "0"}}>
                                <div {...{"className": "zfb-form-header"}}>
                                  <div {...{"className": "zfb-form-description"}}>
                                    {" در ضربان یار، ما باور داریم هر کودک دنیای منحصربه‌فرد خودش را دارد. با ثبت اطلاعات زیر، کارشناسان ما در کوتاه‌ترین زمان با شما تماس می‌گیرند تا متناسب با سن و نیازهای فرزندتان، بهترین مسیر شناخت و رشد را پیشنهاد دهند. "}
                                  </div>
                                </div>
                                <ReferenceForm {...{"className": "zfb-form", "formId": "4275", "totalStages": 1}}>
                                  <div {...{"className": "zfb-stages"}}>
                                    <FormStage {...{"className": "zfb-stage active", "data-stage": "0"}}>
                                      <div {...{"className": "zfb-stage-header"}}>
                                        <div {...{"className": "zfb-stage-description"}}>
                                          {"پس از ثبت اطلاعات، کارشناسان ضربان یار در اسرع وقت با شما تماس خواهند گرفت تا: شرایط فرزند شما را بهتر بررسی کنند مناسب‌ترین خدمات را معرفی کنند و در صورت نیاز، مسیر ارزیابی تخصصی را برای شما توضیح دهند."}
                                        </div>
                                        <div {...{"className": "zfb-stage-notes"}}>
                                          <strong>
                                            {"یادداشت:"}
                                          </strong>
                                          {" لطفاً فرم زیر را با دقت تکمیل کنید "}
                                        </div>
                                      </div>
                                      <div {...{"className": "zfb-stage-questions"}}>
                                        <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--half-desktop", "id": "zfb-question-148", "data-question": "0", "data-question-id": "148", "data-question-type": "text", "data-required": "true"}}>
                                          <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_0"}}>
                                            {" نام و نام خانوادگی والد "}
                                            <span {...{"className": "zfb-required"}}>
                                              {"*"}
                                            </span>
                                          </label>
                                          <div {...{"className": "zfb-question-field"}}>
                                            <input {...{"type": "text", "name": "zfb_question_0_0", "id": "zfb_field_0_0", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "letters_only"}} />
                                          </div>
                                          <div {...{"className": "zfb-question-footer"}}>
                                            <p {...{"className": "zfb-field-hint"}}>
                                              {"برای ارتباط با شما"}
                                            </p>
                                          </div>
                                        </div>
                                        <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--half-desktop", "id": "zfb-question-149", "data-question": "1", "data-question-id": "149", "data-question-type": "text", "data-required": "true"}}>
                                          <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_1"}}>
                                            {" شماره تماس "}
                                            <span {...{"className": "zfb-required"}}>
                                              {"*"}
                                            </span>
                                          </label>
                                          <div {...{"className": "zfb-question-field"}}>
                                            <input {...{"type": "text", "name": "zfb_question_0_1", "id": "zfb_field_0_1", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "phone"}} />
                                          </div>
                                          <div {...{"className": "zfb-question-footer"}}>
                                            <p {...{"className": "zfb-field-hint"}}>
                                              {"کارشناسان ما از طریق این شماره با شما تماس خواهند گرفت"}
                                            </p>
                                          </div>
                                        </div>
                                        <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--half-desktop", "id": "zfb-question-150", "data-question": "2", "data-question-id": "150", "data-question-type": "text", "data-required": "true"}}>
                                          <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_2"}}>
                                            {" نام فرزند "}
                                            <span {...{"className": "zfb-required"}}>
                                              {"*"}
                                            </span>
                                          </label>
                                          <div {...{"className": "zfb-question-field"}}>
                                            <input {...{"type": "text", "name": "zfb_question_0_2", "id": "zfb_field_0_2", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "letters_only"}} />
                                          </div>
                                          <div {...{"className": "zfb-question-footer"}}>
                                          </div>
                                        </div>
                                        <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--half-desktop", "id": "zfb-question-151", "data-question": "3", "data-question-id": "151", "data-question-type": "text", "data-required": "true"}}>
                                          <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_3"}}>
                                            {" سن فرزند "}
                                            <span {...{"className": "zfb-required"}}>
                                              {"*"}
                                            </span>
                                          </label>
                                          <div {...{"className": "zfb-question-field"}}>
                                            <input {...{"type": "text", "name": "zfb_question_0_3", "id": "zfb_field_0_3", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "numbers_only"}} />
                                          </div>
                                          <div {...{"className": "zfb-question-footer"}}>
                                          </div>
                                        </div>
                                        <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-152", "data-question": "4", "data-question-id": "152", "data-question-type": "textarea", "data-required": "true"}}>
                                          <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_4"}}>
                                            {" مهم‌ترین دغدغه یا موضوع مورد نظر شما درباره فرزندتان را بنویسید؟ "}
                                            <span {...{"className": "zfb-required"}}>
                                              {"*"}
                                            </span>
                                          </label>
                                          <div {...{"className": "zfb-question-field"}}>
                                            <textarea {...{"name": "zfb_question_0_4", "id": "zfb_field_0_4", "className": "zfb-field zfb-textarea-field zfb-textarea", "rows": "4", "required": true, "data-validation-rule": "alphanumeric"}}>
                                            </textarea>
                                          </div>
                                          <div {...{"className": "zfb-question-footer"}}>
                                          </div>
                                        </div>
                                      </div>
                                    </FormStage>
                                  </div>
                                  <div {...{"className": "zfb-form-actions zfb-form-actions--align-end zfb-form-actions--button-only"}}>
                                    <button {...{"type": "submit", "className": "zfb-btn zfb-btn-submit zfb-btn--variant-success zfb-btn--size-fit"}}>
                                      {"ارسال فرم"}
                                    </button>
                                  </div>
                                </ReferenceForm>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
