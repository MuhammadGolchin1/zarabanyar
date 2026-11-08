import Header from "../components/Header";
import Footer from "../components/Footer";
import { withBaseProps } from "../lib/paths";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function Kids() {
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
              <div {...{"className": "content clr"}}>
                <div {...{"className": "cz_post_content clr"}}>
                  <div {...{"className": "zfb-archive zfb-category-archive zfb-category-archive--shortcode"}}>
                    <header {...{"className": "zfb-archive__header"}}>
                      <h2 {...{"className": "zfb-archive__title"}}>
                        {"کودکان"}
                      </h2>
                    </header>
                    <div {...{"className": "zfb-archive-grid"}}>
                      <article {...{"className": "zfb-archive-card"}}>
                        <a {...withBaseProps({"className": "zfb-archive-card__media", "href": "/assessment-forms/kids/form-ezzate-nafs/"})}>
                          <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "768", "height": "429", "src": "/assets/original/703977ce647e0ee9.webp", "className": "zfb-archive-card__image wp-post-image", "alt": "Ezatenafs 768x429", "srcSet": "/assets/original/703977ce647e0ee9.webp 768w, /assets/original/9a7acb12a8767e79.webp 1000w, /assets/original/b15e3aae461d5ac6.webp 300w, /assets/original/88e0aba2c595fcbf.webp 1024w, /assets/original/4e1a7d2fc1d8d110.webp 600w, /assets/original/15ab623579a0179b.webp 1376w", "sizes": "auto, (max-width: 768px) 100vw, 768px"})} />
                        </a>
                        <div {...{"className": "zfb-archive-card__body"}}>
                          <h3 {...{"className": "zfb-archive-card__title"}}>
                            <a {...withBaseProps({"href": "/assessment-forms/kids/form-ezzate-nafs/"})}>
                              {"اندازه گیری: عزت نفس کلی و ارزش شخصی"}
                            </a>
                          </h3>
                          <p {...{"className": "zfb-archive-card__excerpt"}}>
                            {"سنجش: میزان رضایت از زندگی و داشتن احساس خوب درمورد خود مقیاس عزت نفس روزنبرگ هریک از عبارت های زیر را به دقت بخوانید.…"}
                          </p>
                          <a {...withBaseProps({"className": "zfb-archive-card__cta", "href": "/assessment-forms/kids/form-ezzate-nafs/"})}>
                            {" مشاهده پرسشنامه "}
                          </a>
                        </div>
                        <footer {...{"className": "zfb-archive-card__footer"}}>
                          <time {...{"dateTime": "1404/6/14 21:27:12"}}>
                            {"1404/06/14 21:27:12"}
                          </time>
                        </footer>
                      </article>
                      <article {...{"className": "zfb-archive-card"}}>
                        <a {...withBaseProps({"className": "zfb-archive-card__media", "href": "/assessment-forms/kids/arzyabi/"})}>
                          <img {...withBaseProps({"loading": "lazy", "decoding": "async", "width": "768", "height": "429", "src": "/assets/original/4d2f4da4647f099d.webp", "className": "zfb-archive-card__image wp-post-image", "alt": "Valedeyn 768x429", "srcSet": "/assets/original/4d2f4da4647f099d.webp 768w, /assets/original/ab8b95162e954767.webp 1000w, /assets/original/e38dcf153abd2ec8.webp 300w, /assets/original/e087fc61d73016a0.webp 1024w, /assets/original/3c822e4d8d1bdf08.webp 600w, /assets/original/6c02cf5da780a6a9.webp 1376w", "sizes": "auto, (max-width: 768px) 100vw, 768px"})} />
                        </a>
                        <div {...{"className": "zfb-archive-card__body"}}>
                          <h3 {...{"className": "zfb-archive-card__title"}}>
                            <a {...withBaseProps({"href": "/assessment-forms/kids/arzyabi/"})}>
                              {"پرسشنامه ارزیابی کودکان ویژه والدین"}
                            </a>
                          </h3>
                          <p {...{"className": "zfb-archive-card__excerpt"}}>
                            {"سپاسگزاریم. پیشاپیش از زمانی که به ما اختصاص داده‌اید، بسیار وقت شما بخیر. لازم به ذکر است که از اطلاعاتی که در اختیار ما…"}
                          </p>
                          <a {...withBaseProps({"className": "zfb-archive-card__cta", "href": "/assessment-forms/kids/arzyabi/"})}>
                            {" مشاهده پرسشنامه "}
                          </a>
                        </div>
                        <footer {...{"className": "zfb-archive-card__footer"}}>
                          <time {...{"dateTime": "1404/6/14 21:27:12"}}>
                            {"1404/06/14 21:27:12"}
                          </time>
                        </footer>
                      </article>
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
