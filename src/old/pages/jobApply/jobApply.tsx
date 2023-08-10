import React, {FC} from 'react';
import './jobAppliy.scss'

interface Interface {
}

const JobApply: FC<Partial<Interface>> = () => {
  return (
    <div className='container-default'>
    <div className="post-job-tabs-content">
      <div data-w-tab="Free Job" className="post-job-tab-pane w-tab-pane w--tab-active"
           id="w-tabs-0-data-w-pane-0"
           role="tabpanel" aria-labelledby="free-job"
           style={{opacity: '1', transition: 'opacity 300ms ease 0s'}}>
        <div className="post-job-wrapper">
          <div className="split-content post-job-sidebar">
            <div className="post-job-step-area-1">
              <div className="post-job-step-wrapper _1">
                <div className="image-wrapper post-job-step"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461a2ab22bb749f85e2_icon-1-post-job-job-board-x-template.svg"
                  alt="User Icon - Job Board X Webflow Template" className="image post-job-step"/>
                </div>
                <div className="post-job-step-content"><h2 className="title h3-size post-job-step">1.
                  Job poster
                  information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet,
                  consectetur
                  adipiscing elit. Placerat amet ac.</p></div>
              </div>
            </div>
            <div className="post-job-step-area-2">
              <div className="post-job-step-wrapper _2">
                <div className="image-wrapper post-job-step"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461658abe8577ce601c_icon-2-post-job-job-board-x-template.svg"
                  alt="Info Icon - Job Board X Webflow Template" className="image post-job-step"/>
                </div>
                <div className="post-job-step-content"><h2 className="title h3-size post-job-step">2.
                  Job
                  information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet,
                  consectetur
                  adipiscing elit. Placerat amet ac.</p></div>
              </div>
            </div>
            <div className="post-job-step-area-3">
              <div className="post-job-step-wrapper _3">
                <div className="image-wrapper post-job-step"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461d9a62897715838ba_icon-3-post-job-job-board-x-template.svg"
                  alt="Building - Job Board X Webflow Template" className="image post-job-step"/>
                </div>
                <div className="post-job-step-content"><h2 className="title h3-size post-job-step">3.
                  Company
                  information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet,
                  consectetur
                  adipiscing elit. Placerat amet ac.</p></div>
              </div>
            </div>
          </div>
          <div className="post-job-form-block w-form">
            <form id="wf-form-Free-Job-Form" name="wf-form-Free-Job-Form" data-name="Free Job Form"
                  method="get"
                  className="post-job-form" aria-label="Free Job Form">
              <div className="card post-job-form-card">
                <div className="w-layout-grid card-post-job-form-grid">
                  <div className="input-wrapper"><label htmlFor="name">Full name</label><input
                    type="text"
                    className="input w-input"

                    name="name"
                    data-name="Name"
                    placeholder="What’s your name?"
                    id="name"/></div>
                  <div className="input-wrapper"><label htmlFor="Email-3">Email Address</label><input
                    type="email"
                    className="input w-input"

                    name="Email"
                    data-name="Email"
                    placeholder="What’s your email?"
                    id="email"/></div>
                </div>
                <div className="divider card-post-job-form"></div>
                <div className="w-layout-grid card-post-job-form-grid">
                  <div id="w-node-eaaa6ab0-1f72-1bc0-5cff-6ec6e169a002-2c03c510"
                       className="input-wrapper"><label
                    htmlFor="Job-Title">Job title<span
                    className="accent-secondary-5">*</span>
                  </label>
                    <input type="text"
                           className="input w-input"

                           name="Job-Title"
                           data-name="Job Title"
                           placeholder="Enter Job Title"
                           id="job-title"
                    />
                  </div>
                  <div className="input-wrapper"><label htmlFor="Job-Department-2">Job department<span
                    className="accent-secondary-5">*</span></label><input type="text"
                                                                          className="input w-input"
                                                                          name="Job-Department"
                                                                          data-name="Job Department"
                                                                          placeholder="Ex. Development"
                                                                          id="Job-Department"/>
                  </div>
                  <div className="input-wrapper"><label htmlFor="Job-Type-2">Job type<span
                    className="accent-secondary-5">*</span></label><input type="text"
                                                                          className="input w-input"
                                                                          name="Job-Type"
                                                                          data-name="Job Type"
                                                                          placeholder="Ex. Remote"
                                                                          id="Job-Type"/></div>
                  <div className="input-wrapper"><label htmlFor="Job-Location">Job location<span
                    className="accent-secondary-5">*</span></label><input type="text"
                                                                          className="input w-input"
                                                                          name="Job-Location"
                                                                          data-name="Job Location"
                                                                          placeholder="San Francisco"
                                                                          id="job-location"
                  /></div>
                  <div className="input-wrapper"><label htmlFor="Job-Salary-2">Job
                    salary</label><input type="number"
                                         className="input w-input"

                                         name="Job-Salary"
                                         data-name="Job Salary"
                                         placeholder="Annual Salary in USD"
                                         id="job-salary"/>
                  </div>
                  <label id="w-node-_9ee32253-8f66-9dd0-8e15-7989155233eb-2c03c510"
                         className="w-checkbox checkbox-field">
                    <div
                      className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                    <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox"
                           style={{
                             opacity: '0', position: 'absolute', zIndex: '-1'
                           }}/><span className="checkbox-label w-form-label"
                  >Checkbox</span>
                    <div className="checkbox-text-wrapper">
                      <div className="checkbox-title">Show salary?</div>
                      <div className="checkbox-text">If you prefer, the job post salary can also
                        be kept private.
                      </div>
                    </div>
                  </label>
                  <div id="w-node-_88c28e3f-d57c-49c0-f060-8896dc8b776d-2c03c510"
                       className="input-wrapper"><label
                    htmlFor="Job-Description">Job description<span
                    className="accent-secondary-5">*</span></label><textarea
                    placeholder="Write your job description here. Please be as detailed as possible and include requirements, responsibilities, benefits, and any other relevant information."
                    id="job-description" name="Job-Description" data-name="Job Description"
                    className="text-area w-input"></textarea></div>
                </div>
                <div className="divider card-post-job-form"></div>
                <div className="w-layout-grid card-post-job-form-grid">
                  <div className="input-wrapper"><label htmlFor="Company-Name-2">Company name<span
                    className="accent-secondary-5">*</span></label><input type="text"
                                                                          className="input w-input"
                                                                          name="Company-Name"
                                                                          data-name="Company Name"
                                                                          placeholder="What’s the company name?"
                                                                          id="company-name"/></div>
                  <div className="input-wrapper"><label htmlFor="Company-Website">Company website<span
                    className="accent-secondary-5">*</span></label><input type="text"
                                                                          className="input w-input"
                                                                          name="Company-Website"
                                                                          data-name="Company Website"
                                                                          placeholder="https://company.com"
                                                                          id="company-website"/>
                  </div>
                  <div className="input-wrapper"><label htmlFor="Company-Industry">Company
                    industry<span
                      className="accent-secondary-5">*</span></label><input type="text"
                                                                            className="input w-input"
                                                                            name="Company-Industry"
                                                                            data-name="Company Industry"
                                                                            placeholder="What’s your company industry?"
                                                                            id="company-industry"/>
                  </div>
                  <div className="input-wrapper"><label htmlFor="Facebook-Page">Facebook
                    Page</label><input type="text"
                                       className="input w-input"

                                       name="Facebook-Page"
                                       data-name="Facebook Page"
                                       placeholder="https://facebook.com"
                                       id="facebook-page"/>
                  </div>
                  <div className="input-wrapper"><label htmlFor="twitter-profile-2">Twitter
                    profile</label><input
                    type="text" className="input w-input" name="twitter-profile"
                    data-name="twitter profile" placeholder="https://twitter.com"
                    id="twitter-profile"/></div>
                  <div className="input-wrapper"><label htmlFor="Instagram-Profile-2">Instagram
                    profile</label><input
                    type="text" className="input w-input" name="Instagram-Profile"
                    data-name="Instagram Profile" placeholder="https://instagram.com"
                    id="instagram-profile"/></div>
                  <div id="w-node-a1348987-d3be-f62b-af3e-cc3cc8a8cd52-2c03c510"
                       className="input-wrapper"><label
                    htmlFor="Linkedin-Page-2">Linkedin page</label><input type="text"
                                                                          className="input w-input"
                                                                          name="Linkedin-Page"
                                                                          data-name="Linkedin Page"
                                                                          placeholder="https://linkedin.com"
                                                                          id="linkedin-page"/></div>
                  <div className="input-wrapper"><label htmlFor="Company-Logo-2">Company
                    logo</label><input type="text"
                                       className="input file-upload w-input"

                                       name="Company-Logo"
                                       data-name="Company Logo"
                                       placeholder="Upload logo"
                                       id="company-logo"/>
                    <p className="paragraph file-upload-details">Company logo should be a PNG or JPG
                      file of 500 x 500
                      pixels</p></div>
                  <div className="input-wrapper"><label htmlFor="Company-Cover-2">Company
                    cover</label><input
                    type="text" className="input file-upload w-input" name="Company-Cover"
                    data-name="Company Cover" placeholder="Upload cover" id="company-cover"/><p
                    className="paragraph file-upload-details">Company cover should be a PNG or JPG
                    file of 984 x 194
                    pixels</p></div>
                  <div id="w-node-_096a541a-c36e-3a9e-342d-289c676859f8-2c03c510"
                       className="input-wrapper"><label
                    htmlFor="Company-description">Company description<span
                    className="accent-secondary-5">*</span></label><textarea
                    data-name="Company description"
                    id="company-description"
                    name="Company-description"
                    placeholder="Write your company description here. Please describe what your company does, how long it had been operating, and any other relevant information. Please write up to 1200 characters."
                    className="text-area w-input"></textarea>
                  </div>
                </div>
              </div>
              <input type="submit" value="Submit for approval" data-wait="Please wait..."
                     className="button-primary post-job-form-button w-button"/></form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobApply;
