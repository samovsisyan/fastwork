import React, {FC} from 'react';
import './index.css'


interface Interface {}

const PostFreeJob: FC<Partial<Interface>> = () => {
  return (
    <div className="section post-job">
      <div data-w-id="123feafa-d91f-7738-55c7-5603506f5ee9"
           style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", opacity: 1, transformStyle: "preserve-3d"}}
           className="container-medium-765px post-job"><h1 className="title post-job">Post a job today</h1><p
        className="paragraph post-job">Ready to post a job for your company? Choose your job type below and fill all the
        job information. In case you are choosing a Paid job, remember you need to buy a paid job credit first.</p>
      </div>
      <div className="container-default w-container">
        <div data-duration-in="300" data-duration-out="100" data-w-id="01d28435-fef9-4862-d614-24ffd416973e"
             style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", opacity: 1, transformStyle: "preserve-3d"}}
             data-current="Free Job" data-easing="ease" className="post-job-tabs w-tabs">
          <div className="post-job-tabs-menu w-tab-menu" role="tablist"><a data-w-tab="Free Job" id="free-job"
                                                                           className="post-job-tab-link w-inline-block w-tab-link"
                                                                           href="#w-tabs-0-data-w-pane-0" role="tab"
                                                                           aria-controls="w-tabs-0-data-w-pane-0"
                                                                           aria-selected="false" >
            <div>Free job</div>
          </a><a data-w-tab="Paid Job" id="paid-job" className="post-job-tab-link w-inline-block w-tab-link w--current"
                 href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="true">
            <div>Paid job</div>
          </a></div>
          <div className="post-job-tabs-content w-tab-content">
            <div data-w-tab="Free Job" className="post-job-tab-pane w-tab-pane" id="w-tabs-0-data-w-pane-0"
                 role="tabpanel" aria-labelledby="free-job" >
              <div className="post-job-wrapper">
                <div className="split-content post-job-sidebar">
                  <div className="post-job-step-area-1">
                    <div className="post-job-step-wrapper _1">
                      <div className="image-wrapper post-job-step"><img
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461a2ab22bb749f85e2_icon-1-post-job-job-board-x-template.svg"
                        alt="User Icon - Job Board X Webflow Template" className="image post-job-step"/></div>
                      <div className="post-job-step-content"><h2 className="title h3-size post-job-step">1. Job poster
                        information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat amet ac.</p></div>
                    </div>
                  </div>
                  <div className="post-job-step-area-2">
                    <div className="post-job-step-wrapper _2">
                      <div className="image-wrapper post-job-step"><img
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461658abe8577ce601c_icon-2-post-job-job-board-x-template.svg"
                        alt="Info Icon - Job Board X Webflow Template" className="image post-job-step"/></div>
                      <div className="post-job-step-content"><h2 className="title h3-size post-job-step">2. Job
                        information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat amet ac.</p></div>
                    </div>
                  </div>
                  <div className="post-job-step-area-3">
                    <div className="post-job-step-wrapper _3">
                      <div className="image-wrapper post-job-step"><img
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461d9a62897715838ba_icon-3-post-job-job-board-x-template.svg"
                        alt="Building - Job Board X Webflow Template" className="image post-job-step"/></div>
                      <div className="post-job-step-content"><h2 className="title h3-size post-job-step">3. Company
                        information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat amet ac.</p></div>
                    </div>
                  </div>
                </div>
                <div className="post-job-form-block w-form">
                  <form id="wf-form-Free-Job-Form" name="wf-form-Free-Job-Form" data-name="Free Job Form" method="get"
                        className="post-job-form" data-wf-page-id="60ca143dde310e3e2c03c510"
                        data-wf-element-id="3ac0706c-cc69-3f77-3395-db52c0cd1ac9" aria-label="Free Job Form">
                    <div className="card post-job-form-card">
                      <div className="w-layout-grid card-post-job-form-grid">
                        <div className="input-wrapper"><label htmlFor="name">Full name</label><input type="text"
                                                                                                     className="input w-input"
                                                                                                     
                                                                                                     name="name"
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
                      </div>
                      <div className="divider card-post-job-form"></div>
                      <div className="w-layout-grid card-post-job-form-grid">
                        <div id="w-node-eaaa6ab0-1f72-1bc0-5cff-6ec6e169a002-2c03c510" className="input-wrapper"><label
                          htmlFor="Job-Title">Job title<span className="accent-secondary-5">*</span></label><input
                          type="text" className="input w-input"  name="Job-Title" data-name="Job Title"
                          placeholder="Enter Job Title" id="job-title" /></div>
                        <div className="input-wrapper"><label htmlFor="Job-Department-2">Job department<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Job-Department"
                                                                                data-name="Job Department"
                                                                                placeholder="Ex. Development"
                                                                                id="Job-Department"/></div>
                        <div className="input-wrapper"><label htmlFor="Job-Type-2">Job type<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Job-Type"
                                                                                data-name="Job Type"
                                                                                placeholder="Ex. Remote" id="Job-Type"/>
                        </div>
                        <div className="input-wrapper"><label htmlFor="Job-Location">Job location<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Job-Location"
                                                                                data-name="Job Location"
                                                                                placeholder="San Francisco"
                                                                                id="job-location" /></div>
                        <div className="input-wrapper"><label htmlFor="Job-Salary-2">Job salary</label><input
                          type="number" className="input w-input"  name="Job-Salary"
                          data-name="Job Salary" placeholder="Annual Salary in USD" id="job-salary"/></div>
                        <label id="w-node-_9ee32253-8f66-9dd0-8e15-7989155233eb-2c03c510"
                               className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                          <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox"
                                 style={{opacity:0, position: "absolute", zIndex: '-1'}}/><span
                            className="checkbox-label w-form-label">Checkbox</span>
                            <div className="checkbox-text-wrapper">
                              <div className="checkbox-title">Show salary?</div>
                              <div className="checkbox-text">If you prefer, the job post salary can also be kept
                                private.
                              </div>
                            </div></label>
                        <div id="w-node-_88c28e3f-d57c-49c0-f060-8896dc8b776d-2c03c510" className="input-wrapper"><label
                          htmlFor="Job-Description">Job description<span className="accent-secondary-5">*</span></label><textarea
                          placeholder="Write your job description here. Please be as detailed as possible and include requirements, responsibilities, benefits, and any other relevant information."
                           id="job-description" name="Job-Description" 
                          data-name="Job Description" className="text-area w-input"></textarea></div>
                      </div>
                      <div className="divider card-post-job-form"></div>
                      <div className="w-layout-grid card-post-job-form-grid">
                        <div className="input-wrapper"><label htmlFor="Company-Name-2">Company name<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Company-Name"
                                                                                data-name="Company Name"
                                                                                placeholder="What’s the company name?"
                                                                                id="company-name" /></div>
                        <div className="input-wrapper"><label htmlFor="Company-Website">Company website<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Company-Website"
                                                                                data-name="Company Website"
                                                                                placeholder="https://company.com"
                                                                                id="company-website" /></div>
                        <div className="input-wrapper"><label htmlFor="Company-Industry">Company industry<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Company-Industry"
                                                                                data-name="Company Industry"
                                                                                placeholder="What’s your company industry?"
                                                                                id="company-industry" /></div>
                        <div className="input-wrapper"><label htmlFor="Facebook-Page">Facebook Page</label><input
                          type="text" className="input w-input"  name="Facebook-Page"
                          data-name="Facebook Page" placeholder="https://facebook.com" id="facebook-page"/></div>
                        <div className="input-wrapper"><label htmlFor="twitter-profile-2">Twitter profile</label><input
                          type="text" className="input w-input"  name="twitter-profile"
                          data-name="twitter profile" placeholder="https://twitter.com" id="twitter-profile"/></div>
                        <div className="input-wrapper"><label htmlFor="Instagram-Profile-2">Instagram
                          profile</label><input type="text" className="input w-input" 
                                                name="Instagram-Profile" data-name="Instagram Profile"
                                                placeholder="https://instagram.com" id="instagram-profile"/></div>
                        <div id="w-node-a1348987-d3be-f62b-af3e-cc3cc8a8cd52-2c03c510" className="input-wrapper"><label
                          htmlFor="Linkedin-Page-2">Linkedin page</label><input type="text" className="input w-input"
                                                                                 name="Linkedin-Page"
                                                                                data-name="Linkedin Page"
                                                                                placeholder="https://linkedin.com"
                                                                                id="linkedin-page"/></div>
                        <div className="input-wrapper"><label htmlFor="Company-Logo-2">Company logo</label><input
                          type="text" className="input file-upload w-input"  name="Company-Logo"
                          data-name="Company Logo" placeholder="Upload logo" id="company-logo"/><p
                          className="paragraph file-upload-details">Company logo should be a PNG or JPG file of 500 x
                          500 pixels</p></div>
                        <div className="input-wrapper"><label htmlFor="Company-Cover-2">Company cover</label><input
                          type="text" className="input file-upload w-input"  name="Company-Cover"
                          data-name="Company Cover" placeholder="Upload cover" id="company-cover"/><p
                          className="paragraph file-upload-details">Company cover should be a PNG or JPG file of 984 x
                          194 pixels</p></div>
                        <div id="w-node-_096a541a-c36e-3a9e-342d-289c676859f8-2c03c510" className="input-wrapper"><label
                          htmlFor="Company-description">Company description<span className="accent-secondary-5">*</span></label><textarea
                          data-name="Company description"  id="company-description"
                          name="Company-description" 
                          placeholder="Write your company description here. Please describe what your company does, how long it had been operating, and any other relevant information. Please write up to 1200 characters."
                          className="text-area w-input"></textarea></div>
                      </div>
                    </div>
                    <input type="submit" value="Submit for approval" data-wait="Please wait..."
                           className="button-primary post-job-form-button w-button"/></form>
                  <div className="card post-job-form-card empty w-form-done"  role="region"
                       aria-label="Free Job Form success">
                    <div className="success-message post-job-form-card">Your free job post will be reviewed and if it
                      meets the requirements, it will be approved by one of our moderators
                    </div>
                  </div>
                  <div className="error-message w-form-fail"  role="region"
                       aria-label="Free Job Form failure">
                    <div>Oops! Something went wrong.</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Paid Job" className="post-job-tab-pane w-tab-pane w--tab-active"
                 id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="paid-job"
                 style={{opacity: 1, transition: "opacity 300ms ease 0s"}}>
              <div className="post-job-wrapper">
                <div className="split-content post-job-sidebar">
                  <div className="post-job-step-area-1">
                    <div className="post-job-step-wrapper _1">
                      <div className="image-wrapper post-job-step"><img
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461a2ab22bb749f85e2_icon-1-post-job-job-board-x-template.svg"
                        alt="User Icon - Job Board X Webflow Template" className="image post-job-step"/></div>
                      <div className="post-job-step-content"><h2 className="title h3-size post-job-step">1. Job poster
                        information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat amet ac.</p></div>
                    </div>
                  </div>
                  <div className="post-job-step-area-2">
                    <div className="post-job-step-wrapper _2">
                      <div className="image-wrapper post-job-step"><img
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461658abe8577ce601c_icon-2-post-job-job-board-x-template.svg"
                        alt="Info Icon - Job Board X Webflow Template" className="image post-job-step"/></div>
                      <div className="post-job-step-content"><h2 className="title h3-size post-job-step">2. Job
                        information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat amet ac.</p></div>
                    </div>
                  </div>
                  <div className="post-job-step-area-3">
                    <div className="post-job-step-wrapper _3">
                      <div className="image-wrapper post-job-step"><img
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461d9a62897715838ba_icon-3-post-job-job-board-x-template.svg"
                        alt="Building - Job Board X Webflow Template" className="image post-job-step"/></div>
                      <div className="post-job-step-content"><h2 className="title h3-size post-job-step">3. Company
                        information</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat amet ac.</p></div>
                    </div>
                  </div>
                  <div className="post-job-step-area-4">
                    <div className="post-job-step-wrapper _4">
                      <div className="image-wrapper post-job-step"><img
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca2461b93f2fa339d16415_icon-4-post-job-job-board-x-template.svg"
                        alt="Premium Icon - Job Board X Webflow Template" className="image post-job-step"/></div>
                      <div className="post-job-step-content"><h2 className="title h3-size post-job-step">4. Featured
                        job</h2><p className="paragraph post-job-step">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Placerat amet ac.</p></div>
                    </div>
                  </div>
                </div>
                <div className="post-job-form-block w-form">
                  <form id="wf-form-Paid-Job-Form" name="wf-form-Paid-Job-Form" data-name="Paid Job Form" method="get"
                        className="post-job-form" data-wf-page-id="60ca143dde310e3e2c03c510"
                        data-wf-element-id="b19b99f0-ce5e-c51a-6c1e-619defa52bc6" aria-label="Paid Job Form">
                    <div className="card post-job-form-card flex-direction-column">
                      <div className="w-layout-grid card-post-job-form-grid">
                        <div className="input-wrapper"><label htmlFor="Name-2">Full name</label><input type="text"
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
                      </div>
                      <div className="divider card-post-job-form"></div>
                      <div className="w-layout-grid card-post-job-form-grid">
                        <div id="w-node-b19b99f0-ce5e-c51a-6c1e-619defa52bd3-2c03c510" className="input-wrapper"><label
                          htmlFor="Job-Title-3">Job title<span className="accent-secondary-5">*</span></label><input
                          type="text" className="input w-input"  name="Job-Title" data-name="Job Title"
                          placeholder="Enter Job Title" id="job-title" /></div>
                        <div className="input-wrapper"><label htmlFor="Job-Department-Pricing">Job department<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                
                                                                                name="Job-Department-Pricing"
                                                                                data-name="Job Department (Pricing)"
                                                                                placeholder="Ex. Development"
                                                                                id="Job-Department-Pricing" />
                        </div>
                        <div className="input-wrapper"><label htmlFor="Job-Type-Pricing">Job type<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Job-Type-Pricing"
                                                                                data-name="Job Type Pricing"
                                                                                placeholder="Ex. Remote"
                                                                                id="Job-Type-Pricing" /></div>
                        <div className="input-wrapper"><label htmlFor="Job-Location-3">Job location<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Job-Location"
                                                                                data-name="Job Location"
                                                                                placeholder="San Francisco"
                                                                                id="job-location" /></div>
                        <div className="input-wrapper"><label htmlFor="Job-Salary-3">Job salary</label><input
                          type="number" className="input w-input"  name="Job-Salary"
                          data-name="Job Salary" placeholder="Annual Salary in USD" id="job-salary"/></div>
                        <label id="w-node-b19b99f0-ce5e-c51a-6c1e-619defa52bf1-2c03c510"
                               className="w-checkbox checkbox-field">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                          <input type="checkbox" id="checkbox" name="checkbox-2" data-name="Checkbox 2"
                                 style={{opacity:0, position: "absolute", zIndex: '-1'}} /><span
                            className="checkbox-label w-form-label" >Checkbox</span>
                            <div className="checkbox-text-wrapper">
                              <div className="checkbox-title">Show salary?</div>
                              <div className="checkbox-text">If you prefer, the job post salary can also be kept
                                private.
                              </div>
                            </div></label>
                        <div id="w-node-b19b99f0-ce5e-c51a-6c1e-619defa52bfa-2c03c510" className="input-wrapper"><label
                          htmlFor="Job-Description-3">Job description<span
                          className="accent-secondary-5">*</span></label><textarea
                          placeholder="Write your job description here. Please be as detailed as possible and include requirements, responsibilities, benefits, and any other relevant information."
                           id="job-description" name="Job-Description" 
                          data-name="Job Description" className="text-area w-input"></textarea></div>
                      </div>
                      <div className="divider card-post-job-form"></div>
                      <div className="w-layout-grid card-post-job-form-grid">
                        <div className="input-wrapper"><label htmlFor="Company-Name-3">Company name<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Company-Name"
                                                                                data-name="Company Name"
                                                                                placeholder="What’s the company name?"
                                                                                id="company-name" /></div>
                        <div className="input-wrapper"><label htmlFor="Company-Website-3">Company website<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Company-Website"
                                                                                data-name="Company Website"
                                                                                placeholder="https://company.com"
                                                                                id="company-website" /></div>
                        <div className="input-wrapper"><label htmlFor="Company-Industry-3">Company industry<span
                          className="accent-secondary-5">*</span></label><input type="text" className="input w-input"
                                                                                 name="Company-Industry"
                                                                                data-name="Company Industry"
                                                                                placeholder="What’s your company industry?"
                                                                                id="company-industry" /></div>
                        <div className="input-wrapper"><label htmlFor="Facebook-Page-3">Facebook Page</label><input
                          type="text" className="input w-input"  name="Facebook-Page"
                          data-name="Facebook Page" placeholder="https://facebook.com" id="facebook-page"/></div>
                        <div className="input-wrapper"><label htmlFor="Twitter-Profile-3">Twitter profile</label><input
                          type="text" className="input w-input"  name="Twitter-Profile"
                          data-name="Twitter Profile" placeholder="https://twitter.com" id="twitter-profile"/></div>
                        <div className="input-wrapper"><label htmlFor="Instagram-Profile-3">Instagram
                          profile</label><input type="text" className="input w-input" 
                                                name="Instagram-Profile" data-name="Instagram Profile"
                                                placeholder="https://instagram.com" id="instagram-profile"/></div>
                        <div id="w-node-b19b99f0-ce5e-c51a-6c1e-619defa52c20-2c03c510" className="input-wrapper"><label
                          htmlFor="Linkedin-Page-3">Linkedin page</label><input type="text" className="input w-input"
                                                                                 name="Linkedin-Page"
                                                                                data-name="Linkedin Page"
                                                                                placeholder="https://linkedin.com"
                                                                                id="linkedin-page"/></div>
                        <div className="input-wrapper"><label htmlFor="Company-Logo-3">Company logo</label><input
                          type="text" className="input file-upload w-input"  name="Company-Logo"
                          data-name="Company Logo" placeholder="Upload logo" id="company-logo" /><p
                          className="paragraph file-upload-details">Company logo should be a PNG or JPG file of 500 x
                          500 pixels</p></div>
                        <div className="input-wrapper"><label htmlFor="Company-Cover-3">Company cover</label><input
                          type="text" className="input file-upload w-input"  name="Company-Cover"
                          data-name="Company Cover" placeholder="Upload cover" id="company-cover" /><p
                          className="paragraph file-upload-details">Company cover should be a PNG or JPG file of 984 x
                          194 pixels</p></div>
                        <div id="w-node-b19b99f0-ce5e-c51a-6c1e-619defa52c30-2c03c510" className="input-wrapper"><label
                          htmlFor="Company-Description-3">Company description<span
                          className="accent-secondary-5">*</span></label><textarea data-name="Company Description"
                                                                                   
                                                                                   id="company-description"
                                                                                   name="Company-Description"
                                                                                   
                                                                                   placeholder="Write your company description here. Please describe what your company does, how long it had been operating, and any other relevant information. Please write up to 1200 characters."
                                                                                   className="text-area w-input"></textarea>
                        </div>
                      </div>
                      <div className="divider card-post-job-form"></div>
                      <div className="order-id-wrapper"><p className="paragraph order-id">If you already purchased a
                        featured job credit, <strong>please insert your order ID below</strong>. If you didn't, you can
                        go to <a href="/pricing">featured jobs page</a> and purchase it.</p>
                        <div className="input-wrapper"><label htmlFor="Order-ID">Order ID</label><input type="text"
                                                                                                        className="input w-input"
                                                                                                        
                                                                                                        name="Order-ID"
                                                                                                        data-name="Order ID"
                                                                                                        placeholder="Insert your order ID "
                                                                                                        id="order-id"
                                                                                                        />
                        </div>
                      </div>
                    </div>
                    <input type="submit" value="Submit for approval" data-wait="Please wait..."
                           className="button-primary post-job-form-button w-button" /></form>
                  <div className="card post-job-form-card empty w-form-done"  role="region"
                       aria-label="Paid Job Form success">
                    <div className="success-message post-job-form-card">Your paid job post will be reviewed and if it
                      meets the requirements, it will be approved by one of our moderators
                    </div>
                  </div>
                  <div className="error-message w-form-fail"  role="region"
                       aria-label="Paid Job Form failure">
                    <div>Oops! Something went wrong.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFreeJob;
