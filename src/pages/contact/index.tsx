import React, {FC} from 'react';
import './index.css'
import {Wrapper} from "../../elements";


interface Interface {
}

const Contact: FC<Partial<Interface>> = () => {
  return (
    <Wrapper>
      <div style={{opacity: 1}} className="page-wrapper">
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
                                                                                                        id="email"/>
                    </div>
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
                  <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis
                    arcu
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
                  <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis
                    arcu
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
                  <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis
                    arcu
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
                  <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis
                    arcu
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
                  <p className="paragraph faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a mattis
                    arcu
                    nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam magna
                    elementum condimentum commodo. <a href="#">Ut sed feugiat</a> sem in pharetra viverra.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
