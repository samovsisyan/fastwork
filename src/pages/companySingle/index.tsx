import React, {FC} from 'react';
import './index.css'
import CompanyJobs from "./jobs";
import CompanyAbout from "./about";
import CompanyPerksAndBenefits from "./perksAndBenefits";


interface Interface {}

const CompanySingle: FC<Partial<Interface>> = () => {
  return (
    <div className="section company">
      <div className="container-default w-container">
        <div className="backlink-wrapper"><a href="/companies" className="backlink"><span
          className="backlink-arrow"></span>&nbsp;&nbsp;&nbsp;Back to companies</a></div>
        <div data-w-id="dd895fd4-7865-6962-cee0-3a705bd5c5dc"
             style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", opacity: 1, transformStyle: "preserve-3d"}}
             className="card company">
          <div data-w-id="20db60cc-5039-bf50-045f-0cadf330e220" className="image-wrapper company-cover"><img
            src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template.jpg"
            loading="eager" alt="Webflow" sizes="(max-width: 767px) 93vw, (max-width: 1439px) 95vw, 984px"
            srcSet="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template-p-500.jpeg 500w, https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template-p-800.jpeg 800w, https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template.jpg 1964w"
            className="image company-cover"
            style={{willChange: "transform", transform: "translate3d(0px, -0.0036px, 0px) scale3d(1.00002, 1.00002, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}/>
          </div>
          <div className="company-content">
            <div className="content-top company">
              <div className="image-wrapper company"><img
                src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg"
                alt="Webflow" className="image company"/></div>
              <div className="company-content-top-wrapper">
                <div className="split-content content-top-company-left"><h1
                  className="title h2-size company">Webflow</h1>
                  <div className="company-top-content-about-wrapper">
                    <div className="company-about-details-wrapper"><img
                      src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c92f6a47c4a32090c952cd_icon-1-company-about-job-board-x-template.svg"
                      alt="Location Icon - Job Board X Webflow Template" className="image company-about-details-icon"/>
                      <div>San Francisco</div></div>
                    <div className="company-about-details-wrapper last"><img
                      src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c92f6aa77b760b050020b7_icon-2-company-about-job-board-x-template.svg"
                      alt="User Icon - Job Board X Webflow Template" className="image company-about-details-icon"/>
                      <div>100 - 1,000</div></div>
                  </div>
                </div>
                <div className="split-content content-top-company-right"><a
                  data-w-id="18e4c4a1-e2a5-df93-57f4-c9a8d529c360" href="https://webflow.com/" target="_blank"
                  className="card-link-wrapper weight-medium w-inline-block">
                  <div className="card-link">Visit Website</div>
                  <div className="card-link-arrow">
                    <div className="card-link-arrow-1"></div>
                    <div className="card-link-arrow-2"></div>
                    <div className="card-link-arrow-3"></div>
                  </div>
                </a></div>
              </div>
            </div>
            <div data-duration-in="300" data-duration-out="100" data-current="Company Jobs" data-easing="ease"
                 className="company-tabs w-tabs">
              <div className="company-tabs-menu w-tab-menu" role="tablist"><a data-w-tab="Company Jobs"
                                                                              className="company-tab-link first w-inline-block w-tab-link w--current"
                                                                              id="w-tabs-0-data-w-tab-0"
                                                                              href="#w-tabs-0-data-w-pane-0" role="tab"
                                                                              aria-controls="w-tabs-0-data-w-pane-0"
                                                                              aria-selected="true">
                <div>Company jobs</div>
              </a><a data-w-tab="About Company" className="company-tab-link w-inline-block w-tab-link" 
                     id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab"
                     aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
                <div>About the company</div>
              </a><a data-w-tab="Company Perks" className="company-tab-link w-inline-block w-tab-link" 
                     id="w-tabs-0-data-w-tab-2" href="#w-tabs-0-data-w-pane-2" role="tab"
                     aria-controls="w-tabs-0-data-w-pane-2" aria-selected="false">
                <div>Company perks &amp; benefits</div>
              </a></div>
              <CompanyJobs />
              <CompanyAbout />
              <CompanyPerksAndBenefits />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySingle;
