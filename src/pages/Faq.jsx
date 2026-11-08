import Header from "../components/Header";
import Footer from "../components/Footer";
import { withBaseProps } from "../lib/paths";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function Faq() {
  return (
    <div {...{"id": "layout", "className": "clr layout_"}}>
      <div {...{"className": "inner_layout"}}>
        <div {...{"className": "cz_overlay", "aria-hidden": "true"}}>
        </div>
        <Header />
        <div {...{"className": "page_cover", "aria-hidden": "true"}}>
        </div>
        <div {...{"id": "page_content", "className": "page_content mb0", "role": "main"}}>
          <div {...{"className": "row clr"}}>
            <div {...{"className": "s12 clr"}}>
              <div {...{"className": "cz_is_blank clr"}}>
                <div {...{"className": "cz_post_content clr"}}>
                  <div {...{"data-elementor-type": "wp-page", "data-elementor-id": "14", "className": "elementor elementor-14", "data-elementor-post-type": "page"}}>
                    <section {...{"className": "elementor-section elementor-top-section elementor-element elementor-element-b2a5f92 elementor-section-boxed elementor-section-height-default elementor-section-height-default", "data-id": "b2a5f92"}}>
                      <div {...{"className": "elementor-container elementor-column-gap-wide"}}>
                        <div {...{"className": "elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-19aa802", "data-id": "19aa802"}}>
                          <div {...{"className": "elementor-widget-wrap elementor-element-populated"}}>
                            <div {...{"className": "elementor-element elementor-element-3f54912 elementor-widget elementor-widget-cz_image", "data-id": "3f54912"}}>
                              <div {...{"className": "elementor-widget-container"}}>
                                <div {...{"className": "cz_image clr cz_image_no_fx center_on_mobile", "data-position": ""}}>
                                  <div>
                                    <div {...{"className": "cz_image_in"}}>
                                      <div {...{"className": "cz_main_image"}}>
                                        <img {...withBaseProps({"fetchPriority": "high", "decoding": "async", "loading": "eager", "data-no-lazy": "1", "width": "360", "height": "536", "src": "/assets/original/1b2a2674ff6fa1e3.jpg", "className": "attachment-full size-full wp-image-1908", "alt": "Img5", "srcSet": "/assets/original/1b2a2674ff6fa1e3.jpg 360w, /assets/original/f5c19206bae52c2f.jpg 201w", "sizes": "(max-width: 360px) 100vw, 360px"})} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <section {...{"className": "elementor-section elementor-inner-section elementor-element elementor-element-e462e57 elementor-section-boxed elementor-section-height-default elementor-section-height-default", "data-id": "e462e57"}}>
                              <div {...{"className": "elementor-container elementor-column-gap-default"}}>
                                <div {...{"className": "elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-53e56ea", "data-id": "53e56ea"}}>
                                  <div {...{"className": "elementor-widget-wrap elementor-element-populated"}}>
                                    <div {...{"className": "elementor-element elementor-element-8073ac7 elementor-widget elementor-widget-cz_title", "data-id": "8073ac7"}}>
                                      <div {...{"className": "elementor-widget-container"}}>
                                        <div>
                                          <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_has_icon cz_title_pos_inline"}}>
                                            <div {...{"className": "cz_title_content"}}>
                                              <i {...{"className": "cz_title_icon_before fa czico-010-support"}}>
                                              </i>
                                              <div {...{"className": "cz_wpe_content"}}>
                                                <h4>
                                                  <span {...{"style": {"color": "#ffffff"}}}>
                                                    {"از ما بپرسید"}
                                                  </span>
                                                </h4>
                                                <p>
                                                  {"فرم پرسش آنلاین"}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                        <div {...{"className": "elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-d0a7e40", "data-id": "d0a7e40"}}>
                          <div {...{"className": "elementor-widget-wrap elementor-element-populated"}}>
                            <div {...{"className": "elementor-element elementor-element-3b8f3b0 elementor-widget elementor-widget-cz_title", "data-id": "3b8f3b0"}}>
                              <div {...{"className": "elementor-widget-container"}}>
                                <div>
                                  <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                    <div {...{"className": "cz_title_content"}}>
                                      <div {...{"className": "cz_wpe_content"}}>
                                        <h2>
                                          {"سوالی "}
                                          <span {...{"style": {"color": "#3d4461"}}}>
                                            {"در ذهن دارید؟"}
                                          </span>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{"className": "elementor-element elementor-element-8518b0d elementor-widget elementor-widget-cz_title", "data-id": "8518b0d"}}>
                              <div {...{"className": "elementor-widget-container"}}>
                                <div>
                                  <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_pos_inline"}}>
                                    <div {...{"className": "cz_title_content"}}>
                                      <div {...{"className": "cz_wpe_content"}}>
                                        <span {...{"style": {"fontSize": "18px", "color": "#666666"}}}>
                                          {"لطفا سوالات زیر را بخوانید و اگر نتوانستید پاسخ خود را پیدا کنید، لطفا سوال خود را برای ما ارسال کنید، ما در اسرع وقت به شما پاسخ خواهیم داد."}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{"className": "elementor-element elementor-element-51dd7e1 elementor-widget elementor-widget-cz_title", "data-id": "51dd7e1"}}>
                              <div {...{"className": "elementor-widget-container"}}>
                                <div>
                                  <div {...{"className": "cz_title clr cz_mobile_text_center cz_title_has_icon cz_title_pos_inline"}}>
                                    <div {...{"className": "cz_title_content"}}>
                                      <i {...{"className": "cz_title_icon_before fa fa-question"}}>
                                      </i>
                                      <div {...{"className": "cz_wpe_content"}}>
                                        <h4>
                                          {"سوالات متداول"}
                                        </h4>
                                        <p>
                                          {"پرسش و پاسخ های رایج"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div {...{"className": "elementor-element elementor-element-1827843 elementor-widget elementor-widget-cz_accordion", "data-id": "1827843"}}>
                              <div {...{"className": "elementor-widget-container"}}>
                                <Accordion {...{"className": "cz_acc clr cz_acc_toggle cz_acc_first_open"}}>
                                  <div>
                                    <div {...{"className": "elementor-repeater-item-38f161a"}}>
                                      <AccordionTitle {...{"className": "cz_acc_child"}}>
                                        <div>
                                          {"چه خدماتی در کلینیک ها ارائه می شود؟"}
                                        </div>
                                      </AccordionTitle>
                                      <AccordionPanel {...{"className": "cz_acc_child_content clr"}}>
                                        <p>
                                          {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                                        </p>
                                      </AccordionPanel>
                                    </div>
                                    <div {...{"className": "elementor-repeater-item-e2cd101"}}>
                                      <AccordionTitle {...{"className": "cz_acc_child"}}>
                                        <div>
                                          {"پشتیبانی از بیمه ها در کلینیک وجود دارد؟"}
                                        </div>
                                      </AccordionTitle>
                                      <AccordionPanel {...{"className": "cz_acc_child_content clr"}}>
                                        <p>
                                          {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                                        </p>
                                      </AccordionPanel>
                                    </div>
                                    <div {...{"className": "elementor-repeater-item-55a1071"}}>
                                      <AccordionTitle {...{"className": "cz_acc_child"}}>
                                        <div>
                                          {"رزرو نوبت به چه صورت است؟"}
                                        </div>
                                      </AccordionTitle>
                                      <AccordionPanel {...{"className": "cz_acc_child_content clr"}}>
                                        <p>
                                          {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                                        </p>
                                      </AccordionPanel>
                                    </div>
                                    <div {...{"className": "elementor-repeater-item-0c83397"}}>
                                      <AccordionTitle {...{"className": "cz_acc_child"}}>
                                        <div>
                                          {"خدمات پرستاری خصوصی هم ارائه می دهید؟"}
                                        </div>
                                      </AccordionTitle>
                                      <AccordionPanel {...{"className": "cz_acc_child_content clr"}}>
                                        <p>
                                          {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                                        </p>
                                      </AccordionPanel>
                                    </div>
                                    <div {...{"className": "elementor-repeater-item-c4cda53"}}>
                                      <AccordionTitle {...{"className": "cz_acc_child"}}>
                                        <div>
                                          {"خدامت اورژانسی و فوری به چه صورت است؟"}
                                        </div>
                                      </AccordionTitle>
                                      <AccordionPanel {...{"className": "cz_acc_child_content clr"}}>
                                        <p>
                                          {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                                        </p>
                                      </AccordionPanel>
                                    </div>
                                    <div {...{"className": "elementor-repeater-item-0a1ddf3"}}>
                                      <AccordionTitle {...{"className": "cz_acc_child"}}>
                                        <div>
                                          {"در صورت نیاز به عمل جراحی چه باید کرد؟"}
                                        </div>
                                      </AccordionTitle>
                                      <AccordionPanel {...{"className": "cz_acc_child_content clr"}}>
                                        <p>
                                          {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                                        </p>
                                      </AccordionPanel>
                                    </div>
                                    <div {...{"className": "elementor-repeater-item-0b4158d"}}>
                                      <AccordionTitle {...{"className": "cz_acc_child"}}>
                                        <div>
                                          {"خدمات چکاپ رایگان هم دارید؟"}
                                        </div>
                                      </AccordionTitle>
                                      <AccordionPanel {...{"className": "cz_acc_child_content clr"}}>
                                        <p>
                                          {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                                        </p>
                                      </AccordionPanel>
                                    </div>
                                  </div>
                                </Accordion>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
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
