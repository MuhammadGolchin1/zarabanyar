import { useLayoutEffect } from "react";
// Shared header faithfully preserved from the public reference.
export default function Header() {
  useLayoutEffect(() => {
    const clean = value => decodeURIComponent(value).replace(/\/+$/, '') || '/';
    document.querySelectorAll('header.elementor a[href]').forEach(anchor => {
      const active = clean(new URL(anchor.href).pathname) === clean(window.location.pathname) && !anchor.search;
      anchor.classList.toggle('elementor-item-active', active);
      if (active) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
  }, []);
  return (
    <header {...{"data-elementor-type": "header", "data-elementor-id": "4055", "className": "elementor elementor-4055", "data-elementor-post-type": "elementor_library"}}>
      <div {...{"className": "elementor-element elementor-element-71bd8fc e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-parent", "data-id": "71bd8fc"}}>
        <div {...{"className": "elementor-element elementor-element-acd7555 e-con-full e-flex e-con e-child", "data-id": "acd7555"}}>
          <div {...{"className": "elementor-element elementor-element-e90d6d3 elementor-widget__width-initial elementor-widget elementor-widget-image", "data-id": "e90d6d3"}}>
            <div {...{"className": "elementor-widget-container"}}>
              <a {...{"href": "/"}}>
                <img {...{"width": "789", "height": "167", "src": "/assets/original/5d550ea6ceb8eb7c.avif", "className": "attachment-full size-full wp-image-4197", "alt": "Image 1", "srcSet": "/assets/original/5d550ea6ceb8eb7c.avif 789w, /assets/original/97f1d2bd109b718a.avif 300w, /assets/original/3a6d6234a3a66805.avif 768w, /assets/original/fefc8610c509469f.avif 600w", "sizes": "(max-width: 789px) 100vw, 789px", "loading": "lazy"}} />
              </a>
            </div>
          </div>
          <div {...{"className": "elementor-element elementor-element-10f8d3e elementor-nav-menu__align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu", "data-id": "10f8d3e"}}>
            <div {...{"className": "elementor-widget-container"}}>
              <nav {...{"aria-label": "Menu", "className": "elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"}}>
                <ul {...{"id": "menu-1-10f8d3e", "className": "elementor-nav-menu"}}>
                  <li {...{"className": "menu-item menu-item-type-post_type menu-item-object-page menu-item-4387 cz"}}>
                    <a {...{"href": "/about-us/", "className": "elementor-item"}}>
                      {"درباره ما"}
                    </a>
                  </li>
                  <li {...{"className": "menu-item menu-item-type-post_type menu-item-object-page menu-item-4388 cz"}}>
                    <a {...{"href": "/رزور-نوبت-مشاوره/", "className": "elementor-item"}}>
                      {"رزرو نوبت"}
                    </a>
                  </li>
                  <li {...{"className": "menu-item menu-item-type-post_type menu-item-object-page page_item page-item-4276 menu-item-4389 cz"}}>
                    <a {...{"href": "/شناخت-کودکتان/", "aria-current": "page", "className": "elementor-item"}}>
                      {"شناخت کودکتان"}
                    </a>
                  </li>
                  <li {...{"className": "menu-item menu-item-type-custom menu-item-object-custom menu-item-4404 cz"}}>
                    <a {...{"href": "/assessment-forms/kids/arzyabi", "className": "elementor-item"}}>
                      {"ارزیابی کودک"}
                    </a>
                  </li>
                </ul>
              </nav>
              <div {...{"className": "elementor-menu-toggle", "role": "button", "tabIndex": "0", "aria-label": "Menu Toggle", "aria-expanded": "false"}}>
                <i {...{"aria-hidden": "true", "role": "presentation", "className": "elementor-menu-toggle__icon--open eicon-menu-bar"}}>
                </i>
                <i {...{"aria-hidden": "true", "role": "presentation", "className": "elementor-menu-toggle__icon--close eicon-close"}}>
                </i>
              </div>
              <nav {...{"className": "elementor-nav-menu--dropdown elementor-nav-menu__container", "aria-hidden": "true"}}>
                <ul {...{"id": "menu-2-10f8d3e", "className": "elementor-nav-menu"}}>
                  <li {...{"className": "menu-item menu-item-type-post_type menu-item-object-page menu-item-4387 cz"}}>
                    <a {...{"href": "/about-us/", "className": "elementor-item", "tabIndex": "-1"}}>
                      {"درباره ما"}
                    </a>
                  </li>
                  <li {...{"className": "menu-item menu-item-type-post_type menu-item-object-page menu-item-4388 cz"}}>
                    <a {...{"href": "/رزور-نوبت-مشاوره/", "className": "elementor-item", "tabIndex": "-1"}}>
                      {"رزرو نوبت"}
                    </a>
                  </li>
                  <li {...{"className": "menu-item menu-item-type-post_type menu-item-object-page page_item page-item-4276 menu-item-4389 cz"}}>
                    <a {...{"href": "/شناخت-کودکتان/", "aria-current": "page", "className": "elementor-item", "tabIndex": "-1"}}>
                      {"شناخت کودکتان"}
                    </a>
                  </li>
                  <li {...{"className": "menu-item menu-item-type-custom menu-item-object-custom menu-item-4404 cz"}}>
                    <a {...{"href": "/assessment-forms/kids/arzyabi", "className": "elementor-item", "tabIndex": "-1"}}>
                      {"ارزیابی کودک"}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div {...{"className": "elementor-element elementor-element-4551387 elementor-widget__width-auto elementor-widget elementor-widget-shortcode", "data-id": "4551387"}}>
            <div {...{"className": "elementor-widget-container"}}>
              <div {...{"className": "elementor-shortcode"}}>
                <button {...{"attr-disclick": "1", "className": "digits-login-modal", "type": "button"}}>
                  <span>
                    {"ورود / عضویت"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div {...{"className": "elementor-element elementor-element-ee87b38 elementor-widget__width-auto elementor-widget elementor-widget-shortcode", "data-id": "ee87b38"}}>
            <div {...{"className": "elementor-widget-container"}}>
              <div {...{"className": "elementor-shortcode"}}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div {...{"className": "elementor-element elementor-element-7721bf9 e-con-full elementor-hidden-desktop e-flex e-con e-parent", "data-id": "7721bf9"}}>
        <div {...{"className": "elementor-element elementor-element-d41db65 elementor-widget__width-initial elementor-widget elementor-widget-cz_logo", "data-id": "d41db65"}}>
          <div {...{"className": "elementor-widget-container"}}>
            <div {...{"className": "cz_logo clr cz_helm_pos_center"}}>
              <a {...{"href": "/"}}>
                <img {...{"width": "1180", "height": "1180", "src": "/assets/original/1140261ef9443578.webp", "className": "attachment-full size-full wp-image-3968", "alt": "Logo2 1", "loading": "lazy"}} />
              </a>
            </div>
          </div>
        </div>
        <div {...{"className": "elementor-element elementor-element-371b3aa e-con-full e-flex e-con e-child", "data-id": "371b3aa"}}>
          <div {...{"className": "elementor-element elementor-element-3d62495 elementor-mobile-align-center elementor-widget-mobile__width-initial elementor-widget elementor-widget-button", "data-id": "3d62495"}}>
            <div {...{"className": "elementor-widget-container"}}>
              <div {...{"className": "elementor-button-wrapper"}}>
                <a {...{"className": "elementor-button elementor-button-link elementor-size-sm", "href": "/?login=true"}}>
                  <span {...{"className": "elementor-button-content-wrapper"}}>
                    <span {...{"className": "elementor-button-icon"}}>
                      <i {...{"aria-hidden": "true", "className": "fas fa-user"}}>
                      </i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div {...{"className": "elementor-element elementor-element-98eff5e elementor-widget elementor-widget-cz_menu", "data-id": "98eff5e"}}>
            <div {...{"className": "elementor-widget-container"}}>
              <button {...{"className": "fas fa-bars icon_dropdown_menu cz_helm_pos_center", "type": "button", "aria-label": "باز کردن منو", "aria-expanded": "false"}}>
                <span>
                </span>
              </button>
              <button {...{"className": "fas fa-bars icon_mobile_dropdown_menu cz_helm_pos_center hide", "type": "button", "aria-label": "باز کردن منو", "aria-expanded": "false"}}>
                <span>
                </span>
              </button>
              <ul {...{"className": "sf-menu clr cz_menu_410 dropdown_menu cz_helm_pos_center", "data-indicator": "fas fa-bars", "data-indicator2": ""}}>
                <li {...{"id": "menu--4387", "className": "menu-item menu-item-type-post_type menu-item-object-page cz", "data-sub-menu": ""}}>
                  <a {...{"href": "/about-us/", "data-title": "درباره ما"}}>
                    <span>
                      {"درباره ما"}
                    </span>
                  </a>
                </li>
                <li {...{"id": "menu--4388", "className": "menu-item menu-item-type-post_type menu-item-object-page cz", "data-sub-menu": ""}}>
                  <a {...{"href": "/رزور-نوبت-مشاوره/", "data-title": "رزرو نوبت"}}>
                    <span>
                      {"رزرو نوبت"}
                    </span>
                  </a>
                </li>
                <li {...{"id": "menu--4389", "className": "menu-item menu-item-type-post_type menu-item-object-page page_item page-item-4276 cz", "data-sub-menu": ""}}>
                  <a {...{"href": "/شناخت-کودکتان/", "data-title": "شناخت کودکتان"}}>
                    <span>
                      {"شناخت کودکتان"}
                    </span>
                  </a>
                </li>
                <li {...{"id": "menu--4404", "className": "menu-item menu-item-type-custom menu-item-object-custom cz", "data-sub-menu": ""}}>
                  <a {...{"href": "/assessment-forms/kids/arzyabi", "data-title": "ارزیابی کودک"}}>
                    <span>
                      {"ارزیابی کودک"}
                    </span>
                  </a>
                </li>
              </ul>
              <i {...{"className": "fa czico-198-cancel cz_close_popup xtra-close-icon hide"}}>
              </i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
