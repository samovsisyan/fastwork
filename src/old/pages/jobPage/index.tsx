import React, {FC} from 'react';
import './jobPage.scss'
import {SuccessButton} from "../../elements";


interface Interface {}

const JobPage: FC<Partial<Interface>> = () => {
  return (
      <div className="card job-post">
        <div data-w-id="ebcc2b89-9ed8-8b91-2d0e-6dfaa089b244" className="image-wrapper card-job-post">
          <img
            src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template.jpg"
            alt="Webflow" sizes="(max-width: 767px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 73vw, 847px"
            // srcSet="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template-p-500.jpeg 500w, https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template-p-800.jpeg 800w, https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c8f5679f25ae8635e4f505_image-8-cover-company-job-board-x-template.jpg 1964w"
            className="image card-job-post"
            style={{
              willChange: 'transform',
              transform: 'translate3d(0px, -3.448px, 0px) scale3d(1.01724, 1.01724, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d'
            }} />
        </div>
        <div className="card-job-post-content">
          <div className="card-job-post-content-top">
            <div className="card-job-post-title-wrapper">
              <div className="image-wrapper card-job-post-logo">
                <img
                src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg"
                alt="Backend Software Engineer" className="image card-job-post-logo"/>
              </div>
              <h1 className="title h2-size card-job-post">Backend Software Engineer</h1></div>
            <div className="card-job-post-categories-wrapper">
              <div className="card-job-post-category-wrapper">
                <div className="card-job-post-category-title-wrapper">
                  <img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                  alt="Location Icon - Job Board X Webflow Template" className="card-job-post-category-title-icon" />
                  <div>Location</div></div>
                <div className="card-job-post-category-text">Remote</div>
              </div>
              <div className="card-job-post-category-wrapper">
                <div className="card-job-post-category-title-wrapper"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                  alt="Graph Icon - Job Board X Webflow Template" className="card-job-post-category-title-icon" />
                  <div>Level</div></div>
                <div className="card-job-post-category-text">Senior</div>
              </div>
              <div className="card-job-post-category-wrapper">
                <div className="card-job-post-category-title-wrapper"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                  alt="Portfolio Icon - Job Board X Webflow Template" className="card-job-post-category-title-icon" />
                  <div>Department</div></div>
                <div className="card-job-post-category-text">Development</div>
              </div>
              <div className="card-job-post-category-wrapper">
                <div className="card-job-post-category-title-wrapper"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc517c90080b634e591a_icon-4-job-categories-job-board-x-template.svg"
                  alt="Clock Icon - Job Board X Webflow Template" className="card-job-post-category-title-icon" />
                  <div>Type</div></div>
                <div className="card-job-post-category-text">Full - Time</div>
              </div>
              <div className="card-job-post-category-wrapper">
                <div className="card-job-post-category-title-wrapper"><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51d7c3af8320618b87_icon-5-job-categories-job-board-x-template.svg"
                  alt="Money Icon - Job Board X Webflow Template" className="card-job-post-category-title-icon" />
                  <div>Salary</div></div>
                <div className="card-job-post-category-text">$100,000 USD</div>
              </div>
            </div>
          </div>
          <div className="divider card-job-post-content-divider"></div>
          <div className="card-job-post-content-bottom">
            <div className="job-description-title-wrapper"><h2 className="title h3-size job-description">Job
              Description</h2>
              <div className="job-description-date-wrapper">
                <div className="job-description-date-text">Posted on:&nbsp;</div>
                <div>June 25, 2021</div>
              </div>
            </div>
            <div className="w-richtext"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue
              sagittis erat consectetur est. Blandit blandit nec <a href="src/old/pages/jobPage/index#">mauris pulvinar</a>. Lectus duis amet
              tortor, sit tincidunt. Rhoncus tincidunt imperdiet penatibus vitae risus, vitae. <strong>Blandit
                auctor</strong> justo nisl massa.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              dictum ultrices lacus sodales nunc felis eu, consectetur arcu. Vitae nulla scelerisque id pellentesque
              feugiat vel eu.</p></div>
            <h2 className="title h3-size job-rich-text">Responsibilities</h2>
            <div className="w-richtext"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum
              ultrices lacus sodales nunc felis eu, consectetur arcu. Vitae nulla scelerisque id pellentesque feugiat
              vel eu.</p>
              <ul role="list">
                <li>Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac auctor.</li>
                <li>Adipiscing elit ut aliquam purus sit amet. Viverra suspendisse potenti nullam ac.</li>
                <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
              </ul>
            </div>
            <h2 className="title h3-size job-rich-text">Job Requirements</h2>
            <div className="w-richtext"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum
              ultrices lacus sodales nunc felis eu, consectetur arcu. Vitae nulla scelerisque id pellentesque feugiat
              vel eu.</p>
              <ul role="list">
                <li>Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac auctor.</li>
                <li>Adipiscing elit ut aliquam purus sit amet. Viverra suspendisse potenti nullam ac.</li>
                <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
              </ul>
            </div>
            <SuccessButton
              title='Apply now'
            />
          </div>
        </div>
      </div>
  );
};

export default JobPage;
