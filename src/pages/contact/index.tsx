import React, {FC} from 'react';
import './index.css'


interface Interface {}

const Contact: FC<Partial<Interface>> = () => {
  return (
    <div style={{opacity: 1}} className="page-wrapper">
      <div data-collapse="medium" data-animation="over-left" data-duration="400"
           data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" data-easing="ease" data-easing2="ease" role="banner"
           className="header w-nav">
        <div className="container-default w-container">
          <div className="header-wrapper">
            <div className="split-content header-right"><a href="/home" className="brand w-nav-brand"><img
              src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60da7a7b304772e2954fe9e4_job-board-x-logo-webflow-template-2.svg"
              alt="Job Board X Webflow Template - Logo" className="header-logo"/></a></div>
            <div className="split-content header-center">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <ul role="list" className="header-navigation">
                  <li className="nav-item-wrapper"><a href="/home" className="nav-link">Home</a></li>
                  <li className="nav-item-wrapper"><a href="/about" className="nav-link">About</a></li>
                  <li className="nav-item-wrapper">
                    <div data-hover="true" data-delay="0" data-w-id="18b86231-820c-c7b9-b34b-25486eac4d70"
                         className="nav-link-dropdown w-dropdown" style={{maxWidth: '1246px'}}>
                      <div className="nav-link dropdown w-dropdown-toggle" id="w-dropdown-toggle-0"
                           aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button"
                           >
                        <div>Categories&nbsp;&nbsp;<span className="dropdown-arrow"></span></div>
                      </div>
                      <nav className="dropdown-list categories w-dropdown-list"
                           style={{
                             display: 'none',
                             opacity: 1,
                             transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                             transformStyle: 'preserve-3d',
                             height: '0px',
                           }}
                           id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                        <div className="dropdown-nav-main-wrapper">
                          <div className="dropdown-nav-pages-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ccaf9848061904755c13a8_icon-location-job-board-x-template.svg"
                            alt="Location - Job Board X Webflow Template" className="image jobs-filters"/>
                            <div className="title h5-size dropdown-nav-title">Locations</div>
                            <div className="dropdown-nav-content categories">
                              <div className="w-dyn-list">
                                <div role="list"
                                     className="jobs-filters-dropdown-links-grid header-dropdown last w-dyn-items">
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-location-category/austin-tx" className="dropdown-nav-link" >Austin,
                                    TX</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-location-category/miami-fl" className="dropdown-nav-link" >Miami,
                                    FL</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-location-category/new-york-ny" className="dropdown-nav-link"
                                    >New York, NY</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-location-category/remote" className="dropdown-nav-link"
                                    >Remote</a></div>
                                </div>
                              </div>
                            </div></div>
                          <div className="dropdown-nav-pages-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ccaf98aeb4755ee46d26c7_icon-level-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="image jobs-filters"/>
                            <div className="title h5-size dropdown-nav-title">Job Level</div>
                            <div className="dropdown-nav-content categories">
                              <div className="w-dyn-list">
                                <div role="list"
                                     className="jobs-filters-dropdown-links-grid header-dropdown last w-dyn-items">
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-level-category/junior" className="dropdown-nav-link"
                                    >Junior</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-level-category/senior" className="dropdown-nav-link"
                                    >Senior</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-level-category/executive" className="dropdown-nav-link"
                                    >Executive</a></div>
                                </div>
                              </div>
                            </div></div>
                          <div className="dropdown-nav-pages-wrapper last"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ccaf9874b970382dd393af_icon-department-job-board-x-template.svg"
                            alt="Portfolio - Job Board X Webflow Template" className="image jobs-filters"/>
                            <div className="title h5-size dropdown-nav-title">Department</div>
                            <div className="dropdown-nav-content categories">
                              <div className="w-dyn-list">
                                <div role="list"
                                     className="jobs-filters-dropdown-links-grid header-dropdown w-dyn-items">
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-department-category/support" className="dropdown-nav-link"
                                    >Support</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-department-category/business" className="dropdown-nav-link"
                                    >Business</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-department-category/marketing" className="dropdown-nav-link"
                                    >Marketing</a></div>
                                </div>
                              </div>
                              <div className="w-dyn-list">
                                <div role="list"
                                     className="jobs-filters-dropdown-links-grid header-dropdown last w-dyn-items">
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-department-category/design" className="dropdown-nav-link"
                                    >Design</a></div>
                                  <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                                    href="/job-department-category/development" className="dropdown-nav-link"
                                    >Development</a></div>
                                </div>
                              </div>
                            </div></div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-item-wrapper">
                    <div data-hover="true" data-delay="0" data-w-id="9d8771e1-cd36-f259-3eb7-a23f095b6d83"
                         className="nav-link-dropdown w-dropdown" style={{maxWidth: '1246px'}}>
                      <div className="nav-link dropdown w-dropdown-toggle" id="w-dropdown-toggle-1"
                           aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button"
                           >
                        <div>Pages&nbsp;&nbsp;<span className="dropdown-arrow"></span></div>
                      </div>
                      <nav className="dropdown-list w-dropdown-list"
                           style={{
                             display: 'none',
                             opacity: 1,
                             transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                             transformStyle: 'preserve-3d',
                             height: '0px',
                           }}
                           id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1">
                        <div className="dropdown-nav-main-wrapper">
                          <div className="dropdown-nav-pages-wrapper">
                            <div className="title h5-size dropdown-nav-title">Menu</div>
                            <div className="dropdown-nav-content">
                              <ul role="list" className="dropdown-nav">
                                <li className="dropdown-nav-item"><a href="/home" className="dropdown-nav-link"
                                                                     >Home</a></li>
                                <li className="dropdown-nav-item"><a href="/about" className="dropdown-nav-link"
                                                                     >About us</a></li>
                                <li className="dropdown-nav-item"><a
                                  href="https://jobboardxtemplate.webflow.io/job/backend-software-engineer"
                                  className="dropdown-nav-link" >Job post</a></li>
                                <li className="dropdown-nav-item"><a
                                  href="https://jobboardxtemplate.webflow.io/job-location-category/remote"
                                  className="dropdown-nav-link" >Job post category</a></li>
                                <li className="dropdown-nav-item"><a href="/companies" className="dropdown-nav-link"
                                                                     >Companies</a></li>
                                <li className="dropdown-nav-item"><a
                                  href="https://jobboardxtemplate.webflow.io/company/webflow"
                                  className="dropdown-nav-link" >Single company</a></li>
                              </ul>
                              <ul role="list" className="dropdown-nav last">
                                <li className="dropdown-nav-item"><a href="/post-a-job" className="dropdown-nav-link"
                                                                     >Post a free job</a></li>
                                <li className="dropdown-nav-item"><a href="/pricing" className="dropdown-nav-link"
                                                                     >Post a paid job</a></li>
                                <li className="dropdown-nav-item"><a href="/blog" className="dropdown-nav-link"
                                                                     >Blog</a></li>
                                <li className="dropdown-nav-item"><a
                                  href="https://jobboardxtemplate.webflow.io/blog/how-to-easily-collaborate-with-designers-as-a-developer"
                                  className="dropdown-nav-link" >Blog post</a></li>
                                <li className="dropdown-nav-item"><a href="/contact" aria-current="page"
                                                                     className="dropdown-nav-link w--current"
                                                                     >Contact</a></li>
                                <li className="dropdown-nav-item"><a href="/pricing" className="dropdown-nav-link"
                                                                     >Pricing</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="dropdown-nav-pages-wrapper last">
                            <div className="title h5-size dropdown-nav-title">Utility Pages</div>
                            <div className="dropdown-nav-content">
                              <ul role="list" className="dropdown-nav last">
                                <li className="dropdown-nav-item"><a href="/utility-pages/style-guide"
                                                                     className="dropdown-nav-link" >Style
                                  guide</a></li>
                                <li className="dropdown-nav-item"><a href="/utility-pages/start-here"
                                                                     className="dropdown-nav-link" >Start
                                  here</a></li>
                                <li className="dropdown-nav-item"><a href="https://jobboardxtemplate.webflow.io/404"
                                                                     className="dropdown-nav-link" >404 Not
                                  found</a></li>
                                <li className="dropdown-nav-item"><a href="https://jobboardxtemplate.webflow.io/401"
                                                                     className="dropdown-nav-link" >Password
                                  protected</a></li>
                                <li className="dropdown-nav-item"><a href="/utility-pages/licenses"
                                                                     className="dropdown-nav-link"
                                                                     >Licenses</a></li>
                                <li className="dropdown-nav-item"><a href="/utility-pages/changelog"
                                                                     className="dropdown-nav-link"
                                                                     >Changelog</a></li>
                                <li className="dropdown-nav-item"><a href="https://brixtemplates.com/more-templates"
                                                                     className="dropdown-nav-link special"
                                                                     >Browse&nbsp;more templates</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-item-wrapper"><a href="/contact" aria-current="page"
                                                      className="nav-link w--current">Contact</a></li>
                  <li className="nav-item-wrapper button-mobile"><a href="/post-a-job"
                                                                    className="button-primary header-button button-mobile w-button">Post
                    a job</a></li>
                </ul>
              </nav>
              <div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="rightSidebar"
                   data-wf-page-link-href-prefix="" className="w-commerce-commercecartwrapper cart"><a href="#"
                                                                                      data-node-type="commerce-cart-open-link"
                                                                                      className="w-commerce-commercecartopenlink cart-button w-inline-block"
                                                                                      role="button"
                                                                                      aria-haspopup="dialog"
                                                                                      aria-label="Open empty cart">
                <div className="w-inline-block">Cart(</div>
                <div
                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                  className="w-commerce-commercecartopenlinkcount cart-quantity">0
                </div>
                <div>)</div>
              </a>
                <div data-node-type="commerce-cart-container-wrapper" style={{display: 'none'}}
                     className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper">
                  <div data-node-type="commerce-cart-container" role="dialog"
                       className="w-commerce-commercecartcontainer cart-container">
                    <div className="w-commerce-commercecartheader cart-header"><h4
                      className="w-commerce-commercecartheading">Your Cart</h4><a href="#"
                                                                                  data-node-type="commerce-cart-close-link"
                                                                                  className="w-commerce-commercecartcloselink cart-close-button w-inline-block"
                                                                                  role="button" aria-label="Close cart">
                      <svg width="16px" height="16px" viewBox="0 0 16 16">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g fill-rule="nonzero" fill="#333333">
                            <polygon
                              points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                          </g>
                        </g>
                      </svg>
                    </a></div>
                    <div className="w-commerce-commercecartformwrapper">
                      <form data-node-type="commerce-cart-form" style={{display: 'none'}}
                            className="w-commerce-commercecartform">
                        <script type="text/x-wf-template"
                                id="wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cf4">%3Cdiv%20class%3D%22w-commerce-commercecartitem%20cart-item%22%3E%3Cdiv%20class%3D%22order-item-wrapper%22%3E%3Ca%20data-wf-bindings%3D%22%255B%257B%2522dataWHref%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522detailPage%2522%252C%2522params%2522%253A%255B%252260c77302fcfa2b3546595f77%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_slug_%2522%252C%2522collectionSlugMap%2522%253A%257B%252260ca9ae43057a400827cb8cf%2522%253A%2522blog-category%2522%252C%2522COMMERCE_CART_COLLECTION_ID%2522%253A%2522cart%2522%252C%252260c79fc399566b2556cdbbe5%2522%253A%2522job%2522%252C%252260c77302fcfa2b3546595f77%2522%253A%2522product%2522%252C%252260c7aaad32a2db43af6692e8%2522%253A%2522job-level-category%2522%252C%252260c7a4d437554c2b6db53ab0%2522%253A%2522company%2522%252C%252260ca9a7de600cf236801bd7a%2522%253A%2522blog%2522%252C%252260c7ab25dfe73c2572eff4d3%2522%253A%2522job-department-category%2522%252C%252260c77302fcfa2b0814595f79%2522%253A%2522category%2522%252C%252260c7aa3037554c2dabb56593%2522%253A%2522job-location-category%2522%252C%252260c77302fcfa2ba664595f78%2522%253A%2522sku%2522%252C%2522COMMERCE_ORDER_USER_ITEMS_COLLECTION_ID%2522%253A%2522userItems%2522%257D%257D%257D%255D%22%20href%3D%22%23%22%20class%3D%22image-wrapper%20order-item-image%20w-inline-block%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20image%20order-item-image%20w-dyn-bind-empty%22%2F%3E%3C%2Fa%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%20order-item-content%22%3E%3Ca%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%252C%257B%2522dataWHref%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522detailPage%2522%252C%2522params%2522%253A%255B%252260c77302fcfa2b3546595f77%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_slug_%2522%252C%2522collectionSlugMap%2522%253A%257B%252260ca9ae43057a400827cb8cf%2522%253A%2522blog-category%2522%252C%2522COMMERCE_CART_COLLECTION_ID%2522%253A%2522cart%2522%252C%252260c79fc399566b2556cdbbe5%2522%253A%2522job%2522%252C%252260c77302fcfa2b3546595f77%2522%253A%2522product%2522%252C%252260c7aaad32a2db43af6692e8%2522%253A%2522job-level-category%2522%252C%252260c7a4d437554c2b6db53ab0%2522%253A%2522company%2522%252C%252260ca9a7de600cf236801bd7a%2522%253A%2522blog%2522%252C%252260c7ab25dfe73c2572eff4d3%2522%253A%2522job-department-category%2522%252C%252260c77302fcfa2b0814595f79%2522%253A%2522category%2522%252C%252260c7aa3037554c2dabb56593%2522%253A%2522job-location-category%2522%252C%252260c77302fcfa2ba664595f78%2522%253A%2522sku%2522%252C%2522COMMERCE_ORDER_USER_ITEMS_COLLECTION_ID%2522%253A%2522userItems%2522%257D%257D%257D%255D%22%20href%3D%22%23%22%20class%3D%22title%20order-item-title%20w-dyn-bind-empty%22%3E%3C%2Fa%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22order-item-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cfa%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522order-item-result%2520w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cfa%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22order-item-result%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Ca%20href%3D%22%23%22%20role%3D%22%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22cart-item-remove-button%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3Cinput%20type%3D%22number%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartquantity%20input%20cart-item-quantity%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E
                        </script>
                        <div className="w-commerce-commercecartlist cart-list"
                             data-wf-collection="database.commerceOrder.userItems"
                             data-wf-template-id="wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cf4"></div>
                        <div className="w-commerce-commercecartfooter cart-footer">
                          <div aria-atomic="false"
                               className="w-commerce-commercecartlineitem cart-line-item">
                            <div>Subtotal</div>
                            <div
                              data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                              className="w-commerce-commercecartordervalue card-subtotal"></div>
                          </div>
                          <div>
                            <div data-node-type="commerce-cart-quick-checkout-actions" style={{display: 'none'}}><a
                              role="button"  aria-haspopup="dialog" aria-label="Apple Pay"
                              data-node-type="commerce-cart-apple-pay-button"
                              style={{
                                backgroundImage: '-webkit-named-image(apple-pay-logo-white)',
                                backgroundSize: '100% 50%',
                                backgroundPosition: '50% 50%',
                                backgroundRepeat: 'no-repeat'
                              }}
                              className="w-commerce-commercecartapplepaybutton apple-pay">
                              <div></div>
                            </a><a role="button"  aria-haspopup="dialog"
                                   data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none'}}
                                   className="w-commerce-commercecartquickcheckoutbutton">
                              <svg className="w-commerce-commercequickcheckoutgoogleicon"
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="16" height="16" viewBox="0 0 16 16">
                                <defs>
                                  <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon>
                                  <polygon id="google-mark-c"
                                           points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon>
                                </defs>
                                <g fill="none">
                                  <path fill="#4285F4"
                                        d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path>
                                  <path fill="#34A853"
                                        d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path>
                                  <g transform="translate(0 4)">
                                    <mask id="google-mark-b" fill="#fff">
                                      <use ></use>
                                    </mask>
                                    <path fill="#FBBC04"
                                          d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                          mask="url(#google-mark-b)"></path>
                                  </g>
                                  <mask id="google-mark-d" fill="#fff">
                                    <use ></use>
                                  </mask>
                                  <path fill="#EA4335"
                                        d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                        mask="url(#google-mark-d)"></path>
                                </g>
                              </svg>
                              <svg className="w-commerce-commercequickcheckoutmicrosofticon"
                                   xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <g fill="none" fill-rule="evenodd">
                                  <polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon>
                                  <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon>
                                  <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon>
                                  <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon>
                                </g>
                              </svg>
                              <div>Pay with browser.</div>
                            </a></div>
                            <a href="/checkout" data-node-type="cart-checkout-button"
                               className="w-commerce-commercecartcheckoutbutton button-primary"
                               data-loading-text="Hang Tight...">Continue to Checkout</a></div>
                        </div>
                      </form>
                      <div className="w-commerce-commercecartemptystate empty-state cart-empty">
                        <div>No items found.</div>
                        <a href="/pricing" className="button-primary cart-empty w-button">Post a featured job</a></div>
                      <div style={{display: 'none'}} data-node-type="commerce-cart-error"
                           className="w-commerce-commercecarterrorstate error-message">
                        <div className="w-cart-error-msg"
                             data-w-cart-quantity-error="Product is not available in this quantity."
                             data-w-cart-general-error="Something went wrong when adding this item to the cart."
                             data-w-cart-checkout-error="Checkout is disabled on this site."
                             data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                             data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product
                          is not available in this quantity.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="split-content header-left"><a href="/post-a-job"
                                                          className="button-primary header-button w-button">Post a
              job</a>
              <div className="menu-button w-nav-button" aria-label="menu"
                   role="button"  aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                   aria-expanded="false">
                <div className="header-menu-button-icon-wrapper">
                  <div className="icon-wrapper">
                    <div className="header-menu-button-icon-top"></div>
                    <div className="header-menu-button-icon-medium"></div>
                    <div className="header-menu-button-icon-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
      <div className="section contact">
        <div className="container-default w-container">
          <div className="contact-wrapper">
            <div data-w-id="5eb8afa4-0867-cc29-e3a1-5e75afe61b93"
                 style={{
                 transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  opacity: 1,
                   transformStyle: 'preserve-3d',
                   }}
                 className="split-content contact-content"><h1 className="title contact">Contact us</h1><p
              className="paragraph contact">Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolrer Fringilla
              nunc, amet vitae senectus. A consequat dui.</p>
              <div className="w-layout-grid contact-links-grid contact_info"><a href="mailto:contact@jobboard.com"
                                                                   className="contact-link w-inline-block">
                <div className="image-wrapper contact-link-icon"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cbbc4aa973900cdf914163_icon-1-contact-link-job-board-x-template.svg"
                  alt="Email Icon - Job Board X Webflow Template" className="image contact-link-icon"
                  style={{
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                   transformStyle: 'preserve-3d'
                   }}/>
                </div>
                <div className="contact-link-text"
                     style={{
                     transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                       color: 'rgb(23, 23, 40)'
                }}>contact@jobboard.com
                </div>
              </a><a href="tel:(415)897-0427" className="contact-link w-inline-block">
                <div className="image-wrapper contact-link-icon"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cbbc49251ca777f5189fc4_icon-2-contact-link-job-board-x-template.svg"
                  alt="Phone Icon - Job Board X Webflow Template" className="image contact-link-icon"/></div>
                <div className="contact-link-text">(415) 897 - 0427</div>
              </a></div>
            </div>
            <div data-w-id="d9e7bd72-1393-3ed7-0a24-ddae12739772"
                 style={{
                   transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                   opacity: 1,
                   transformStyle: 'preserve-3d'
                 }}
                 className="card contact">
              <div className="contact-form-block w-form">
                <form id="wf-form-contact-form" name="wf-form-Contact-Form" data-name="Contact Form" method="get"
                      className="contact-form" data-wf-page-id="60cba25caeadec0a7d26a5f5"
                      data-wf-element-id="894364e9-ad05-235f-e774-8569b654abfc" aria-label="Contact Form">
                  <div className="input-wrapper"><label htmlFor="Name-2">Name</label><input type="text"
                                                                                            className="input w-input"
                                                                                            name="Name"
                                                                                            data-name="Name"
                                                                                            placeholder="What’s your name?"
                                                                                            id="name"/></div>
                  <div className="input-wrapper"><label htmlFor="Email-3">Email Address</label><input type="email"
                                                                                                      className="input w-input"
                                                                                                      name="Email"
                                                                                                      data-name="Email"
                                                                                                      placeholder="What’s your email?"
                                                                                                      id="email"/></div>
                  <div className="input-wrapper"><label htmlFor="Phone">Phone</label><input type="tel"
                                                                                            className="input w-input"
                                                                                            name="Phone"
                                                                                            data-name="Phone"
                                                                                            placeholder="What’s your phone?"
                                                                                            id="phone"/>
                  </div>
                  <div className="input-wrapper"><label htmlFor="Phone-2">Subject</label><input type="text"
                                                                                                className="input w-input"
                                                                                                name="Subject"
                                                                                                data-name="Subject"
                                                                                                placeholder="Ex. Support"
                                                                                                id="subject"/></div>
                  <div id="w-node-_854f56bc-39d6-b330-e72c-5d9c62d8ce32-7d26a5f5" className="input-wrapper"><label
                    htmlFor="Message">Message</label><textarea placeholder="Please write your message..."
                                                               id="message" name="Message"
                                                               data-name="Message"
                                                               className="text-area contact-form-message w-input"></textarea>
                  </div>
                  <input type="submit" value="Submit message" data-wait="Please wait..."
                         id="w-node-_894364e9-ad05-235f-e774-8569b654ac03-7d26a5f5"
                         className="button-primary contact-form-button w-button"/></form>
                <div className="success-message w-form-done" role="region"
                     aria-label="Contact Form success">
                  <div>Your message has been submitted. <br/>We will get back to you within 24-48 hours.</div>
                </div>
                <div className="error-message w-form-fail" role="region"
                     aria-label="Contact Form failure">
                  <div>Oops! Something went wrong.</div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="986386d0-a759-ddd1-d27d-2a9ce9b144f4"
               style={{
                 transform: 'translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                opacity: 1,
                 transformStyle: 'preserve-3d'
                 }}
               className="contact-email-links-wrapper"><h2 className="title contact-email-links">You can also email us
            directly</h2>
            <div className="w-layout-grid contact-email-links-grid"><a href="mailto:support@jobboard.com"
                                                                       className="card contact-email-link w-inline-block">
              <div className="card-contact-email-link-main-content">
                <div className="image-wrapper card-contact-email-link"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cbbc4a33940a598a2f7589_icon-1-contact-email-links-job-board-x-template.svg"
                  alt="Support - Job Board X Webflow Template" className="image card-contact-email-link"/></div>
                <div className="card-contact-email-link-content"><h3
                  className="title h5-size card-contact-email-link">Support</h3>
                  <div className="contact-email-link-text">support@jobboard.com</div>
                </div>
              </div>
            </a><a href="mailto:featured@jobboard.com" className="card contact-email-link w-inline-block">
              <div className="card-contact-email-link-main-content">
                <div className="image-wrapper card-contact-email-link"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cbbc4ae7d0807142534dc6_icon-2-contact-email-links-job-board-x-template.svg"
                  alt="Email Icon - Job Board X Webflow Template" className="image card-contact-email-link"/></div>
                <div className="card-contact-email-link-content"><h3
                  className="title h5-size card-contact-email-link">Featured jobs</h3>
                  <div className="contact-email-link-text">featured@jobboard.com</div>
                </div>
              </div>
            </a><a href="mailto:partners@jobboard.com" className="card contact-email-link w-inline-block">
              <div className="card-contact-email-link-main-content">
                <div className="image-wrapper card-contact-email-link"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cbbc4ac53ff508f91f5a78_icon-3-contact-email-links-job-board-x-template.svg"
                  alt="Buildings - Job Board X Webflow Template" className="image card-contact-email-link"/></div>
                <div className="card-contact-email-link-content"><h3
                  className="title h5-size card-contact-email-link">Partnerships</h3>
                  <div className="contact-email-link-text">partners@jobboard.com</div>
                </div>
              </div>
            </a></div>
          </div>
        </div>
        <div className="bg contact"></div>
      </div>
      <div className="section faqs">
        <div data-w-id="8dc9a564-9c11-e20d-2719-fab47fd6930f"
             style={{
               transform: 'translate3d(0px,20px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
               opacity: 1,
               transformStyle: 'preserve-3d'
             }}
             className="container-small-560px faqs"><h2 className="title faqs">Frequently Asked Questions</h2><p
          className="paragraph faqs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolrer Fringilla nunc,
          amet vitae senectus.</p></div>
        <div className="container-medium-890px">
          <div data-w-id="50728a46-a82b-d369-ace2-ce9f6ec0dc72"
               style={{
                 transform: 'translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                 opacity: 1,
                 transformStyle: 'preserve-3d'
               }}
               className="faqs-wrapper">
            <div className="card faq">
              <div className="faq-content-top">
                <div className="faq-arrow-wrapper">
                  <div className="faq-arrow-line-1"></div>
                  <div className="faq-arrow-line-2"></div>
                </div>
                <h3 className="title faq">How can I post a free job opening?</h3></div>
              <div className="faq-content-bottom"
                   style={{
                     transform: 'translate3d(0px, 150%, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                     transformStyle: 'preserve-3d',
                     height: '0px',
                     opacity: 1,
                     display: 'none'
                   }}>
                <div className="space faq-space"></div>
                <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis arcu
                  nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam magna
                  elementum condimentum commodo. <a href="#">Ut sed feugiat</a> sem in pharetra viverra.</p></div>
            </div>
            <div className="card faq">
              <div className="faq-content-top">
                <div className="faq-arrow-wrapper">
                  <div className="faq-arrow-line-1"></div>
                  <div className="faq-arrow-line-2"></div>
                </div>
                <h3 className="title faq">What is the cost to post a featured job opening?</h3></div>
              <div className="faq-content-bottom"
                   style={{
                     transform: 'translate3d(0px, 150%, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                     transformStyle: 'preserve-3d',
                     height: '0px',
                     opacity: 1,
                     display: 'none'
                   }}>
                <div className="space faq-space"></div>
                <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis arcu
                  nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam magna
                  elementum condimentum commodo. <a href="#">Ut sed feugiat</a> sem in pharetra viverra.</p></div>
            </div>
            <div className="card faq">
              <div className="faq-content-top">
                <div className="faq-arrow-wrapper">
                  <div className="faq-arrow-line-1"></div>
                  <div className="faq-arrow-line-2"></div>
                </div>
                <h3 className="title faq">Are there bulk discounts for many job openings?</h3></div>
              <div className="faq-content-bottom"
                   style={{
                     transform: 'translate3d(0px, 150%, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                     transformStyle: 'preserve-3d',
                     height: '0px',
                     opacity: 1,
                     display: 'none'
                   }}>
                <div className="space faq-space"></div>
                <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis arcu
                  nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam magna
                  elementum condimentum commodo. <a href="#">Ut sed feugiat</a> sem in pharetra viverra.</p></div>
            </div>
            <div className="card faq">
              <div className="faq-content-top">
                <div className="faq-arrow-wrapper">
                  <div className="faq-arrow-line-1"></div>
                  <div className="faq-arrow-line-2"></div>
                </div>
                <h3 className="title faq">How long does it take to get my job post approved?</h3></div>
              <div className="faq-content-bottom"
                   style={{
                     transform: 'translate3d(0px, 150%, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                     transformStyle: 'preserve-3d',
                     height: '0px',
                     opacity: 1,
                     display: 'none'
                   }}>
                <div className="space faq-space"></div>
                <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis arcu
                  nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam magna
                  elementum condimentum commodo. <a href="#">Ut sed feugiat</a> sem in pharetra viverra.</p></div>
            </div>
            <div className="card faq">
              <div className="faq-content-top">
                <div className="faq-arrow-wrapper">
                  <div className="faq-arrow-line-1"></div>
                  <div className="faq-arrow-line-2"></div>
                </div>
                <h3 className="title faq">Do you offer discounts for non-profits?</h3></div>
              <div className="faq-content-bottom"
                   style={{
                     transform: 'translate3d(0px, 150%, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                     transformStyle: 'preserve-3d',
                     height: '0px',
                     opacity: 1,
                     display: 'none'
                   }}>
                <div className="space faq-space"></div>
                <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis arcu
                  nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam magna
                  elementum condimentum commodo. <a href="#">Ut sed feugiat</a> sem in pharetra viverra.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
