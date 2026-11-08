import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox } from "../components/Interactions";

export default function Blog() {
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
            <div {...{"className": "col s8"}}>
              <div {...{"className": "content clr"}}>
                <h3>
                  {"یافت نشد!"}
                </h3>
                <p>
                  {"با عرض پوزش، هیچ مطلبی مطابق با کلمه جستجوی شما یافت نشد. لطفا با کلمه دیگری را امتحان کنید."}
                </p>
                <form {...{"className": "search_404 search_not_found", "method": "get", "action": "/"}}>
                  <input {...{"id": "inputhead", "name": "s", "type": "text", "defaultValue": "", "placeholder": "جستجو"}} />
                  <button {...{"type": "submit"}}>
                    <i {...{"className": "fa fa-search", "aria-hidden": "true"}}>
                    </i>
                  </button>
                </form>
              </div>
            </div>
            <aside {...{"className": "col s4 sidebar_primary"}}>
              <div {...{"className": "sidebar_inner"}}>
                <div {...{"id": "search-9", "data-cz-style": "#search-9 form button{border-radius:20px;}", "className": "center_on_mobile widget clr widget_search"}}>
                  <h4 {...{"className": "codevz-widget-title"}}>
                    <span>
                    </span>
                  </h4>
                  <form {...{"role": "search", "method": "get", "className": "search-form", "action": "/"}}>
                    <label>
                      <span {...{"className": "screen-reader-text"}}>
                        {"جستجو برای:"}
                      </span>
                      <input {...{"type": "search", "className": "search-field", "placeholder": "جستجو …", "defaultValue": "", "name": "s"}} />
                    </label>
                    <input {...{"type": "submit", "className": "search-submit", "defaultValue": "جستجو"}} />
                  </form>
                </div>
                <div {...{"id": "categories-3", "className": "center_on_mobile codevz-widget-has-count widget clr widget_categories"}}>
                  <h4 {...{"className": "codevz-widget-title"}}>
                    {"دسته بندی ها"}
                  </h4>
                  <div {...{"className": "codevz-widget-content clr"}}>
                    <ul>
                      <li {...{"className": "cat-item-none"}}>
                        {"هیچ دسته‌ای پیدا نشد"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
