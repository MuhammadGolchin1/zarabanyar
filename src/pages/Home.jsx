import Header from "../components/Header";
import Footer from "../components/Footer";
import { withBaseProps } from "../lib/paths";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function Home() {
  return (
    <div {...{"id": "layout", "className": "clr layout_"}}>
      <div {...{"className": "inner_layout"}}>
        <div {...{"className": "cz_overlay", "aria-hidden": "true"}}>
        </div>
        <Header />
        <div {...{"className": "page_cover", "aria-hidden": "true"}}>
        </div>
        <div {...{"id": "page_content", "className": "page_content mt0", "role": "main"}}>
          <div {...{"className": "row clr"}}>
            <div {...{"className": "s12 clr"}}>
              <div {...{"className": "cz_is_blank clr"}}>
                <div {...{"className": "cz_post_content clr"}}>
                  <div {...{"data-elementor-type": "wp-page", "data-elementor-id": "880", "className": "elementor elementor-880", "data-elementor-post-type": "page"}}>
                    <div {...{"className": "elementor-element elementor-element-be2495d codevz-con-stretch-yes e-con-full e-flex e-con e-parent", "data-id": "be2495d"}}>
                      <div {...{"className": "elementor-element elementor-element-d98e4f9 elementor--v-position-bottom elementor-widget elementor-widget-slides", "data-id": "d98e4f9"}}>
                        <div {...{"className": "elementor-widget-container"}}>
                          <div {...{"className": "elementor-swiper"}}>
                            <HeroSlider {...{"className": "elementor-slides-wrapper elementor-main-swiper swiper", "role": "region", "aria-roledescription": "carousel", "aria-label": "Slides", "dir": "rtl", "data-animation": "fadeInUp"}}>
                              <div {...{"className": "swiper-wrapper elementor-slides"}}>
                                <div {...{"className": "elementor-repeater-item-b892ba5 swiper-slide", "role": "group", "aria-roledescription": "slide"}}>
                                  <div {...{"className": "swiper-slide-bg", "role": "img", "aria-label": "ChatGPT Image Jun 12, 2026, 10_44_09 PM"}}>
                                  </div>
                                  <a {...withBaseProps({"className": "swiper-slide-inner", "href": "/شناخت-کودکتان/"})}>
                                    <div {...{"className": "swiper-slide-contents"}}>
                                      <h3 {...{"className": "elementor-slide-heading"}}>
                                        {"کشف دنیای منحصربه‌فرد فرزندتان"}
                                      </h3>
                                      <p {...{"className": "elementor-slide-description"}}>
                                        {"استعدادها، توانایی‌ها، سبک یادگیری و نیازهای رشدی فرزندتان را بهتر بشناسید و مسیر رشد او را آگاهانه‌تر همراهی کنید."}
                                      </p>
                                      <div {...{"className": "elementor-button elementor-slide-button elementor-size-sm"}}>
                                        {"شناخت بیشتر فرزندم"}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div {...{"className": "elementor-repeater-item-a5a17ae swiper-slide", "role": "group", "aria-roledescription": "slide"}}>
                                  <div {...{"className": "swiper-slide-bg", "role": "img", "aria-label": "ChatGPT Image Jun 12, 2026, 10_44_17 PM"}}>
                                  </div>
                                  <a {...withBaseProps({"className": "swiper-slide-inner", "href": "/blog/"})}>
                                    <div {...{"className": "swiper-slide-contents"}}>
                                      <h3 {...{"className": "elementor-slide-heading"}}>
                                        {"آکادمی والدین"}
                                      </h3>
                                      <p {...{"className": "elementor-slide-description"}}>
                                        {"برای آموزش والدگری آگاهانه کنار شما هستیم، مجموعه‌ای از آموزش‌های ویدیویی، مقالات، فایل‌های آموزشی و راهنماهای کاربردی برای والدین."}
                                      </p>
                                      <div {...{"className": "elementor-button elementor-slide-button elementor-size-sm"}}>
                                        {"ورود به آکادمی والدین"}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div {...{"className": "elementor-repeater-item-0e07c82 swiper-slide", "role": "group", "aria-roledescription": "slide"}}>
                                  <div {...{"className": "swiper-slide-bg", "role": "img", "aria-label": "ChatGPT Image Jun 12, 2026, 10_51_50 PM"}}>
                                  </div>
                                  <a {...withBaseProps({"className": "swiper-slide-inner", "href": "/blog/"})}>
                                    <div {...{"className": "swiper-slide-contents"}}>
                                      <h3 {...{"className": "elementor-slide-heading"}}>
                                        {"باشگاه رشد مهارت‌های کودک"}
                                      </h3>
                                      <p {...{"className": "elementor-slide-description"}}>
                                        {" مهارت هایی که اینده کودک را می سازد. تمرین‌ها و برنامه‌های عملی برای تقویت تمرکز، حافظه، یادگیری و خلاقیت"}
                                      </p>
                                      <div {...{"className": "elementor-button elementor-slide-button elementor-size-sm"}}>
                                        {"مشاهده برنامه ها"}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div {...{"className": "elementor-repeater-item-355a1b4 swiper-slide", "role": "group", "aria-roledescription": "slide"}}>
                                  <div {...{"className": "swiper-slide-bg", "role": "img", "aria-label": "ChatGPT Image Jun 12, 2026, 10_44_56 PM"}}>
                                  </div>
                                  <a {...withBaseProps({"className": "swiper-slide-inner", "href": "/forms/پرسشنامه-ارزیابی-کودکان-ویژه-والدین-2/"})}>
                                    <div {...{"className": "swiper-slide-contents"}}>
                                      <h3 {...{"className": "elementor-slide-heading"}}>
                                        {"ارزیابی تخصصی مهارت‌های یادگیری و تحصیلی"}
                                      </h3>
                                      <p {...{"className": "elementor-slide-description"}}>
                                        {"با استفاده از ارزیابی‌های علمی و استاندارد، وضعیت توجه، تمرکز، حافظه، مهارت‌های یادگیری و آمادگی تحصیلی فرزندتان را دقیق بررسی کنید و مسیر مناسب رشد او را بشناسید."}
                                      </p>
                                      <div {...{"className": "elementor-button elementor-slide-button elementor-size-sm"}}>
                                        {"شروع ارزیابی تخصصی"}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </HeroSlider>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div {...{"className": "elementor-element elementor-element-416cad5 codevz-con-stretch-yes e-flex e-con-boxed e-con e-parent", "data-id": "416cad5"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-85e8a80 e-con-full e-flex e-con e-child", "data-id": "85e8a80"}}>
                          <div {...{"className": "elementor-element elementor-element-8a918b4 elementor-widget elementor-widget-cz_title", "data-id": "8a918b4"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <h2>
                                        {"ضربان‌یار،"}
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-08f9dcb elementor-widget elementor-widget-cz_title", "data-id": "08f9dcb"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <h3>
                                        {"در هر ضربان کنار فرزندان شما"}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-24548c5 elementor-widget elementor-widget-cz_title", "data-id": "24548c5"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <p>
                                        {"ضربان یار یک همراه برای رشد کودک و والدین است؛ جایی برای شناخت بهتر فرزند، تقویت توانایی‌ها و ساختن مسیر روشن‌تری برای آینده."}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-05c3024 elementor-widget elementor-widget-cz_button", "data-id": "05c3024"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": ""}}>
                                <div>
                                  <a {...withBaseProps({"href": "/about-us/", "className": "cz_btn cz_btn_txt_move_right cz_btn_no_fx cz_btn_icon_after cz_mobile_btn_center"})}>
                                    <span>
                                      <strong>
                                        {"اطلاعات بیشتر "}
                                      </strong>
                                      <i {...{"className": "czi czico-long-left-arrow"}}>
                                      </i>
                                    </span>
                                    <b {...{"className": "cz_btn_onhover"}}>
                                      <strong>
                                        {" اطلاعات بیشتر "}
                                      </strong>
                                      <i {...{"className": "czi czico-long-left-arrow"}}>
                                      </i>
                                    </b>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div {...{"className": "elementor-element elementor-element-101252a e-con-full e-flex e-con e-child", "data-id": "101252a"}}>
                          <div {...{"className": "elementor-element elementor-element-5e1b579 animated-slow elementor-widget elementor-widget-cz_parallax_group", "data-id": "5e1b579"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "cz_group_parallax"}}>
                                <div {...{"className": "cz_mparallax_3"}}>
                                  <div {...{"className": "elementor-repeater-item-e5d28ed cz_layer_parallax"}}>
                                    <div>
                                      <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "268", "height": "268", "src": "/assets/original/c2c53a4a86e7d85e.png", "className": "attachment-full size-full wp-image-1641", "alt": "Circle", "srcSet": "/assets/original/c2c53a4a86e7d85e.png 268w, /assets/original/29e5a0ef02b1820b.png 100w, /assets/original/3818dfef0423edd9.png 150w", "sizes": "auto, (max-width: 268px) 100vw, 268px"})} />
                                    </div>
                                  </div>
                                </div>
                                <div {...{"className": "clr cz_parallax_h_3"}}>
                                  <div {...{"className": "elementor-repeater-item-15656e8 cz_layer_parallax"}}>
                                    <div>
                                      <img {...withBaseProps({"fetchPriority": "high", "decoding": "async", "width": "800", "height": "1024", "src": "/assets/original/71214d9c763a0c46.webp", "className": "attachment-large size-large wp-image-3930", "alt": "Kimiya kamrani slider3 copy 800x1024", "srcSet": "/assets/original/71214d9c763a0c46.webp 800w, /assets/original/3708cfc13309790a.webp 600w, /assets/original/bc61f48f7a04beba.webp 234w, /assets/original/a0c45b47010398d9.webp 768w, /assets/original/fbc832e678053b88.webp 1000w", "sizes": "(max-width: 800px) 100vw, 800px", "loading": "eager"})} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div {...{"className": "elementor-element elementor-element-f2d63e1 e-flex e-con-boxed e-con e-parent", "data-id": "f2d63e1"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-f54442b e-con-full e-flex e-con e-child", "data-id": "f54442b"}}>
                          <div {...{"className": "elementor-element elementor-element-c1df319 elementor-widget elementor-widget-cz_title", "data-id": "c1df319"}}>
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
                          <div {...{"className": "elementor-element elementor-element-4c81119 elementor-widget elementor-widget-cz_title", "data-id": "4c81119"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <p>
                                        {"برای شروع مسیر شناخت و رشد فرزندتان، کافی است فرم ارزیابی کودکان را پر کنید، و پس از آن کارشناسان ما پس از تحلیل پاسخنامه شما، با شما تماس خواهند گرفت."}
                                      </p>
                                      <p>
                                        {"همچنین در صورت نیاز به رزور قرار مشاوره مستقیما می‌توانید اقدام کنید."}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-6dad80c e-con-full e-flex e-con e-child", "data-id": "6dad80c"}}>
                            <div {...{"className": "elementor-element elementor-element-cba70c1 elementor-widget elementor-widget-cz_button", "data-id": "cba70c1"}}>
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
                            <div {...{"className": "elementor-element elementor-element-46572bb elementor-widget elementor-widget-cz_button", "data-id": "46572bb"}}>
                              <div {...{"className": "elementor-widget-container"}}>
                                <div {...{"className": ""}}>
                                  <div>
                                    <a {...withBaseProps({"href": "/رزور-نوبت-مشاوره/", "className": "cz_btn cz_btn_txt_move_right cz_btn_no_fx cz_btn_icon_after cz_mobile_btn_center"})}>
                                      <span>
                                        <strong>
                                          {"رزرو وقت مشاوره "}
                                        </strong>
                                        <i {...{"className": "czi czico-long-left-arrow"}}>
                                        </i>
                                      </span>
                                      <b {...{"className": "cz_btn_onhover"}}>
                                        <strong>
                                          {" رزرو وقت مشاوره "}
                                        </strong>
                                        <i {...{"className": "czi czico-long-left-arrow"}}>
                                        </i>
                                      </b>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div {...{"className": "elementor-element elementor-element-19ee4c3 e-flex e-con-boxed e-con e-parent", "data-id": "19ee4c3"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-7205510 e-con-full e-flex e-con e-child", "data-id": "7205510"}}>
                          <div {...{"className": "elementor-element elementor-element-1151749 elementor-widget elementor-widget-cz_title", "data-id": "1151749"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_shape shape_image cz_shape_1"}}>
                                    <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "120", "height": "38", "src": "/assets/original/8ec07dd0edaba041.png", "className": "attachment-full size-full wp-image-1664", "alt": "Ttl img"})} />
                                  </div>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <p>
                                        {"خدمات"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-cfda623 elementor-widget elementor-widget-cz_title", "data-id": "cfda623"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <h2>
                                        {"خدمات "}
                                        <span {...{"style": {"color": "#3d4461"}}}>
                                          {"ضربان یار"}
                                        </span>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-1030478 elementor-widget elementor-widget-cz_title", "data-id": "1030478"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <p>
                                        {"ضربان‌یار از طریق ایجاد یک پلتفرم، فرآیند ارزیابی، تشخیص، درمان و مهارت پروری فرزندانتان را هموار کرده و با ارائه کارنامه های شخصی سازی شده تحت نظر متخصصین برای هر کودک، شما را در جریان مراحل طی شده قرار می دهیم."}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-faeaaca elementor-widget elementor-widget-cz_stylish_list", "data-id": "faeaaca"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "stylish_list_center_on_mobile clr"}}>
                                <ul {...{"className": "cz_stylish_list clr cz_sl_icon_hover_none"}}>
                                  <li {...{"className": "elementor-repeater-item-10d433b clr"}}>
                                    <a {...withBaseProps({"href": "/"})}>
                                      <div {...{"className": "cz_sl_icon"}}>
                                        <i {...{"className": "xtra-sl-number mr10"}}>
                                          {"۴"}
                                        </i>
                                      </div>
                                      <div>
                                        <span>
                                          {"ارائه گزارشات و کارنامه‌های رشدی اختصاصی برای هر کودک"}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li {...{"className": "elementor-repeater-item-524c590 clr"}}>
                                    <a {...withBaseProps({"href": "/"})}>
                                      <div {...{"className": "cz_sl_icon"}}>
                                        <i {...{"className": "xtra-sl-number mr10"}}>
                                          {"1"}
                                        </i>
                                      </div>
                                      <div>
                                        <span>
                                          {"مشاوره‌های تخصصی ارزیابی و درمانی به صورت آنلاین و حضوری"}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li {...{"className": "elementor-repeater-item-bc2dd6d clr"}}>
                                    <a {...withBaseProps({"href": "/"})}>
                                      <div {...{"className": "cz_sl_icon"}}>
                                        <i {...{"className": "xtra-sl-number mr10"}}>
                                          {"5"}
                                        </i>
                                      </div>
                                      <div>
                                        <span>
                                          {"تیم درمانی متخصص و متعهد در حوزه‌های مختلف"}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li {...{"className": "elementor-repeater-item-8eed8ae clr"}}>
                                    <a {...withBaseProps({"href": "/"})}>
                                      <div {...{"className": "cz_sl_icon"}}>
                                        <i {...{"className": "xtra-sl-number mr10"}}>
                                          {"2"}
                                        </i>
                                      </div>
                                      <div>
                                        <span>
                                          {"آماده‌سازی کودکان برای آزمون سنجش ورودی مدارس"}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li {...{"className": "elementor-repeater-item-c802023 clr"}}>
                                    <a {...withBaseProps({"href": "/"})}>
                                      <div {...{"className": "cz_sl_icon"}}>
                                        <i {...{"className": "xtra-sl-number mr10"}}>
                                          {"6"}
                                        </i>
                                      </div>
                                      <div>
                                        <span>
                                          {"آموزش‌های علمی و کاربردی ویژه والدین و معلمان"}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li {...{"className": "elementor-repeater-item-893a1fa clr"}}>
                                    <a {...withBaseProps({"href": "/"})}>
                                      <div {...{"className": "cz_sl_icon"}}>
                                        <i {...{"className": "xtra-sl-number mr10"}}>
                                          {"3"}
                                        </i>
                                      </div>
                                      <div>
                                        <span>
                                          {"آزمون‌های تخصصی استاندارد با تحلیل‌های اختصاصی"}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div {...{"className": "elementor-element elementor-element-9662b93 e-con-full e-flex e-con e-child", "data-id": "9662b93"}}>
                          <div {...{"className": "elementor-element elementor-element-5945a71 elementor-widget elementor-widget-cz_button", "data-id": "5945a71"}}>
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
                    </div>
                    <div {...{"className": "elementor-element elementor-element-3bffcb9 e-flex e-con-boxed e-con e-parent", "data-id": "3bffcb9"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-00e685e e-con-full e-flex e-con e-child", "data-id": "00e685e"}}>
                          <div {...{"className": "elementor-element elementor-element-f8a6105 elementor-widget elementor-widget-cz_title", "data-id": "f8a6105"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_shape shape_image cz_shape_1"}}>
                                    <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "120", "height": "38", "src": "/assets/original/8ec07dd0edaba041.png", "className": "attachment-full size-full wp-image-1664", "alt": "Ttl img"})} />
                                  </div>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <p>
                                        {"از کجا شروع کنیم؟"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-edcf8d8 elementor-widget elementor-widget-cz_title", "data-id": "edcf8d8"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <h2>
                                        <span {...{"style": {"color": "#3d4461"}}}>
                                          {"فرایندخدمات "}
                                          <span {...{"style": {"color": "#3fabf3"}}}>
                                            {"ضربان‌یار"}
                                          </span>
                                        </span>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div {...{"className": "elementor-element elementor-element-6b33fa0 e-con-full e-flex e-con e-child", "data-id": "6b33fa0"}}>
                          <div {...{"className": "elementor-element elementor-element-5fe0d64 elementor-widget__width-inherit elementor-widget elementor-widget-cz_service_box", "data-id": "5fe0d64"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "services clr style1 services_b"}}>
                                <div {...{"className": "service_custom"}}>
                                  <svg {...{"xmlns": "http://www.w3.org/2000/svg", "width": "32", "height": "32", "viewBox": "0 0 24 24"}}>
                                    <g {...{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.5"}}>
                                      <path {...{"strokeLinecap": "round", "d": "M8.5 18c1.813-1.954 5.167-2.046 7 0m-1.56-6c0 1.105-.871 2-1.947 2c-1.075 0-1.947-.895-1.947-2s.872-2 1.947-2s1.948.895 1.948 2Z"}}>
                                      </path>
                                      <path {...{"strokeLinecap": "round", "strokeLinejoin": "round", "d": "M9.5 4.002c-2.644.01-4.059.102-4.975.97C3.5 5.943 3.5 7.506 3.5 10.632v4.737c0 3.126 0 4.69 1.025 5.66c1.025.972 2.675.972 5.975.972h3c3.3 0 4.95 0 5.975-.971c1.025-.972 1.025-2.535 1.025-5.66v-4.738c0-3.126 0-4.689-1.025-5.66c-.916-.868-2.33-.96-4.975-.97"}}>
                                      </path>
                                      <path {...{"d": "M9.772 3.632c.096-.415.144-.623.236-.792a1.64 1.64 0 0 1 1.083-.793C11.294 2 11.53 2 12 2s.706 0 .909.047a1.64 1.64 0 0 1 1.083.793c.092.17.14.377.236.792l.083.36c.17.735.255 1.103.127 1.386a1.03 1.03 0 0 1-.407.451C13.75 6 13.332 6 12.498 6h-.996c-.834 0-1.252 0-1.533-.17a1.03 1.03 0 0 1-.407-.452c-.128-.283-.043-.65.127-1.386z"}}>
                                      </path>
                                    </g>
                                  </svg>
                                </div>
                                <div {...{"className": "service_text"}}>
                                  <h3>
                                    {"ثبت نام"}
                                  </h3>
                                  <div {...{"className": "cz_wpe_content"}}>
                                    <p>
                                      {"وارد کردن نام، نام خانوادگی، شماره تماس و تاریخ تولد کودک"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-f640446 elementor-widget__width-inherit elementor-widget elementor-widget-cz_service_box", "data-id": "f640446"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "services clr style1 services_b"}}>
                                <div {...{"className": "service_custom"}}>
                                  <svg {...{"xmlns": "http://www.w3.org/2000/svg", "width": "32", "height": "32", "viewBox": "0 0 24 24"}}>
                                    <g {...{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.5"}}>
                                      <path {...{"strokeLinejoin": "round", "d": "M22 11.567c0 5.283-4.478 9.566-10 9.566q-.977.001-1.935-.178c-.459-.087-.688-.13-.848-.105c-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657a5.3 5.3 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567C2 6.284 6.478 2 12 2s10 4.284 10 9.567Z"}}>
                                      </path>
                                      <path {...{"strokeLinecap": "round", "d": "M10 9.846C10 8.826 10.895 8 12 8s2 .827 2 1.846c0 .368-.116.71-.317.998C13.085 11.7 12 12.519 12 13.539V14"}}>
                                      </path>
                                      <path {...{"strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 16.5h.009"}}>
                                      </path>
                                    </g>
                                  </svg>
                                </div>
                                <div {...{"className": "service_text"}}>
                                  <h3>
                                    {"پرسشنامه"}
                                  </h3>
                                  <div {...{"className": "cz_wpe_content"}}>
                                    <p>
                                      {"پاسخ دادن به پرسشنامه اختلالات یادگیری ویژه والدین"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-75334fe elementor-widget__width-inherit elementor-widget elementor-widget-cz_service_box", "data-id": "75334fe"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "services clr style1 services_b"}}>
                                <div {...{"className": "service_custom"}}>
                                  <svg {...{"xmlns": "http://www.w3.org/2000/svg", "width": "32", "height": "32", "viewBox": "0 0 24 24"}}>
                                    <g {...{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.5"}}>
                                      <path {...{"d": "M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"}}>
                                      </path>
                                      <path {...{"strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 8v8m-3-6v4m-3-3v2m9-3v4m3-3v2"}}>
                                      </path>
                                    </g>
                                  </svg>
                                </div>
                                <div {...{"className": "service_text"}}>
                                  <h3>
                                    {" فایل صوتی "}
                                  </h3>
                                  <div {...{"className": "cz_wpe_content"}}>
                                    <div {...{"className": "bdt-step-flow-description"}}>
                                      {"نمونه فایل صوتی از کودک را ارسال کنید"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-345ccd2 elementor-widget__width-inherit elementor-widget elementor-widget-cz_service_box", "data-id": "345ccd2"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "services clr style1 services_b"}}>
                                <div {...{"className": "service_custom"}}>
                                  <svg {...{"xmlns": "http://www.w3.org/2000/svg", "width": "32", "height": "32", "viewBox": "0 0 20 20"}}>
                                    <path {...{"fill": "currentColor", "d": "M6.29 19a54 54 0 0 1-.73-2.88a31 31 0 0 1-.42-2.47A15 15 0 0 1 5 11.79q0-1.455.54-2.43a4.2 4.2 0 0 1 1.43-1.57a6 6 0 0 1 1.99-.84a9.3 9.3 0 0 1 2.2-.22c.74.01 1.45.08 2.1.22a4 4 0 0 0-.12-1.3a2.8 2.8 0 0 0-.46-1.07a2.1 2.1 0 0 0-.75-.7a1.9 1.9 0 0 0-.99-.27a2.2 2.2 0 0 0-.96.22a3 3 0 0 0-.89.66c-.28.3-.54.67-.79 1.1L6.17 4.48c.42-.85.9-1.53 1.43-2.03c.54-.5 1.11-.86 1.7-1.09A4.9 4.9 0 0 1 11.1 1c.89 0 1.64.18 2.27.53a4.2 4.2 0 0 1 1.52 1.4c.39.55.67 1.16.84 1.8A6.5 6.5 0 0 1 16 6.58a6.8 6.8 0 0 1-.89 3.23a20 20 0 0 0-2.41-.48a9.8 9.8 0 0 0-2.04-.1a4.2 4.2 0 0 0-1.54.36a2.16 2.16 0 0 0-1 .86c-.24.39-.36.87-.36 1.46c0 .55.05 1.18.14 1.9c.1.73.23 1.48.4 2.26s.37 1.55.58 2.32l-2.6.62Z"}}>
                                    </path>
                                  </svg>
                                </div>
                                <div {...{"className": "service_text"}}>
                                  <h3>
                                    {" املا کودک "}
                                  </h3>
                                  <div {...{"className": "cz_wpe_content"}}>
                                    <div {...{"className": "bdt-step-flow-description"}}>
                                      {"حداقال 8 املا آخر کودک را ارسال کنید"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div {...{"className": "elementor-element elementor-element-326dbb2 e-flex e-con-boxed e-con e-parent", "data-id": "326dbb2"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-617b6fe e-con-full e-flex e-con e-child", "data-id": "617b6fe"}}>
                          <div {...{"className": "elementor-element elementor-element-1075839 elementor-widget elementor-widget-cz_title", "data-id": "1075839"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline tac"}}>
                                  <div {...{"className": "cz_title_shape shape_image cz_shape_1"}}>
                                    <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "120", "height": "38", "src": "/assets/original/8ec07dd0edaba041.png", "className": "attachment-full size-full wp-image-1664", "alt": "Ttl img"})} />
                                  </div>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <p {...{"style": {"textAlign": "center"}}}>
                                        {"تیم ما"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-234e601 elementor-widget elementor-widget-cz_title", "data-id": "234e601"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline tac"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <h2 {...{"style": {"textAlign": "center"}}}>
                                        <span {...{"style": {"color": "#3d4461"}}}>
                                          {"با"}
                                        </span>
                                        {" مشاوران متخصص"}
                                        <span {...{"style": {"color": "#3d4461"}}}>
                                          {" ما آشنا شوید"}
                                        </span>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-492d5c5 elementor-widget elementor-widget-cz_title", "data-id": "492d5c5"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_title_pos_inline"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <p>
                                        {"رویاهای ما به اندازه قشنگی رویاهای کودکانه بزرگ هستند،"}
                                        <br />
                                        {"قدم به قدم، درکنار شما، تا رسیدن به تک تک آنها ادامه خواهیم داد."}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div {...{"className": "elementor-element elementor-element-26db18c e-con-full e-flex e-con e-child", "data-id": "26db18c"}}>
                          <div {...{"className": "elementor-element elementor-element-2e9a823 elementor-widget__width-inherit elementor-widget elementor-widget-cz_team", "data-id": "2e9a823"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "cz_team mb30 clr cz_team_1"}}>
                                <div {...{"className": "cz_team_img"}}>
                                  <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "600", "height": "600", "src": "/assets/original/cc05b88cbc5d1d33.webp", "className": "attachment-full size-full wp-image-3957", "alt": "Atiye haj babaee", "srcSet": "/assets/original/cc05b88cbc5d1d33.webp 600w, /assets/original/5622b78cde7d46dd.webp 100w, /assets/original/fe8bb13f1bbded24.webp 300w, /assets/original/e8e932ec7af51dd3.webp 150w", "sizes": "auto, (max-width: 600px) 100vw, 600px"})} />
                                </div>
                                <div {...{"className": "cz_team_content cz_wpe_content"}}>
                                  <h4 {...{"style": {"color": "#3d4461", "marginBottom": "15px"}}}>
                                    {"عطیه حاجی بابایی راوندی"}
                                  </h4>
                                  <p>
                                    <span {...{"style": {"color": "#999999"}}}>
                                      {"روانشناسی کودکان استثنایی"}
                                      <br />
                                    </span>
                                  </p>
                                </div>
                                <div {...{"className": "cz_team_social cz_social clr cz_social_fx_4 tac cz_tooltip cz_tooltip_up"}}>
                                  <div {...{"className": "cz_team_social_in"}}>
                                    <a {...withBaseProps({"href": "/", "aria-label": "ثبت درخواست", "role": "link", "tabIndex": "0", "className": "cz-Array", "data-title": "ثبت درخواست"})}>
                                      <svg {...{"xmlns": "http://www.w3.org/2000/svg", "width": "32", "height": "32", "viewBox": "0 0 24 24"}}>
                                        <path {...{"fill": "none", "stroke": "currentColor", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "1.5", "d": "M5.333 3c2.46-.003 4.836.887 6.667 2.5V21a10.07 10.07 0 0 0-6.667-2.5c-1.562 0-2.343 0-2.688-.22a1.16 1.16 0 0 1-.424-.425C2 17.51 2 16.895 2 15.663v-9.26c0-1.428 0-2.141.549-2.72c.548-.579 1.11-.609 2.234-.668Q5.056 3 5.333 3M12 21V5.5a10.07 10.07 0 0 1 7.217-2.485c1.124.06 1.686.09 2.234.668c.549.579.549 1.292.549 2.72V11.5m-.311 3.434l-.623-.623a1.063 1.063 0 0 0-1.503 0l-3.349 3.35a3.2 3.2 0 0 0-.872 1.628L15 21l1.71-.342a3.2 3.2 0 0 0 1.63-.872l3.349-3.349a1.063 1.063 0 0 0 0-1.503"}}>
                                        </path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-3ec0036 elementor-widget__width-inherit elementor-widget elementor-widget-cz_team", "data-id": "3ec0036"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "cz_team mb30 clr cz_team_1"}}>
                                <div {...{"className": "cz_team_img"}}>
                                  <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "288", "height": "289", "src": "/assets/original/1ed4069016f5e061.png", "className": "attachment-full size-full wp-image-3940", "alt": "Screenshot From 2025 10 11 02 41 58", "srcSet": "/assets/original/1ed4069016f5e061.png 288w, /assets/original/137b0523e5cadd8a.png 100w, /assets/original/a8a59b814257859e.png 150w", "sizes": "auto, (max-width: 288px) 100vw, 288px"})} />
                                </div>
                                <div {...{"className": "cz_team_content cz_wpe_content"}}>
                                  <h4 {...{"style": {"color": "#3d4461", "marginBottom": "15px"}}}>
                                    {"کیمیا کامرانی"}
                                  </h4>
                                  <p>
                                    <span {...{"style": {"color": "#999999"}}}>
                                      {"کارشناس ارشد مددکاری اجتماعی "}
                                      <br />
                                      {"و پنیان‌گذار خانه کودک ترنم"}
                                    </span>
                                  </p>
                                </div>
                                <div {...{"className": "cz_team_social cz_social clr cz_social_fx_4 tac cz_tooltip cz_tooltip_up"}}>
                                  <div {...{"className": "cz_team_social_in"}}>
                                    <a {...withBaseProps({"href": "/", "aria-label": "فیس بوک", "role": "link", "tabIndex": "0", "className": "cz-facebook-f", "data-title": "فیس بوک"})}>
                                      <i {...{"className": "fab fa-facebook-f"}}>
                                      </i>
                                    </a>
                                    <a {...withBaseProps({"href": "/", "aria-label": "اینستاگرام", "role": "link", "tabIndex": "0", "className": "cz-instagram", "data-title": "اینستاگرام"})}>
                                      <i {...{"className": "fab fa-instagram"}}>
                                      </i>
                                    </a>
                                    <a {...withBaseProps({"href": "/", "aria-label": "توییتر", "role": "link", "tabIndex": "0", "className": "cz-x-twitter", "data-title": "توییتر"})}>
                                      <i {...{"className": "fab fa-x-twitter"}}>
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div {...{"className": "elementor-element elementor-element-f7d6712 elementor-widget__width-inherit elementor-widget elementor-widget-cz_team", "data-id": "f7d6712"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "cz_team mb30 clr cz_team_1"}}>
                                <div {...{"className": "cz_team_img"}}>
                                  <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "1280", "height": "1280", "src": "/assets/original/ee9da3ac8eb1ced7.webp", "className": "attachment-full size-full wp-image-3956", "alt": "Venos vatan khah zarabanyar", "srcSet": "/assets/original/ee9da3ac8eb1ced7.webp 1280w, /assets/original/c3c743a04f1cdc34.webp 600w, /assets/original/348116b1601f6514.webp 100w, /assets/original/7f75655386fb3535.webp 1000w, /assets/original/99a50264547e7cb6.webp 300w, /assets/original/927e6c00e0f4c02e.webp 1024w, /assets/original/cb086c001416548c.webp 150w, /assets/original/60e1ceb6ad00c60e.webp 768w", "sizes": "auto, (max-width: 1280px) 100vw, 1280px"})} />
                                </div>
                                <div {...{"className": "cz_team_content cz_wpe_content"}}>
                                  <h4 {...{"style": {"color": "#3d4461", "marginBottom": "15px"}}}>
                                    {"ونوس وطن خواه"}
                                  </h4>
                                  <p>
                                    <span {...{"style": {"color": "#999999"}}}>
                                      {"متخصص اعصاب و روان"}
                                      <br />
                                    </span>
                                  </p>
                                </div>
                                <div {...{"className": "cz_team_social cz_social clr cz_social_fx_4 cz_tooltip cz_tooltip_up"}}>
                                  <div {...{"className": "cz_team_social_in"}}>
                                    <a {...withBaseProps({"href": "/", "aria-label": "فیس بوک", "role": "link", "tabIndex": "0", "className": "cz-facebook-f", "data-title": "فیس بوک"})}>
                                      <i {...{"className": "fab fa-facebook-f"}}>
                                      </i>
                                    </a>
                                    <a {...withBaseProps({"href": "/", "aria-label": "لینکدین", "role": "link", "tabIndex": "0", "className": "cz-linkedin-in", "data-title": "لینکدین"})}>
                                      <i {...{"className": "fab fa-linkedin-in"}}>
                                      </i>
                                    </a>
                                    <a {...withBaseProps({"href": "/", "aria-label": "توییتر", "role": "link", "tabIndex": "0", "className": "cz-x-twitter", "data-title": "توییتر"})}>
                                      <i {...{"className": "fab fa-x-twitter"}}>
                                      </i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div {...{"className": "elementor-element elementor-element-9fd09e5 e-flex e-con-boxed e-con e-parent", "data-id": "9fd09e5"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-a577d9b e-con-full e-flex e-con e-child", "data-id": "a577d9b"}}>
                          <div {...{"className": "elementor-element elementor-element-e3744c1 elementor-widget elementor-widget-cz_title", "data-id": "e3744c1"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline tac"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <h2>
                                        <span {...{"style": {"textAlign": "center", "color": "#3d4461"}}}>
                                          {"زیر‌مجموعه‌های "}
                                        </span>
                                        {"ضربان‌یار"}
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div {...{"className": "elementor-element elementor-element-91f9d56 e-con-full e-flex e-con e-child", "data-id": "91f9d56"}}>
                          <div {...{"className": "elementor-element elementor-element-3898c2b elementor-widget elementor-widget-cz_gallery", "data-id": "3898c2b"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div {...{"className": "cz_grid_p"}}>
                                <div {...{"className": "cz_grid cz_grid_1 clr cz_grid_c2 cz_grid_1_title_sub_after cz_grid_1_no_hover cz_grid_two_columns_on_mobile cz_grid_disable_links cz_grid_no_loading", "data-gap": "30"}}>
                                  <div {...{"className": "cz_grid_item"}}>
                                    <div {...{"data-title": "غزاله"}}>
                                      <ImageLightbox {...withBaseProps({"className": "cz_grid_link", "title": "غزاله", "href": "/assets/original/1140261ef9443578.webp", "data-xtra-lightbox": ""})}>
                                        <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "1180", "height": "1180", "src": "/assets/original/1140261ef9443578.webp", "className": "attachment-full size-full wp-image-3968", "alt": "Logo2 1", "srcSet": "/assets/original/1140261ef9443578.webp 1180w, /assets/original/0a4be55d08911932.webp 600w, /assets/original/f0bf63a25f43d448.webp 100w, /assets/original/12033c8e9ef7ba4d.webp 1000w, /assets/original/ef9eb8b9523d8b69.webp 300w, /assets/original/febda4de9ea82d3d.webp 1024w, /assets/original/2b7f8b9427106b4a.webp 150w, /assets/original/2a8fac17a68981cc.webp 768w", "sizes": "auto, (max-width: 1180px) 100vw, 1180px"})} />
                                        <div {...{"className": "cz_grid_details"}}>
                                        </div>
                                      </ImageLightbox>
                                      <div {...{"className": "cz_grid_details cz_grid_details_outside"}}>
                                        <ImageLightbox {...withBaseProps({"className": "cz_grid_title", "href": "/assets/original/1140261ef9443578.webp"})}>
                                          <h4>
                                            {"غزاله"}
                                          </h4>
                                        </ImageLightbox>
                                      </div>
                                    </div>
                                  </div>
                                  <div {...{"className": "cz_grid_item"}}>
                                    <div {...{"data-title": "ترنم رشد"}}>
                                      <ImageLightbox {...withBaseProps({"className": "cz_grid_link", "title": "ترنم رشد", "href": "/assets/original/97c90c0f4ef3dba4.webp", "data-xtra-lightbox": ""})}>
                                        <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "1280", "height": "1280", "src": "/assets/original/97c90c0f4ef3dba4.webp", "className": "attachment-full size-full wp-image-3969", "alt": "Logo taranom roshd", "srcSet": "/assets/original/97c90c0f4ef3dba4.webp 1280w, /assets/original/aca9df761f4d085a.webp 600w, /assets/original/92422a5bd374b805.webp 100w, /assets/original/0c6a40cc0906676b.webp 1000w, /assets/original/6b4b7a4efc6b7d26.webp 300w, /assets/original/5e642ad2c626771b.webp 1024w, /assets/original/6d4d1264465dc6ce.webp 150w, /assets/original/8b5a16392a21c4ae.webp 768w", "sizes": "auto, (max-width: 1280px) 100vw, 1280px"})} />
                                        <div {...{"className": "cz_grid_details"}}>
                                        </div>
                                      </ImageLightbox>
                                      <div {...{"className": "cz_grid_details cz_grid_details_outside"}}>
                                        <ImageLightbox {...withBaseProps({"className": "cz_grid_title", "href": "/assets/original/97c90c0f4ef3dba4.webp"})}>
                                          <h4>
                                            {"ترنم رشد"}
                                          </h4>
                                        </ImageLightbox>
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
                    <div {...{"className": "elementor-element elementor-element-5740a10 e-flex e-con-boxed e-con e-parent", "data-id": "5740a10"}}>
                      <div {...{"className": "e-con-inner"}}>
                        <div {...{"className": "elementor-element elementor-element-2901374 e-con-full e-flex e-con e-child", "data-id": "2901374"}}>
                          <div {...{"className": "elementor-element elementor-element-5f5dad4 elementor-widget elementor-widget-cz_title", "data-id": "5f5dad4"}}>
                            <div {...{"className": "elementor-widget-container"}}>
                              <div>
                                <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline tac"}}>
                                  <div {...{"className": "cz_title_content"}}>
                                    <div {...{"className": "cz_wpe_content"}}>
                                      <h2>
                                        <span {...{"style": {"textAlign": "center", "color": "#3d4461"}}}>
                                          {"آخرین آزمون‌های "}
                                        </span>
                                        {"ضربان‌یار"}
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div {...{"className": "elementor-element elementor-element-cd6a955 elementor-posts--align-right elementor-widget__width-inherit elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient elementor-widget elementor-widget-posts", "data-id": "cd6a955"}}>
                          <div {...{"className": "elementor-widget-container"}}>
                            <div {...{"className": "elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid", "role": "list"}}>
                              <article {...{"className": "elementor-post elementor-grid-item post-4018 zfb_form type-zfb_form status-publish has-post-thumbnail hentry", "role": "listitem"}}>
                                <div {...{"className": "elementor-post__card"}}>
                                  <a {...withBaseProps({"className": "elementor-post__thumbnail__link", "href": "/forms/پرسشنامه-ارزیابی-کودکان-ویژه-والدین-2/", "tabIndex": "-1", "target": "_blank"})}>
                                    <div {...{"className": "elementor-post__thumbnail elementor-fit-height"}}>
                                      <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "300", "height": "167", "src": "/assets/original/e38dcf153abd2ec8.webp", "className": "attachment-medium size-medium wp-image-4004", "alt": "Valedeyn 300x167", "srcSet": "/assets/original/e38dcf153abd2ec8.webp 300w, /assets/original/ab8b95162e954767.webp 1000w, /assets/original/e087fc61d73016a0.webp 1024w, /assets/original/4d2f4da4647f099d.webp 768w, /assets/original/3c822e4d8d1bdf08.webp 600w, /assets/original/6c02cf5da780a6a9.webp 1376w", "sizes": "auto, (max-width: 300px) 100vw, 300px"})} />
                                    </div>
                                  </a>
                                  <div {...{"className": "elementor-post__text"}}>
                                    <h3 {...{"className": "elementor-post__title"}}>
                                      <a {...withBaseProps({"href": "/forms/پرسشنامه-ارزیابی-کودکان-ویژه-والدین-2/", "target": "\"_blank\""})}>
                                        {" پرسشنامه ارزیابی کودکان ویژه والدین "}
                                      </a>
                                    </h3>
                                    <div {...{"className": "elementor-post__excerpt"}}>
                                      <p>
                                        {"سپاسگزاریم. پیشاپیش از زمانی که به ما اختصاص داده‌اید، بسیار وقت … "}
                                      </p>
                                    </div>
                                    <a {...withBaseProps({"className": "elementor-post__read-more", "href": "/forms/پرسشنامه-ارزیابی-کودکان-ویژه-والدین-2/", "aria-label": "Read more about پرسشنامه ارزیابی کودکان ویژه والدین", "tabIndex": "-1", "target": "_blank"})}>
                                      {" مشاهده پرسشنامه "}
                                    </a>
                                  </div>
                                  <div {...{"className": "elementor-post__meta-data"}}>
                                    <span {...{"className": "elementor-post-date"}}>
                                      {" مهر 19, 1404 "}
                                    </span>
                                  </div>
                                </div>
                              </article>
                              <article {...{"className": "elementor-post elementor-grid-item post-4017 zfb_form type-zfb_form status-publish has-post-thumbnail hentry", "role": "listitem"}}>
                                <div {...{"className": "elementor-post__card"}}>
                                  <a {...withBaseProps({"className": "elementor-post__thumbnail__link", "href": "/forms/اندازه-گیری-عزت-نفس-کلی-و-ارزش-شخصی/", "tabIndex": "-1", "target": "_blank"})}>
                                    <div {...{"className": "elementor-post__thumbnail elementor-fit-height"}}>
                                      <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "300", "height": "167", "src": "/assets/original/b15e3aae461d5ac6.webp", "className": "attachment-medium size-medium wp-image-4003", "alt": "Ezatenafs 300x167", "srcSet": "/assets/original/b15e3aae461d5ac6.webp 300w, /assets/original/9a7acb12a8767e79.webp 1000w, /assets/original/88e0aba2c595fcbf.webp 1024w, /assets/original/703977ce647e0ee9.webp 768w, /assets/original/4e1a7d2fc1d8d110.webp 600w, /assets/original/15ab623579a0179b.webp 1376w", "sizes": "auto, (max-width: 300px) 100vw, 300px"})} />
                                    </div>
                                  </a>
                                  <div {...{"className": "elementor-post__text"}}>
                                    <h3 {...{"className": "elementor-post__title"}}>
                                      <a {...withBaseProps({"href": "/forms/اندازه-گیری-عزت-نفس-کلی-و-ارزش-شخصی/", "target": "\"_blank\""})}>
                                        {" اندازه گیری: عزت نفس کلی و ارزش شخصی "}
                                      </a>
                                    </h3>
                                    <div {...{"className": "elementor-post__excerpt"}}>
                                      <p>
                                        {"سنجش: میزان رضایت از زندگی و داشتن احساس خوب درمورد خود … "}
                                      </p>
                                    </div>
                                    <a {...withBaseProps({"className": "elementor-post__read-more", "href": "/forms/اندازه-گیری-عزت-نفس-کلی-و-ارزش-شخصی/", "aria-label": "Read more about اندازه گیری: عزت نفس کلی و ارزش شخصی", "tabIndex": "-1", "target": "_blank"})}>
                                      {" مشاهده پرسشنامه "}
                                    </a>
                                  </div>
                                  <div {...{"className": "elementor-post__meta-data"}}>
                                    <span {...{"className": "elementor-post-date"}}>
                                      {" مهر 19, 1404 "}
                                    </span>
                                  </div>
                                </div>
                              </article>
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
