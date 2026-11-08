import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function SelfEsteem() {
  return (
    <div {...{"id": "layout", "className": "clr layout_"}}>
      <div {...{"className": "inner_layout"}}>
        <div {...{"className": "cz_overlay", "aria-hidden": "true"}}>
        </div>
        <Header />
        <div {...{"className": "page_cover", "aria-hidden": "true"}}>
        </div>
        <div {...{"className": "zfb-form-container zfb-form--page-layout zfb-form--field-size-lg zfb-form--field-gap-y-3xl zfb-form--field-gap-x-xl zfb-form--footer-gap-3xl zfb-form--submit-align-end", "data-form-id": "4017", "data-success-display": "hide_with_link", "data-success-reset": "0"}}>
          <div {...{"className": "zfb-form-header"}}>
            <h2>
              {"اندازه گیری: عزت نفس کلی و ارزش شخصی"}
            </h2>
            <div {...{"className": "zfb-form-description"}}>
              {" سنجش: میزان رضایت از زندگی و داشتن احساس خوب درمورد خود مقیاس عزت نفس روزنبرگ هریک از عبارت های زیر را به دقت بخوانید. به هر عبارتی که درمورد شما صدق می کند، پاسخ \"موافق\" و به هر عبارتی که در مورد شما صدق نمی‌کند، پاسخ \"مخالف\" بدهید. "}
            </div>
          </div>
          <ReferenceForm {...{"className": "zfb-form", "formId": "4017", "totalStages": 2}}>
            <div {...{"className": "zfb-stages"}}>
              <FormStage {...{"className": "zfb-stage active", "data-stage": "0"}}>
                <div {...{"className": "zfb-stage-header"}}>
                  <h3>
                    {"اطلاعات وارد کننده فرم"}
                  </h3>
                </div>
                <div {...{"className": "zfb-stage-questions"}}>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-2", "data-question": "0", "data-question-id": "2", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_0"}}>
                      {" نام "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_0", "id": "zfb_field_0_0", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-3", "data-question": "1", "data-question-id": "3", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_1"}}>
                      {" نام خانوادگی "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_1", "id": "zfb_field_0_1", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-94", "data-question": "2", "data-question-id": "94", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_2"}}>
                      {" سن "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_2", "id": "zfb_field_0_2", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "numbers_only"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-5", "data-question": "3", "data-question-id": "5", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_3"}}>
                      {" شماره تماس "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_3", "id": "zfb_field_0_3", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                </div>
                <div {...{"className": "zfb-stage-navigation zfb-stage-navigation--submit-align-end"}}>
                  <div {...{"className": "zfb-stage-navigation-prev"}}>
                    <FormButton {...{"type": "button", "className": "zfb-btn zfb-btn-prev", "direction": "prev"}}>
                      {"مرحله قبل"}
                    </FormButton>
                  </div>
                  <FormProgress />
                  <FormButton {...{"type": "button", "className": "zfb-btn zfb-btn-next", "direction": "next"}}>
                    {"مرحله بعد"}
                  </FormButton>
                </div>
              </FormStage>
              <FormStage {...{"className": "zfb-stage", "data-stage": "1"}}>
                <div {...{"className": "zfb-stage-header"}}>
                  <h3>
                    {"سوالات"}
                  </h3>
                </div>
                <div {...{"className": "zfb-stage-questions"}}>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-6", "data-question": "0", "data-question-id": "6", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_0"}}>
                      {" احساس می کنم انسان با ارزشی هستم حداقل مساوی با دیگران. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_0", "value": "5", "id": "zfb_question_1_0_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_0", "value": "6", "id": "zfb_question_1_0_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-7", "data-question": "1", "data-question-id": "7", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_1"}}>
                      {" احساس می کنم چند ویژگی خوب دارم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_1", "value": "7", "id": "zfb_question_1_1_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_1", "value": "8", "id": "zfb_question_1_1_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-8", "data-question": "2", "data-question-id": "8", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_2"}}>
                      {" می توانم به خوبی اکثر مردم کارها را انجام دهم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_2", "value": "9", "id": "zfb_question_1_2_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_2", "value": "10", "id": "zfb_question_1_2_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-9", "data-question": "3", "data-question-id": "9", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_3"}}>
                      {" نسبت به خود نگرش مثبت دارم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_3", "value": "11", "id": "zfb_question_1_3_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_3", "value": "12", "id": "zfb_question_1_3_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-10", "data-question": "4", "data-question-id": "10", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_4"}}>
                      {" به طورکلی، از خودم راضی هستم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_4", "value": "13", "id": "zfb_question_1_4_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_4", "value": "14", "id": "zfb_question_1_4_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-11", "data-question": "5", "data-question-id": "11", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_5"}}>
                      {" احساس می کنم که چیز زیادی ندارم که به آنها افتخار کنم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_5", "value": "15", "id": "zfb_question_1_5_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_5", "value": "16", "id": "zfb_question_1_5_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-12", "data-question": "6", "data-question-id": "12", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_6"}}>
                      {" با در نظر گرفتن همه چیز، معمولا فکر می کنم شکست خورده ام. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_6", "value": "17", "id": "zfb_question_1_6_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_6", "value": "18", "id": "zfb_question_1_6_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-13", "data-question": "7", "data-question-id": "13", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_7"}}>
                      {" ای کاش می توانستم احترام بیشتری به خودم قائل شوم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_7", "value": "19", "id": "zfb_question_1_7_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_7", "value": "20", "id": "zfb_question_1_7_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-14", "data-question": "8", "data-question-id": "14", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_8"}}>
                      {" گاهی فکر می کنم اصلا نمی توانم کاری انجام دهم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_8", "value": "21", "id": "zfb_question_1_8_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_8", "value": "22", "id": "zfb_question_1_8_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-15", "data-question": "9", "data-question-id": "15", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_9"}}>
                      {" گاهی احساس می کنم بی فایده هستم. "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_9", "value": "23", "id": "zfb_question_1_9_%d9%85%d9%88%d8%a7%d9%81%d9%82%d9%85"}} />
                          <span>
                            {"موافقم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_9", "value": "24", "id": "zfb_question_1_9_%d9%85%d8%ae%d8%a7%d9%84%d9%81"}} />
                          <span>
                            {"مخالف"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                </div>
                <div {...{"className": "zfb-stage-navigation zfb-stage-navigation--submit-align-end"}}>
                  <div {...{"className": "zfb-stage-navigation-prev"}}>
                    <FormButton {...{"type": "button", "className": "zfb-btn zfb-btn-prev", "direction": "prev"}}>
                      {"مرحله قبل"}
                    </FormButton>
                  </div>
                  <FormProgress />
                  <button {...{"type": "submit", "className": "zfb-btn zfb-btn-submit zfb-btn--variant-success zfb-btn--size-fit"}}>
                    {"ارسال فرم"}
                  </button>
                </div>
              </FormStage>
            </div>
          </ReferenceForm>
        </div>
        <Footer />
      </div>
    </div>
  );
}
