import Header from "../components/Header";
import Footer from "../components/Footer";
import { withBaseProps } from "../lib/paths";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function ParentAssessment() {
  return (
    <div {...{"id": "layout", "className": "clr layout_"}}>
      <div {...{"className": "inner_layout"}}>
        <div {...{"className": "cz_overlay", "aria-hidden": "true"}}>
        </div>
        <Header />
        <div {...{"className": "page_cover", "aria-hidden": "true"}}>
        </div>
        <div {...{"className": "zfb-form-container zfb-form--page-layout zfb-form--field-size-lg zfb-form--field-gap-y-3xl zfb-form--field-gap-x-xl zfb-form--footer-gap-3xl zfb-form--submit-align-end", "data-form-id": "4018", "data-success-display": "hide_with_link", "data-success-reset": "0"}}>
          <FirstStepNotice>
            <p {...{"data-start": "139", "data-end": "330"}}>
              {"والدین گرامی،"}
              <br {...{"data-start": "152", "data-end": "155"}} />
              {"برای اینکه بتوانیم ارزیابی دقیق‌تر و کامل‌تری از وضعیت فرزندتان داشته باشیم، لطفاً به پرسش‌های فرم با دقت و حوصله پاسخ دهید. پاسخ‌های شما نقش مهمی در درک بهتر شرایط کودک دارد."}
            </p>
            <p {...{"data-start": "332", "data-end": "425"}}>
              {"در صورت تمایل، می‌توانید برای تکمیل‌تر شدن ارزیابی، موارد زیر را نیز آماده و بارگذاری نمایید:"}
            </p>
            <ul {...{"data-start": "427", "data-end": "529"}}>
              <li {...{"data-start": "427", "data-end": "455"}}>
                <p {...{"data-start": "429", "data-end": "455"}}>
                  {"۶ عکس از ۶ املای اخیر کودک"}
                </p>
              </li>
              <li {...{"data-start": "456", "data-end": "529"}}>
                <p {...{"data-start": "458", "data-end": "529"}}>
                  {"یک فایل صوتی از کودک در حال خواندن درس‌های «ششم» و «هشتم» کتاب بخوانیم"}
                </p>
              </li>
            </ul>
            <p {...{"data-start": "531", "data-end": "655"}}>
              {"ارسال این موارد "}
              <strong {...{"data-start": "547", "data-end": "562"}}>
                {"الزامی نیست"}
              </strong>
              {"، اما می‌تواند به ما کمک کند تصویر دقیق‌تری از مهارت‌های خواندن و نوشتن فرزندتان داشته باشیم."}
            </p>
            <p {...{"data-start": "657", "data-end": "714", "data-is-last-node": "", "data-is-only-node": ""}}>
              {"از همکاری و اعتمادی که به ما دارید صمیمانه سپاسگزاریم. 🌸"}
            </p>
          </FirstStepNotice>
          <div {...{"className": "zfb-form-header"}}>
            <h2>
              {"پرسشنامه ارزیابی کودکان ویژه والدین"}
            </h2>
            <div {...{"className": "zfb-form-description"}}>
              {" سپاسگزاریم. پیشاپیش از زمانی که به ما اختصاص داده‌اید، بسیار وقت شما بخیر. لازم به ذکر است که از اطلاعاتی که در اختیار ما می‌گذارید، در جهت هرچه بهتر کمک کردن به فرزند شما استفاده خواهیم کرد و هیچگونه کاربرد دیگری مبتنی بر قضاوت نادرست نسبت به کودک عزیزتان ندارد. "}
            </div>
          </div>
          <ReferenceForm {...{"className": "zfb-form", "formId": "4018", "totalStages": 5}}>
            <div {...{"className": "zfb-stages"}}>
              <FormStage {...{"className": "zfb-stage active", "data-stage": "0"}}>
                <div {...{"className": "zfb-stage-header"}}>
                  <h3>
                    {"مرحله اول"}
                  </h3>
                  <div {...{"className": "zfb-stage-notes"}}>
                    <strong>
                      {"یادداشت:"}
                    </strong>
                    {" دقت کنید که تمامی پرس ها پاسخ داده شود "}
                  </div>
                </div>
                <div {...{"className": "zfb-stage-questions"}}>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-16", "data-question": "0", "data-question-id": "16", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_0"}}>
                      {" نام و نام خانوادگی کودک: "}
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
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-17", "data-question": "1", "data-question-id": "17", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_1"}}>
                      {" تاریخ تولد: "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_1", "id": "zfb_field_0_1", "className": "zfb-field zfb-text-field zfb-text-input", "data-validation-rule": "numbers_only"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-18", "data-question": "2", "data-question-id": "18", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_2"}}>
                      {" پایه تحصیلی "}
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
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-19", "data-question": "3", "data-question-id": "19", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_3"}}>
                      {" تعداد خواهر "}
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
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-20", "data-question": "4", "data-question-id": "20", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_4"}}>
                      {" تعداد برادر "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_4", "id": "zfb_field_0_4", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "numbers_only"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-21", "data-question": "5", "data-question-id": "21", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_5"}}>
                      {" فرزند چندم خانواده: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_5", "id": "zfb_field_0_5", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "numbers_only"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-22", "data-question": "6", "data-question-id": "22", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_6"}}>
                      {" سابقه گذراندن پیش دبستانی "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_0_6", "value": "241", "id": "zfb_question_0_6_%d8%af%d8%a7%d8%b1%d8%af"}} />
                          <span>
                            {"دارد"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_0_6", "value": "242", "id": "zfb_question_0_6_%d9%86%d8%af%d8%a7%d8%b1%d8%af"}} />
                          <span>
                            {"ندارد"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-23", "data-question": "7", "data-question-id": "23", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_7"}}>
                      {" سابقه تحصیل مجدد در یک پایه "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_0_7", "value": "27", "id": "zfb_question_0_7_%d8%af%d8%a7%d8%b1%d8%af"}} />
                          <span>
                            {"دارد"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_0_7", "value": "28", "id": "zfb_question_0_7_%d9%86%d8%af%d8%a7%d8%b1%d8%af"}} />
                          <span>
                            {"ندارد"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-24", "data-question": "8", "data-question-id": "24", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_0_8"}}>
                      {" نام دقیق زبان و گویش مادری "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_0_8", "id": "zfb_field_0_8", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "letters_only"}} />
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
                    {"مرحله دوم"}
                  </h3>
                  <div {...{"className": "zfb-stage-description"}}>
                    {"به پرسش‌های زیر پاسخ دهید"}
                  </div>
                </div>
                <div {...{"className": "zfb-stage-questions"}}>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-25", "data-question": "0", "data-question-id": "25", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_0"}}>
                      {" تحصیلات مادر "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_0", "id": "zfb_field_1_0", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-26", "data-question": "1", "data-question-id": "26", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_1"}}>
                      {" شغل مادر "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_1", "id": "zfb_field_1_1", "className": "zfb-field zfb-text-field zfb-text-input"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-27", "data-question": "2", "data-question-id": "27", "data-question-type": "radio"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_2"}}>
                      {" در قید حیات هستند "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_2", "value": "29", "id": "zfb_question_1_2_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_2", "value": "30", "id": "zfb_question_1_2_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-28", "data-question": "3", "data-question-id": "28", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_3"}}>
                      {" تحصیلات پدر "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_3", "id": "zfb_field_1_3", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-29", "data-question": "4", "data-question-id": "29", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_4"}}>
                      {" شغل پدر "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_4", "id": "zfb_field_1_4", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-30", "data-question": "5", "data-question-id": "30", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_5"}}>
                      {" در قید حیات هستند "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_5", "value": "31", "id": "zfb_question_1_5_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_1_5", "value": "32", "id": "zfb_question_1_5_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-31", "data-question": "6", "data-question-id": "31", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_6"}}>
                      {" لطفا چنانچه یکی از والدین فوت کرده‌اند دلیل آن مختصرا ذکر شود "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_6", "id": "zfb_field_1_6", "className": "zfb-field zfb-text-field zfb-text-input"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-32", "data-question": "7", "data-question-id": "32", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_7"}}>
                      {" سن مادر "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_7", "id": "zfb_field_1_7", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-33", "data-question": "8", "data-question-id": "33", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_8"}}>
                      {" سن پدر "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_8", "id": "zfb_field_1_8", "className": "zfb-field zfb-text-field zfb-text-input"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-160", "data-question": "9", "data-question-id": "160", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_9"}}>
                      {" نام و نام‌خانوادگی تکمیل کننده فرم "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_9", "id": "zfb_field_1_9", "className": "zfb-field zfb-text-field zfb-text-input", "required": true, "data-validation-rule": "letters_only"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-34", "data-question": "10", "data-question-id": "34", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_10"}}>
                      {" نسبت تکمیل کننده پرسشنامه با کودک "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_10", "id": "zfb_field_1_10", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-35", "data-question": "11", "data-question-id": "35", "data-question-type": "text", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_11"}}>
                      {" شماره تماس "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_11", "id": "zfb_field_1_11", "className": "zfb-field zfb-text-field zfb-text-input", "required": true}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-36", "data-question": "12", "data-question-id": "36", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_1_12"}}>
                      {" آدرس منزل "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_1_12", "id": "zfb_field_1_12", "className": "zfb-field zfb-text-field zfb-text-input"}} />
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
              <FormStage {...{"className": "zfb-stage", "data-stage": "2"}}>
                <div {...{"className": "zfb-stage-header"}}>
                  <h3>
                    {"سابقه پزشکی و دارویی کودک و والدین محترم"}
                  </h3>
                </div>
                <div {...{"className": "zfb-stage-questions"}}>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-37", "data-question": "0", "data-question-id": "37", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_2_0"}}>
                      {" آیا کودک تحت نظر مداوم پزشک یا روانپزشک قرار داشته یا دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_2_0", "value": "33", "id": "zfb_question_2_0_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_2_0", "value": "34", "id": "zfb_question_2_0_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-38", "data-question": "1", "data-question-id": "38", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_2_1"}}>
                      {" نوع بیماری "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_2_1", "id": "zfb_field_2_1", "className": "zfb-field zfb-text-field zfb-text-input"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-39", "data-question": "2", "data-question-id": "39", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_2_2"}}>
                      {" آیا کودک در حال حاضر دارو مصرف می‌کند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_2_2", "value": "35", "id": "zfb_question_2_2_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_2_2", "value": "36", "id": "zfb_question_2_2_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-40", "data-question": "3", "data-question-id": "40", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_2_3"}}>
                      {" نام دارو‌ها در صورت مصرف "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_2_3", "id": "zfb_field_2_3", "className": "zfb-field zfb-text-field zfb-text-input"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-41", "data-question": "4", "data-question-id": "41", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_2_4"}}>
                      {" آیا کودک سابقه مراجعه و استفاده از خدمات کاردرمانی یا گفتاردرمانی را داشته است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_2_4", "value": "37", "id": "zfb_question_2_4_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_2_4", "value": "38", "id": "zfb_question_2_4_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-42", "data-question": "5", "data-question-id": "42", "data-question-type": "text"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_2_5"}}>
                      {" علت مراجعه؟ "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <input {...{"type": "text", "name": "zfb_question_2_5", "id": "zfb_field_2_5", "className": "zfb-field zfb-text-field zfb-text-input"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-43", "data-question": "6", "data-question-id": "43", "data-question-type": "textarea"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_2_6"}}>
                      {" سابقه هر نوع بیماری در پدر، مادر یا سایر اعضای خانواده و خویشاوندان و نسبت آنها با کودک ذکر شود "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <textarea {...{"name": "zfb_question_2_6", "id": "zfb_field_2_6", "className": "zfb-field zfb-textarea-field zfb-textarea", "rows": "4"}}>
                      </textarea>
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
              <FormStage {...{"className": "zfb-stage", "data-stage": "3"}}>
                <div {...{"className": "zfb-stage-header"}}>
                  <h3>
                    {"ارزیابی کودک"}
                  </h3>
                </div>
                <div {...{"className": "zfb-stage-questions"}}>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-44", "data-question": "0", "data-question-id": "44", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_0"}}>
                      {" مادر در زمان بارداری چند سال داشته است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_0", "value": "279", "id": "zfb_question_3_0_%da%a9%d9%85%d8%aa%d8%b1-%d8%a7%d8%b2-18"}} />
                          <span>
                            {"کمتر از 18"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_0", "value": "280", "id": "zfb_question_3_0_%d8%a8%db%8c%d9%86-18-%d8%aa%d8%a7-30"}} />
                          <span>
                            {"بین 18 تا 30"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_0", "value": "281", "id": "zfb_question_3_0_31-%d8%aa%d8%a7-35"}} />
                          <span>
                            {"31 تا 35"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_0", "value": "282", "id": "zfb_question_3_0_36-%d8%a8%d9%87-%d8%a8%d8%a7%d9%84%d8%a7"}} />
                          <span>
                            {"36 به بالا"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-45", "data-question": "1", "data-question-id": "45", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_1"}}>
                      {" آیا مادر در دوران بارداری دارو، الکل یا دخانیات مصرف کرده است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_1", "value": "43", "id": "zfb_question_3_1_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_1", "value": "44", "id": "zfb_question_3_1_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-46", "data-question": "2", "data-question-id": "46", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_2"}}>
                      {" آیا مادر در دوران بارداری تحت استرس شدید بوده است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_2", "value": "45", "id": "zfb_question_3_2_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_2", "value": "46", "id": "zfb_question_3_2_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-47", "data-question": "3", "data-question-id": "47", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_3"}}>
                      {" آیا کودک تولد زودرس (کمتر از 38 هفته) داشته است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_3", "value": "47", "id": "zfb_question_3_3_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_3", "value": "48", "id": "zfb_question_3_3_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-48", "data-question": "4", "data-question-id": "48", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_4"}}>
                      {" آیا کودک در زمان تولد کم‌وزنی داشته است؟ (زیر 2.5 کیلو) "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_4", "value": "49", "id": "zfb_question_3_4_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_4", "value": "50", "id": "zfb_question_3_4_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-49", "data-question": "5", "data-question-id": "49", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_5"}}>
                      {" آیا کودک در زمان نوزادی زردی داشته است؟ درصورتی که داشته است، شدت آن را مشخص نمایید: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_5", "value": "51", "id": "zfb_question_3_5_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_5", "value": "52", "id": "zfb_question_3_5_10-%d8%aa%d8%a7-15"}} />
                          <span>
                            {"10 تا 15"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_5", "value": "53", "id": "zfb_question_3_5_%d8%a8%d8%a7%d9%84%d8%a7%db%8c-15"}} />
                          <span>
                            {"بالای 15"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-50", "data-question": "6", "data-question-id": "50", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_6"}}>
                      {" درصورتی که کودک در بدو تولد یا در دوران کودکی مشکل خاصی داشته است، لطفاً آن را مشخص کنید: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_6[]", "value": "54", "id": "zfb_question_3_6_1"}} />
                          <span>
                            {"جراحی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_6[]", "value": "55", "id": "zfb_question_3_6_2"}} />
                          <span>
                            {"تاخیر در گریه هنگام تولد"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_6[]", "value": "56", "id": "zfb_question_3_6_3"}} />
                          <span>
                            {"کبود شدن زمان تولد"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_6[]", "value": "57", "id": "zfb_question_3_6_4"}} />
                          <span>
                            {"بیهوشی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_6[]", "value": "58", "id": "zfb_question_3_6_5"}} />
                          <span>
                            {"بستری طولانی مدت در بیمارستان"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_6[]", "value": "59", "id": "zfb_question_3_6_6"}} />
                          <span>
                            {"کم‌خونی یا تالاسمی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_6[]", "value": "60", "id": "zfb_question_3_6_7", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-51", "data-question": "7", "data-question-id": "51", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_7"}}>
                      {" کودک در چند ماهگی شروع به راه رفتن کرده است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_7", "value": "61", "id": "zfb_question_3_7_%d9%82%d8%a8%d9%84-%d8%a7%d8%b2-17-%d9%85%d8%a7%d9%87%da%af%db%8c"}} />
                          <span>
                            {"قبل از 17 ماهگی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_7", "value": "62", "id": "zfb_question_3_7_%d8%a8%d8%b9%d8%af-%d8%a7%d8%b2-17-%d9%85%d8%a7%d9%87%da%af%db%8c"}} />
                          <span>
                            {"بعد از 17 ماهگی"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-52", "data-question": "8", "data-question-id": "52", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_8"}}>
                      {" کودک در چه سنی شروع به صحبت کردن کرده است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_8", "value": "63", "id": "zfb_question_3_8_%d9%82%d8%a8%d9%84-%d8%a7%d8%b2-16-%d9%85%d8%a7%d9%87%da%af%db%8c"}} />
                          <span>
                            {"قبل از 16 ماهگی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_8", "value": "64", "id": "zfb_question_3_8_%d8%a8%d8%b9%d8%af-%d8%a7%d8%b2-16-%d9%85%d8%a7%d9%87%da%af%db%8c"}} />
                          <span>
                            {"بعد از 16 ماهگی"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-53", "data-question": "9", "data-question-id": "53", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_9"}}>
                      {" آیا کودک در مراحل رشدی پرش داشته است؟ (به عنوان مثال بدون چهار دست و پا رفتن، شروع به راه رفتن کرده) "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_9", "value": "65", "id": "zfb_question_3_9_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_9", "value": "66", "id": "zfb_question_3_9_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-54", "data-question": "10", "data-question-id": "54", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_10"}}>
                      {" هر کدام از گزینه‌های زیر که برای کودک شما اتفاق افتاده است یا در مورد او صحیح می‌باشد را مشخص کنید: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "67", "id": "zfb_question_3_10_1"}} />
                          <span>
                            {"آسیب به سر یا شکم مادر در بارداری"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "68", "id": "zfb_question_3_10_2"}} />
                          <span>
                            {"تشنج به دنبال تب"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "69", "id": "zfb_question_3_10_3"}} />
                          <span>
                            {"عفونت مغزی (مننژیت یا آنسفالیت)"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "70", "id": "zfb_question_3_10_4"}} />
                          <span>
                            {"اختلال در تکلم، حس یا حرکت"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "71", "id": "zfb_question_3_10_5"}} />
                          <span>
                            {"تالاسمی یا آنمی سیکل سل"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "72", "id": "zfb_question_3_10_6"}} />
                          <span>
                            {"سردرد یا سرگیجه زیاد"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "73", "id": "zfb_question_3_10_7"}} />
                          <span>
                            {"حرکات تیک یا غیرطبیعی صورت و اندام‌ها"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "74", "id": "zfb_question_3_10_8"}} />
                          <span>
                            {"خیره شدن و قطع ارتباط با محیط"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "75", "id": "zfb_question_3_10_9"}} />
                          <span>
                            {"صرع یا بیماری مغزی جدی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_10[]", "value": "76", "id": "zfb_question_3_10_10", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-55", "data-question": "11", "data-question-id": "55", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_11"}}>
                      {" بررسی وضعیت بینایی کودک – گزینه‌های صحیح را انتخاب کنید: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_11[]", "value": "77", "id": "zfb_question_3_11_1"}} />
                          <span>
                            {"گم کردن خطوط هنگام مطالعه"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_11[]", "value": "78", "id": "zfb_question_3_11_2"}} />
                          <span>
                            {"سابقه تنبلی چشم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_11[]", "value": "79", "id": "zfb_question_3_11_3"}} />
                          <span>
                            {"استفاده از عینک"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_11[]", "value": "80", "id": "zfb_question_3_11_4"}} />
                          <span>
                            {"نزدیک کردن زیاد چشم به تلویزیون یا کتاب"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_11[]", "value": "81", "id": "zfb_question_3_11_5"}} />
                          <span>
                            {"کج کردن سر هنگام نگاه کردن یا خواندن"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_11[]", "value": "82", "id": "zfb_question_3_11_6", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-56", "data-question": "12", "data-question-id": "56", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_12"}}>
                      {" بررسی وضعیت شنوایی – نشانه‌هایی که کودک دارد را مشخص کنید: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_12[]", "value": "83", "id": "zfb_question_3_12_1"}} />
                          <span>
                            {"استفاده از سمعک"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_12[]", "value": "84", "id": "zfb_question_3_12_2"}} />
                          <span>
                            {"سابقه التهاب گوش"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_12[]", "value": "85", "id": "zfb_question_3_12_3"}} />
                          <span>
                            {"پارگی پرده گوش"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_12[]", "value": "86", "id": "zfb_question_3_12_4"}} />
                          <span>
                            {"بلند کردن بیش از حد صدای تلویزیون"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_12[]", "value": "87", "id": "zfb_question_3_12_5"}} />
                          <span>
                            {"ماساژ گوش برای خوابیدن"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_12[]", "value": "88", "id": "zfb_question_3_12_6"}} />
                          <span>
                            {"جلو آوردن سر هنگام گوش دادن"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_12[]", "value": "89", "id": "zfb_question_3_12_7", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-57", "data-question": "13", "data-question-id": "57", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_13"}}>
                      {" بررسی وضعیت غدد: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_13[]", "value": "90", "id": "zfb_question_3_13_1"}} />
                          <span>
                            {"دیابت"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_13[]", "value": "91", "id": "zfb_question_3_13_2"}} />
                          <span>
                            {"کم‌کاری یا پرکاری تیروئید"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_13[]", "value": "92", "id": "zfb_question_3_13_3"}} />
                          <span>
                            {"کمبود ویتامین B، D، امگا ۳"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_13[]", "value": "93", "id": "zfb_question_3_13_4", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-58", "data-question": "14", "data-question-id": "58", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_14"}}>
                      {" آیا اخیراً حادثه مهمی در خانواده اتفاق افتاده است؟ (طلاق، فوت، مهاجرت...) "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_14", "value": "94", "id": "zfb_question_3_14_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_14", "value": "95", "id": "zfb_question_3_14_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-59", "data-question": "15", "data-question-id": "59", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_15"}}>
                      {" کودک با چه کسانی زندگی می‌کند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_15", "value": "96", "id": "zfb_question_3_15_%d9%be%d8%af%d8%b1-%d9%88-%d9%85%d8%a7%d8%af%d8%b1"}} />
                          <span>
                            {"پدر و مادر"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_15", "value": "97", "id": "zfb_question_3_15_%d9%81%d9%82%d8%b7-%d8%a8%d8%a7-%d9%85%d8%a7%d8%af%d8%b1"}} />
                          <span>
                            {"فقط با مادر"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_15", "value": "98", "id": "zfb_question_3_15_%d9%81%d9%82%d8%b7-%d8%a8%d8%a7-%d9%be%d8%af%d8%b1"}} />
                          <span>
                            {"فقط با پدر"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_15", "value": "99", "id": "zfb_question_3_15_%d8%a8%d8%a7-%d8%af%db%8c%da%af%d8%b1%d8%a7%d9%86"}} />
                          <span>
                            {"با دیگران"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-60", "data-question": "16", "data-question-id": "60", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_16"}}>
                      {" روابط والدین با یکدیگر چگونه است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_16", "value": "100", "id": "zfb_question_3_16_%d8%ae%db%8c%d9%84%db%8c-%d8%ae%d9%88%d8%a8"}} />
                          <span>
                            {"خیلی خوب"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_16", "value": "101", "id": "zfb_question_3_16_%d8%ae%d9%88%d8%a8"}} />
                          <span>
                            {"خوب"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_16", "value": "102", "id": "zfb_question_3_16_%d9%85%d8%aa%d9%88%d8%b3%d8%b7"}} />
                          <span>
                            {"متوسط"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_16", "value": "103", "id": "zfb_question_3_16_%d8%a8%d8%af"}} />
                          <span>
                            {"بد"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_16", "value": "104", "id": "zfb_question_3_16_%d8%ae%db%8c%d9%84%db%8c-%d8%a8%d8%af"}} />
                          <span>
                            {"خیلی بد"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-161", "data-question": "17", "data-question-id": "161", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_17"}}>
                      {" ارتباط کودک با اعضای خانواده خوب است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_17", "value": "283", "id": "zfb_question_3_17_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_17", "value": "284", "id": "zfb_question_3_17_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-61", "data-question": "18", "data-question-id": "61", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_18"}}>
                      {" رفتارهایی که در شش ماه گذشته مشاهده کرده‌اید را علامت بزنید: "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "105", "id": "zfb_question_3_18_1"}} />
                          <span>
                            {"عدم توجه به جزئیات"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "106", "id": "zfb_question_3_18_2"}} />
                          <span>
                            {"مشکل در توجه و تمرکز"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "107", "id": "zfb_question_3_18_3"}} />
                          <span>
                            {"مشکل در سازماندهی وظایف"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "108", "id": "zfb_question_3_18_4"}} />
                          <span>
                            {"اجتناب از کارهای فکری دشوار"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "109", "id": "zfb_question_3_18_5"}} />
                          <span>
                            {"تمام نکردن تکالیف"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "110", "id": "zfb_question_3_18_6"}} />
                          <span>
                            {"گم کردن وسایل"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "111", "id": "zfb_question_3_18_7"}} />
                          <span>
                            {"پرت شدن حواس با محرک‌های فرعی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "112", "id": "zfb_question_3_18_8"}} />
                          <span>
                            {"گوش ندادن به صحبت‌های شما"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_18[]", "value": "113", "id": "zfb_question_3_18_9", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-62", "data-question": "19", "data-question-id": "62", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_19"}}>
                      {" ادامه رفتارهای بالا – در شش ماه گذشته "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "114", "id": "zfb_question_3_19_1"}} />
                          <span>
                            {"دست و پاهای بیش‌فعال"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "115", "id": "zfb_question_3_19_2"}} />
                          <span>
                            {"بلند شدن در هنگام نیاز به نشستن"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "116", "id": "zfb_question_3_19_3"}} />
                          <span>
                            {"حرف زدن زیاد، پریدن وسط حرف"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "117", "id": "zfb_question_3_19_4"}} />
                          <span>
                            {"بازی پر سر و صدا"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "118", "id": "zfb_question_3_19_5"}} />
                          <span>
                            {"ناتوانی در صبر یا رعایت صف"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "119", "id": "zfb_question_3_19_6"}} />
                          <span>
                            {"دویدن در موقعیت‌های نامناسب"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "120", "id": "zfb_question_3_19_7"}} />
                          <span>
                            {"ایجاد مزاحمت برای دیگران"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_19[]", "value": "121", "id": "zfb_question_3_19_8", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-63", "data-question": "20", "data-question-id": "63", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_20"}}>
                      {" رفتارهای فوق در چه محیط‌هایی مشاهده می‌شود؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_20", "value": "122", "id": "zfb_question_3_20_%d9%81%d9%82%d8%b7-%d8%af%d8%b1-%d9%85%d9%86%d8%b2%d9%84"}} />
                          <span>
                            {"فقط در منزل"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_20", "value": "123", "id": "zfb_question_3_20_%d9%81%d9%82%d8%b7-%d8%af%d8%b1-%d9%85%d8%af%d8%b1%d8%b3%d9%87"}} />
                          <span>
                            {"فقط در مدرسه"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_20", "value": "124", "id": "zfb_question_3_20_%d9%81%d9%82%d8%b7-%d8%af%d8%b1-%d9%85%d9%86%d8%b2%d9%84-%d8%a7%d9%82%d9%88%d8%a7%d9%85"}} />
                          <span>
                            {"فقط در منزل اقوام"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_20", "value": "125", "id": "zfb_question_3_20_%d8%af%d8%b1-%d8%a8%db%8c%d8%b4-%d8%a7%d8%b2-%d8%af%d9%88-%d9%85%d8%ad%db%8c%d8%b7"}} />
                          <span>
                            {"در بیش از دو محیط"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_20", "value": "126", "id": "zfb_question_3_20_%d9%87%db%8c%da%86%da%a9%d8%af%d8%a7%d9%85"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-66", "data-question": "21", "data-question-id": "66", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_21"}}>
                      {" کدام‌یک از علائم زیر در چند ماه گذشته در کودک شما دیده شده است؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "131", "id": "zfb_question_3_21_1"}} />
                          <span>
                            {"افت تحصیلی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "132", "id": "zfb_question_3_21_2"}} />
                          <span>
                            {"گریه مداوم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "133", "id": "zfb_question_3_21_3"}} />
                          <span>
                            {"امتناع از رفتن به مدرسه"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "134", "id": "zfb_question_3_21_4"}} />
                          <span>
                            {"شب‌ادراری"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "135", "id": "zfb_question_3_21_5"}} />
                          <span>
                            {"گوشه‌گیری"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "136", "id": "zfb_question_3_21_6"}} />
                          <span>
                            {"عصبانیت سریع"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "137", "id": "zfb_question_3_21_7"}} />
                          <span>
                            {"بی‌خوابی یا کابوس"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "138", "id": "zfb_question_3_21_8"}} />
                          <span>
                            {"احساس ترس یا شرم"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "139", "id": "zfb_question_3_21_9"}} />
                          <span>
                            {"تمایل به همیشه کنار والدین بودن"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "140", "id": "zfb_question_3_21_10"}} />
                          <span>
                            {"پرخوری یا بی‌اشتهایی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "141", "id": "zfb_question_3_21_11"}} />
                          <span>
                            {"احساس تنش یا نگرانی زیاد"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "142", "id": "zfb_question_3_21_12"}} />
                          <span>
                            {"ناخن جویدن"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "143", "id": "zfb_question_3_21_13"}} />
                          <span>
                            {"لجبازی یا نافرمانی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "144", "id": "zfb_question_3_21_14"}} />
                          <span>
                            {"بی‌حوصلگی نسبت به بازی‌ها"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option zfb-none-option-label"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_21[]", "value": "145", "id": "zfb_question_3_21_15", "data-zfb-none-option": "1"}} />
                          <span>
                            {"هیچ‌کدام"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-67", "data-question": "22", "data-question-id": "67", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_22"}}>
                      {" آیا کودک از صحبت کردن در جمع می‌ترسد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_22", "value": "146", "id": "zfb_question_3_22_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_22", "value": "147", "id": "zfb_question_3_22_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-70", "data-question": "23", "data-question-id": "70", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_23"}}>
                      {" آیا کودک اعتماد به نفس و عزت نفس پایینی دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_23", "value": "152", "id": "zfb_question_3_23_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_23", "value": "153", "id": "zfb_question_3_23_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-64", "data-question": "24", "data-question-id": "64", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_24"}}>
                      {" آیا کودک نسبت به مدرسه و کادر مدرسه احساس خوبی دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_24", "value": "127", "id": "zfb_question_3_24_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_24", "value": "128", "id": "zfb_question_3_24_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-65", "data-question": "25", "data-question-id": "65", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_25"}}>
                      {" آیا کودک با همکلاسی‌های خود رابطه خوبی دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_25", "value": "129", "id": "zfb_question_3_25_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_25", "value": "130", "id": "zfb_question_3_25_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-68", "data-question": "26", "data-question-id": "68", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_26"}}>
                      {" آیا بین پیشرفت تحصیلی و توانایی ذهنی کودک تفاوتی مشاهده می‌کنید؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_26", "value": "148", "id": "zfb_question_3_26_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_26", "value": "149", "id": "zfb_question_3_26_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-69", "data-question": "27", "data-question-id": "69", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_27"}}>
                      {" آیا بستگان درجه یک کودک با مشکلات یادگیری مواجه بوده‌اند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_27", "value": "150", "id": "zfb_question_3_27_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_27", "value": "151", "id": "zfb_question_3_27_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-71", "data-question": "28", "data-question-id": "71", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_28"}}>
                      {" آیا کودک لکنت زبان یا گفتار نامفهوم دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_28", "value": "154", "id": "zfb_question_3_28_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_28", "value": "155", "id": "zfb_question_3_28_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-72", "data-question": "29", "data-question-id": "72", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_29"}}>
                      {" آیا کلمات را غلط یا با زحمت می‌خواند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_29", "value": "156", "id": "zfb_question_3_29_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_29", "value": "157", "id": "zfb_question_3_29_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-73", "data-question": "30", "data-question-id": "73", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_30"}}>
                      {" آیا کودک در درک معنای متن مشکل دارد؟ (مثلاً متن را می‌خواند اما مفهوم یا ترتیب رویدادها را متوجه نمی‌شود) "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_30", "value": "158", "id": "zfb_question_3_30_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_30", "value": "159", "id": "zfb_question_3_30_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-74", "data-question": "31", "data-question-id": "74", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_31"}}>
                      {" آیا کودک از بلند خواندن دوری می‌کند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_31", "value": "160", "id": "zfb_question_3_31_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_31", "value": "161", "id": "zfb_question_3_31_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-75", "data-question": "32", "data-question-id": "75", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_32"}}>
                      {" آیا کودک کلمات مشابه را اشتباه می‌خواند؟ (مثلاً غار و غاز) "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_32", "value": "162", "id": "zfb_question_3_32_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_32", "value": "163", "id": "zfb_question_3_32_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-76", "data-question": "33", "data-question-id": "76", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_33"}}>
                      {" آیا کودک در هجی کردن کلمات مشکل دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_33", "value": "164", "id": "zfb_question_3_33_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_33", "value": "165", "id": "zfb_question_3_33_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-77", "data-question": "34", "data-question-id": "77", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_34"}}>
                      {" آیا در نوشتار کودک اشکالات زیادی وجود دارد؟ (اشتباهات دستوری، نقطه‌گذاری، عدم وضوح بیان) "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_34", "value": "166", "id": "zfb_question_3_34_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_34", "value": "167", "id": "zfb_question_3_34_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-78", "data-question": "35", "data-question-id": "78", "data-question-type": "checkbox", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_35"}}>
                      {" کودک چگونه می‌نویسد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-checkbox-group"}}>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_35[]", "value": "168", "id": "zfb_question_3_35_1"}} />
                          <span>
                            {"ناتمام نویسی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_35[]", "value": "169", "id": "zfb_question_3_35_2"}} />
                          <span>
                            {"وارونه نویسی"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_35[]", "value": "170", "id": "zfb_question_3_35_3"}} />
                          <span>
                            {"جابه‌جایی حروف"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_35[]", "value": "171", "id": "zfb_question_3_35_4"}} />
                          <span>
                            {"جا انداختن حروف یا کلمات"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-checkbox-option"}}>
                          <input {...{"type": "checkbox", "name": "zfb_question_3_35[]", "value": "172", "id": "zfb_question_3_35_5"}} />
                          <span>
                            {"معمولی و مناسب"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-79", "data-question": "36", "data-question-id": "79", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_36"}}>
                      {" آیا کودک به نوشتن علاقه دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_36", "value": "173", "id": "zfb_question_3_36_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_36", "value": "174", "id": "zfb_question_3_36_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-80", "data-question": "37", "data-question-id": "80", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_37"}}>
                      {" آیا کودک کند یا بدخط می‌نویسد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_37", "value": "175", "id": "zfb_question_3_37_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_37", "value": "176", "id": "zfb_question_3_37_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-81", "data-question": "38", "data-question-id": "81", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_38"}}>
                      {" آیا کودک در حرکات ظریف مثل بستن دکمه یا قیچی کردن مهارت دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_38", "value": "177", "id": "zfb_question_3_38_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_38", "value": "178", "id": "zfb_question_3_38_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-82", "data-question": "39", "data-question-id": "82", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_39"}}>
                      {" آیا کودک در یادگیری اعداد یا روابط آن‌ها مشکل دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_39", "value": "179", "id": "zfb_question_3_39_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_39", "value": "180", "id": "zfb_question_3_39_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-83", "data-question": "40", "data-question-id": "83", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_40"}}>
                      {" آیا کودک در محاسبات ریاضی (جمع، تفریق...) مشکل دارد؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_40", "value": "181", "id": "zfb_question_3_40_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_40", "value": "182", "id": "zfb_question_3_40_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-84", "data-question": "41", "data-question-id": "84", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_41"}}>
                      {" آیا کودک می‌تواند اعداد و نمادهای ریاضی را به‌درستی نام‌گذاری کند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_41", "value": "183", "id": "zfb_question_3_41_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_41", "value": "184", "id": "zfb_question_3_41_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-85", "data-question": "42", "data-question-id": "85", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_42"}}>
                      {" آیا کودک می‌تواند مسائل ریاضی را درک و حل کند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_42", "value": "185", "id": "zfb_question_3_42_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_42", "value": "186", "id": "zfb_question_3_42_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-86", "data-question": "43", "data-question-id": "86", "data-question-type": "radio", "data-required": "true"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_3_43"}}>
                      {" آیا کودک نام اشکال هندسی را می‌داند؟ "}
                      <span {...{"className": "zfb-required"}}>
                        {"*"}
                      </span>
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <div {...{"className": "zfb-radio-group"}}>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_43", "value": "187", "id": "zfb_question_3_43_%d8%a8%d9%84%d9%87"}} />
                          <span>
                            {"بله"}
                          </span>
                        </label>
                        <label {...{"className": "zfb-radio-option"}}>
                          <input {...{"type": "radio", "name": "zfb_question_3_43", "value": "188", "id": "zfb_question_3_43_%d8%ae%db%8c%d8%b1"}} />
                          <span>
                            {"خیر"}
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
                  <FormButton {...{"type": "button", "className": "zfb-btn zfb-btn-next", "direction": "next"}}>
                    {"مرحله بعد"}
                  </FormButton>
                </div>
              </FormStage>
              <FormStage {...{"className": "zfb-stage", "data-stage": "4"}}>
                <div {...{"className": "zfb-stage-header"}}>
                  <h3>
                    {"بارگزاری فایل"}
                  </h3>
                </div>
                <div {...{"className": "zfb-stage-questions"}}>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-147", "data-question": "0", "data-question-id": "147", "data-question-type": "gallery"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_4_0"}}>
                      {" حداقل عکس شش املای آخر دفتر املای کودک را بارگزاری کنید. "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <UploadField {...{"type": "file", "name": "zfb_question_4_0[]", "id": "zfb_field_4_0", "className": "zfb-field zfb-gallery-field", "multiple": true, "data-max-size": "5242880", "data-max-size-mb": "5", "data-max-count": "6", "data-allowed-types": "jpg,jpeg,png,webp", "accept": "image/*"}} />
                    </div>
                    <div {...{"className": "zfb-question-footer"}}>
                    </div>
                  </div>
                  <div {...{"className": "zfb-question zfb-question--full-mobile zfb-question--full-desktop", "id": "zfb-question-146", "data-question": "1", "data-question-id": "146", "data-question-type": "file"}}>
                    <label {...{"className": "zfb-question-label", "htmlFor": "zfb_field_4_1"}}>
                      {" از روی درس سوم و آخر کتاب بخوانیم وویس خواندن کودک را بارگذاری کنید. "}
                    </label>
                    <div {...{"className": "zfb-question-field"}}>
                      <UploadField {...{"type": "file", "name": "zfb_question_4_1", "id": "zfb_field_4_1", "className": "zfb-field zfb-file-field", "data-max-size": "10485760", "data-max-size-mb": "10", "data-allowed-types": "mp3,wav,ogg,m4a", "accept": "audio/mpeg,audio/wav,audio/ogg,audio/mp4"}} />
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
