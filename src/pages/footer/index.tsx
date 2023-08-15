import React, {FC} from 'react';
import './index.css'


interface Interface {}

const Footer: FC<Partial<Interface>> = () => {
  return (
    <footer className="footer">
      <div className="container-default w-container">
        <div data-w-id="c1f46375-416a-e1fd-79e1-2ba39e96c173" className="footer-content-top"
             style={{opacity: 1,
               transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
               transformStyle: 'preserve-3d'
             }}>
          <div className="footer-main-content"><a href="/home" className="footer-logo-container w-inline-block"><img
            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60da7a7b304772e2954fe9e4_job-board-x-logo-webflow-template-2.svg"
            alt="Job Board X Webflow Template - Logo" className="footer-logo" /></a><p
            className="paragraph footer-main-content-paragraph">Join our newsletter and receive the best job openings of
            the week, right on your inbox.</p></div>
          <div className="footer-newsletter-form-block w-form">
            <form id="wf-form-Footer-Newsletter-Form" name="wf-form-Footer-Newsletter-Form"
                  data-name="Footer Newsletter Form" method="get" className="footer-newsletter-form"
                  data-wf-page-id="63dd82e946cfb23b5cb0bae8" data-wf-element-id="69036606-9e1c-2fce-4e53-b0ad306fcbc5"
                  aria-label="Footer Newsletter Form"><input type="email" className="input footer-newsletter w-input"
                                                             name="email" data-name="Email"
                                                             placeholder="Subscribe to our newsletter" id="email"
                                                              /><input type="submit" value="Subscribe"
                                                                                data-wait="Please wait..."
                                                                                className="button-primary small footer-newsletter w-button" />
            </form>
            <div className="success-message w-form-done" role="region"
                 aria-label="Footer Newsletter Form success">
              <div>Thanks for joining our newsletter.</div>
            </div>
            <div className="error-message w-form-fail" role="region"
                 aria-label="Footer Newsletter Form failure">
              <div>Oops! Something went wrong.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider footer-content-top-divider"></div>
      <div className="container-default w-container">
        <div data-w-id="2d7731e3-3ecf-b08e-09c1-04a83668795d" className="footer-content"
             style={{opacity: 1,
               transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
               transformStyle: 'preserve-3d'
             }}>
          <div className="footer-menu-main-content">
            <div className="footer-menu-wrapper">
              <div className="title footer-menu">Pages</div>
              <div className="footer-menu-content">
                <ul role="list" className="footer-nav w-list-unstyled">
                  <li className="footer-nav-item"><a href="/home" className="footer-nav-link">Home</a></li>
                  <li className="footer-nav-item"><a href="/about" className="footer-nav-link">About us</a></li>
                  <li className="footer-nav-item"><a
                    href="https://jobboardxtemplate.webflow.io/job/backend-software-engineer"
                    className="footer-nav-link">Job post</a></li>
                  <li className="footer-nav-item"><a
                    href="https://jobboardxtemplate.webflow.io/job-location-category/remote"
                    className="footer-nav-link">Job post category</a></li>
                  <li className="footer-nav-item"><a href="/companies" className="footer-nav-link">Companies</a></li>
                  <li className="footer-nav-item"><a href="https://jobboardxtemplate.webflow.io/company/webflow"
                                                     className="footer-nav-link">Single company</a></li>
                </ul>
                <ul role="list" className="footer-nav last w-list-unstyled">
                  <li className="footer-nav-item"><a href="/post-a-job" className="footer-nav-link">Post a free job</a>
                  </li>
                  <li className="footer-nav-item"><a href="/pricing" className="footer-nav-link">Post a paid job</a>
                  </li>
                  <li className="footer-nav-item"><a href="/blog" className="footer-nav-link">Blog</a></li>
                  <li className="footer-nav-item"><a
                    href="https://jobboardxtemplate.webflow.io/blog/how-to-easily-collaborate-with-designers-as-a-developer"
                    className="footer-nav-link">Blog post</a></li>
                  <li className="footer-nav-item"><a href="/contact" className="footer-nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-wrapper last">
              <div className="title footer-menu">Utility Pages</div>
              <div className="footer-menu-content">
                <ul role="list" className="footer-nav last w-list-unstyled">
                  <li className="footer-nav-item"><a href="/utility-pages/style-guide" className="footer-nav-link">Style
                    guide</a></li>
                  <li className="footer-nav-item"><a href="/utility-pages/start-here" className="footer-nav-link">Start
                    here</a></li>
                  <li className="footer-nav-item"><a href="https://jobboardxtemplate.webflow.io/404"
                                                     className="footer-nav-link">404 Not found</a></li>
                  <li className="footer-nav-item"><a href="https://jobboardxtemplate.webflow.io/401"
                                                     className="footer-nav-link">Password protected</a></li>
                  <li className="footer-nav-item"><a href="/utility-pages/licenses"
                                                     className="footer-nav-link">Licenses</a></li>
                  <li className="footer-nav-item"><a href="/utility-pages/changelog"
                                                     className="footer-nav-link">Changelog</a></li>
                  <li className="footer-nav-item"><a href="https://brixtemplates.com/more-templates"
                                                     className="footer-nav-link special">Browse more templates</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-menu-job-categories-content">
            <div className="footer-menu-wrapper">
              <div className="title footer-menu">Department</div>
              <div className="footer-menu-content">
                <div className="w-dyn-list">
                  <div role="list" className="footer-nav last w-dyn-items">
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-department-category/support" className="footer-nav-link">Support</a></div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-department-category/business" className="footer-nav-link">Business</a></div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-department-category/marketing" className="footer-nav-link">Marketing</a></div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-department-category/design" className="footer-nav-link">Design</a></div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-department-category/development" className="footer-nav-link">Development</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-menu-wrapper">
              <div className="title footer-menu">Level</div>
              <div className="footer-menu-content">
                <div className="w-dyn-list">
                  <div role="list" className="footer-nav last w-dyn-items">
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a href="/job-level-category/junior"
                                                                                   className="footer-nav-link">Junior</a>
                    </div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a href="/job-level-category/senior"
                                                                                   className="footer-nav-link">Senior</a>
                    </div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a href="/job-level-category/executive"
                                                                                   className="footer-nav-link">Executive</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-menu-wrapper last">
              <div className="title footer-menu">Location</div>
              <div className="footer-menu-content">
                <div className="w-dyn-list">
                  <div role="list" className="footer-nav last w-dyn-items">
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-location-category/austin-tx" className="footer-nav-link">Austin, TX</a></div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-location-category/miami-fl" className="footer-nav-link">Miami, FL</a></div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a
                      href="/job-location-category/new-york-ny" className="footer-nav-link">New York, NY</a></div>
                    <div role="listitem" className="footer-nav-item w-dyn-item"><a href="/job-location-category/remote"
                                                                                   className="footer-nav-link">Remote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider footer-content-bottom-divider"></div>
      <div className="container-default w-container">
        <div data-w-id="da3c1876-1f27-b0aa-1431-bb4267681389" className="footer-content-bottom"
             style={{opacity: 1,
               transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
               transformStyle: 'preserve-3d'
             }}>
          <div className="footer-small-print">© Copyright Job Board X - Designed by <a href="https://brixtemplates.com/"
                                                                                       target="_blank">BRIX
            Templates</a> - Powered by <a href="https://webflow.com/" target="_blank">Webflow</a></div>
          <div className="footer-social-media-wrapper"><a href="https://www.facebook.com/" target="_blank"
                                                          className="image-wrapper social-media-link facebook w-inline-block"></a><a
            href="https://twitter.com/" target="_blank"
            className="image-wrapper social-media-link twitter w-inline-block"></a><a href="https://www.instagram.com/"
                                                                                      target="_blank"
                                                                                      className="image-wrapper social-media-link instagram w-inline-block"></a><a
            href="https://www.linkedin.com/" target="_blank"
            className="image-wrapper social-media-link linkedin w-inline-block"></a><a href="https://www.youtube.com/"
                                                                                       target="_blank"
                                                                                       className="image-wrapper social-media-link youtube w-inline-block"></a><a
            href="https://www.whatsapp.com/" target="_blank"
            className="image-wrapper social-media-link whatsapp w-inline-block"></a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
