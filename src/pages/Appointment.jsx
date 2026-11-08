import Header from "../components/Header";
import Footer from "../components/Footer";
import { withBaseProps } from "../lib/paths";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function Appointment() {
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
                  <div {...{"data-elementor-type": "wp-page", "data-elementor-id": "1990", "className": "elementor elementor-1990", "data-elementor-post-type": "page"}}>
                    <div {...{"className": "elementor-element elementor-element-8ea64dd e-con-full e-flex e-con e-child", "data-id": "8ea64dd"}}>
                      <div {...{"className": "elementor-element elementor-element-fad2ec3 elementor-widget elementor-widget-cz_title", "data-id": "fad2ec3"}}>
                        <div {...{"className": "elementor-widget-container"}}>
                          <div>
                            <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                              <div {...{"className": "cz_title_content"}}>
                                <div {...{"className": "cz_wpe_content"}}>
                                  <h2 {...{"style": {"color": "var(--zfb-color-primary)"}}}>
                                    {"درخواست "}
                                    <span {...{"style": {"color": "var(--zfb-color-secondary)"}}}>
                                      {"مشاوره "}
                                    </span>
                                    {"و ارزیابی کودکتان"}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div {...{"className": "elementor-element elementor-element-91a6714 elementor-widget elementor-widget-cz_title", "data-id": "91a6714"}}>
                        <div {...{"className": "elementor-widget-container"}}>
                          <div>
                            <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                              <div {...{"className": "cz_title_content"}}>
                                <div {...{"className": "cz_wpe_content"}}>
                                  <p>
                                    {"برای شروع مسیر شناخت و رشد فرزندتان، کافی است فرم ارزیابی کودکان را پر کنید، و پس از آن کارشناسان ما پس از تحلیل پاسخنامه شما، با شما تماس خواهند گرفت."}
                                  </p>
                                  <p>
                                    {"همچنین در صورت نیاز به رزور قرار مشاوره مستقیما می‌توانید از فرم زیر اقدام کنید."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div {...{"className": "elementor-element elementor-element-9ee6ea8 e-con-full e-flex e-con e-child", "data-id": "9ee6ea8"}}>
                        <div {...{"className": "elementor-element elementor-element-afa3889 elementor-widget elementor-widget-cz_button", "data-id": "afa3889"}}>
                          <div {...{"className": "elementor-widget-container"}}>
                            <div {...{"className": ""}}>
                              <div>
                                <a {...withBaseProps({"href": "/assessment-forms/kids/arzyabi/", "className": "cz_btn cz_btn_txt_no_fx cz_btn_no_fx cz_mobile_btn_center"})}>
                                  <span>
                                    <strong>
                                      {"ارزیابی کودک شما "}
                                    </strong>
                                  </span>
                                  <b {...{"className": "cz_btn_onhover"}}>
                                    <strong>
                                      {" ارزیابی کودک شما "}
                                    </strong>
                                  </b>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div {...{"className": "elementor-element elementor-element-88fb67d codevz-con-stretch-yes e-flex e-con-boxed e-con e-parent", "data-id": "88fb67d"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-e6136ac elementor-widget elementor-widget-shortcode", "data-id": "e6136ac"}}>
                          <div {...{"className": "elementor-widget-container"}}>
                            <div {...{"className": "elementor-shortcode"}}>
                              <div {...{"className": "zfb-consultation-booking-wrap"}}>
                                <div {...{"className": "zfb-form-container zfb-form--single-stage zfb-form--embed-layout zfb-form--field-size-lg zfb-form--field-gap-y-3xl zfb-form--field-gap-x-xl zfb-form--footer-gap-3xl zfb-form--submit-align-end", "data-form-id": "4322", "data-success-display": "hide_with_link", "data-success-reset": "0"}}>
                                  <ReferenceForm {...{"className": "zfb-form", "formId": "4322", "totalStages": 1}}>
                                    <div {...{"className": "zfb-stages"}}>
                                      <FormStage {...{"className": "zfb-stage active", "data-stage": "0"}}>
                                        <div {...{"className": "zfb-stage-questions"}}>
                                          <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-162", "data-question": "0", "data-question-id": "162", "data-question-type": "text", "data-required": "true"}}>
                                            <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_0"}}>
                                              {" نام و نام خانوادگی "}
                                              <span {...{"className": "zfb-required"}}>
                                                {"*"}
                                              </span>
                                            </label>
                                            <div {...{"className": "zfb-question-field"}}>
                                              <input {...{"type": "text", "name": "zfb_question_0_0", "id": "zfb_field_0_0", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "letters_only"}} />
                                            </div>
                                            <div {...{"className": "zfb-question-footer"}}>
                                            </div>
                                          </div>
                                          <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-163", "data-question": "1", "data-question-id": "163", "data-question-type": "phone", "data-required": "true"}}>
                                            <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_1"}}>
                                              {" شماره موبایل "}
                                              <span {...{"className": "zfb-required"}}>
                                                {"*"}
                                              </span>
                                            </label>
                                            <div {...{"className": "zfb-question-field"}}>
                                              <input {...{"type": "tel", "name": "zfb_question_0_1", "id": "zfb_field_0_1", "className": "zfb-field zfb-phone-field zfb-text-input", "required": true, "data-validation-rule": "phone"}} />
                                            </div>
                                            <div {...{"className": "zfb-question-footer"}}>
                                            </div>
                                          </div>
                                          <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-164", "data-question": "2", "data-question-id": "164", "data-question-type": "text", "data-required": "true"}}>
                                            <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_2"}}>
                                              {" موضوع مشاوره "}
                                              <span {...{"className": "zfb-required"}}>
                                                {"*"}
                                              </span>
                                            </label>
                                            <div {...{"className": "zfb-question-field"}}>
                                              <input {...{"type": "text", "name": "zfb_question_0_2", "id": "zfb_field_0_2", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                                            </div>
                                            <div {...{"className": "zfb-question-footer"}}>
                                            </div>
                                          </div>
                                          <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-165", "data-question": "3", "data-question-id": "165", "data-question-type": "textarea", "data-required": "true"}}>
                                            <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_3"}}>
                                              {" توضیحات "}
                                              <span {...{"className": "zfb-required"}}>
                                                {"*"}
                                              </span>
                                            </label>
                                            <div {...{"className": "zfb-question-field"}}>
                                              <textarea {...{"name": "zfb_question_0_3", "id": "zfb_field_0_3", "className": "zfb-field zfb-textarea-field zfb-textarea", "rows": "4", "required": true, "data-validation-rule": "alphanumeric"}}>
                                              </textarea>
                                            </div>
                                            <div {...{"className": "zfb-question-footer"}}>
                                            </div>
                                          </div>
                                          <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-166", "data-question": "4", "data-question-id": "166", "data-question-type": "appointment", "data-required": "true"}}>
                                            <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_4"}}>
                                              {" زمان رزرو "}
                                              <span {...{"className": "zfb-required"}}>
                                                {"*"}
                                              </span>
                                            </label>
                                            <div {...{"className": "zfb-question-field"}}>
                                              <BookingPicker />
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
        </div>
        <Footer />
      </div>
    </div>
  );
}
