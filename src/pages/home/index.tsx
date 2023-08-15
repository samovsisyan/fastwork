import React, {FC} from 'react';
import './index.css'


interface Interface {}

const Home: FC<Partial<Interface>> = () => {
  return (
    <div style={{opacity: 1}} className="page-wrapper">
      <div className="section home">
        <div data-w-id="79cc5e11-23b1-da9f-4f65-26174000ce2d"
             style={{
             transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: 1,
               transformStyle: 'preserve-3d'
              }}
             className="container-medium-736px home-hero"><h1 data-w-id="7c40314c-5dc6-b15a-84ae-c36852bb1073"
                                                              className="title home-hero">Job Board for Developers,
          Designers, and Marketers</h1><p className="paragraph home-hero">Jobs is a curated job board of the best jobs
          for developers, designers and marketers in the tech industry.</p></div>
        <div data-w-id="651950f6-e58e-81e6-31bd-2aa5b9f5c2c4"
             style={{
               transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
               opacity: 1,
               transformStyle: 'preserve-3d'
             }}             className="container-default w-container">
          <div className="card home-jobs-filters">
            <form action="/search" className="home-jobs-filter-search w-form"><input type="search"
                                                                                     className="input home-jobs-filter-search-input w-input"
                                                                                     name="query"
                                                                                     placeholder="Search for jobs"
                                                                                     id="search"/><input
              type="submit" value="Search" className="button-primary small home-jobs-filter-search-button w-button" />
            </form>
            <div className="home-jobs-filters-wrapper">
              <div data-hover="true" data-delay="0" className="jobs-filters-dropdown w-dropdown">
                <div className="jobs-filters-dropdown-button w-dropdown-toggle" id="w-dropdown-toggle-2"
                     aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button"
                     ><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e859a1e14a2779c3bfb1_icon-1-dropdown-job-categories-job-board-x-template.svg"
                  alt="Location Icon - Job Board X Webflow Template" className="image jobs-filters-dropdown-icon"/>
                  <div className="dropdown-job-category-filter-text">Location</div>
                  <img
                    src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cccd6ae643dd6c588e715c_icon-dropdown-job-board-x-template.svg"
                    alt="Chevron - Job Board X Webflow Template" className="image dropdown-icon"/></div>
                <nav className="jobs-filters-dropdown-list w-dropdown-list"
                     style={{display: 'none', opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', height: '0px'}}
                     id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                  <div className="card jobs-filters-dropdown-links">
                    <div className="w-dyn-list">
                      <div role="list" className="jobs-filters-dropdown-links-grid w-dyn-items">
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/austin-tx" className="dropdown-nav-link" >Austin,
                          TX</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/miami-fl" className="dropdown-nav-link" >Miami,
                          FL</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/new-york-ny" className="dropdown-nav-link" >New York,
                          NY</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-location-category/remote" className="dropdown-nav-link" >Remote</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div data-hover="true" data-delay="0" className="jobs-filters-dropdown w-dropdown">
                <div className="jobs-filters-dropdown-button w-dropdown-toggle" id="w-dropdown-toggle-3"
                     aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false" role="button"
                     ><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e859d99a538e3a65f4dc_icon-2-dropdown-job-categories-job-board-x-template.svg"
                  alt="Graph Icon - Job Board X Webflow Template" className="image jobs-filters-dropdown-icon"/>
                  <div className="dropdown-job-category-filter-text">Job Level</div>
                  <img
                    src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cccd6ae643dd6c588e715c_icon-dropdown-job-board-x-template.svg"
                    alt="Chevron - Job Board X Webflow Template" className="image dropdown-icon"/></div>
                <nav className="jobs-filters-dropdown-list w-dropdown-list"
                     style={{display: 'none', opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', height: '0px'}}
                     id="w-dropdown-list-3" aria-labelledby="w-dropdown-toggle-3">
                  <div className="card jobs-filters-dropdown-links">
                    <div className="w-dyn-list">
                      <div role="list" className="jobs-filters-dropdown-links-grid w-dyn-items">
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-level-category/junior" className="dropdown-nav-link" >Junior</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-level-category/senior" className="dropdown-nav-link" >Senior</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-level-category/executive" className="dropdown-nav-link" >Executive</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div data-hover="true" data-delay="0" className="jobs-filters-dropdown w-dropdown">
                <div className="jobs-filters-dropdown-button last w-dropdown-toggle" id="w-dropdown-toggle-4"
                     aria-controls="w-dropdown-list-4" aria-haspopup="menu" aria-expanded="false" role="button"
                     ><img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e85a808c1866139f449f_icon-3-dropdown-job-categories-job-board-x-template.svg"
                  alt="Portfolio Icon - Job Board X Webflow Template" className="image jobs-filters-dropdown-icon"/>
                  <div className="dropdown-job-category-filter-text">Department</div>
                  <img
                    src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cccd6ae643dd6c588e715c_icon-dropdown-job-board-x-template.svg"
                    alt="Chevron - Job Board X Webflow Template" className="image dropdown-icon"/></div>
                <nav className="jobs-filters-dropdown-list w-dropdown-list"
                     style={{display: 'none', opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', height: '0px'}}
                     id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4">
                  <div className="card jobs-filters-dropdown-links">
                    <div className="w-dyn-list">
                      <div role="list" className="jobs-filters-dropdown-links-grid w-dyn-items">
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/support" className="dropdown-nav-link" >Support</a>
                        </div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/business" className="dropdown-nav-link"
                          >Business</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/marketing" className="dropdown-nav-link"
                          >Marketing</a></div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/design" className="dropdown-nav-link" >Design</a>
                        </div>
                        <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                          href="/job-department-category/development" className="dropdown-nav-link"
                          >Development</a></div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="companies-wrapper">
            <div className="companies-text">Trusted by</div>
            <div className="companies-logos-wrapper"><img
              src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7953dd67500d83106d4e4_logo-1-companies-job-board-x-template.svg"
              alt="Google Logo - Job Board X Webflow Template" className="image company-logo first"/><img
              src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7953d4c740c4267c11835_logo-2-companies-job-board-x-template.svg"
              alt="Facebook Logo - Job Board X Webflow Template" className="image company-logo"/><img
              src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7953d2ea38b36e457d0f3_logo-3-companies-job-board-x-template.svg"
              alt="YouTube - Job Board X Webflow Template" className="image company-logo"/><img
              src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7953d6e6f7e9cab91ca14_logo-4-companies-job-board-x-template.svg"
              alt="Pinterest Logo - Job Board X Webflow Template" className="image company-logo"/><img
              src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7953fbc4cb557c773d44e_logo-5-companies-job-board-x-template.svg"
              alt="Webflow Logo - Job Board X Webflow Template" className="image company-logo last"/></div>
          </div>
          <div className="job-board-wrapper">
            <div className="split-content job-board-content">
              <div className="featured-jobs-wrapper"><h2 className="title featured-jobs">Featured jobs</h2>
                <div className="w-dyn-list">
                  <div role="list" className="featured-jobs-grid w-dyn-items">
                    <div role="listitem" className="featured-job-item w-dyn-item"><a
                      href="/job/backend-software-engineer" className="card job featured w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg"
                          alt="Backend Software Engineer" className="image card-job"
                          style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}/>
                        </div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job-featured">Backend
                          Software Engineer</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link featured">Webflow</div>
                            <div className="card-link-arrow"
                                 style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                              <div className="card-link-arrow-1 featured"></div>
                              <div className="card-link-arrow-2 featured"></div>
                              <div className="card-link-arrow-3 featured"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Remote</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Senior</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Development</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="featured-job-item w-dyn-item"><a href="/job/executive-sales-manager"
                                                                                     className="card job featured w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg"
                          alt="Executive Sales Manager" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3
                          className="title h6-size card-job-featured">Executive Sales Manager</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link featured">Webflow</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1 featured"></div>
                              <div className="card-link-arrow-2 featured"></div>
                              <div className="card-link-arrow-3 featured"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Remote</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Executive</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Development</div>
                        </div>
                      </div>
                    </a></div>
                  </div>
                </div>
              </div>
              <div className="jobs-wrapper"><h2 className="title jobs">Latest jobs</h2>
                <div className="w-dyn-list">
                  <div role="list" className="jobs-grid w-dyn-items">
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/digital-marketing-specialist"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg"
                          alt="Digital Marketing Specialist" className="image card-job"
                          style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}/>
                        </div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job"
                                                                    style={{color: 'rgb(23, 23, 40)'}}>Digital Marketing
                          Specialist</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Webflow</div>
                            <div className="card-link-arrow"
                                 style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Remote</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Junior</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Marketing</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/mobile-product-manager"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c7ea645b46e9836da40c_icon-4-company-job-board-x-template.svg"
                          alt="Mobile Product Manager" className="image card-job"
                          style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}/>
                        </div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job"
                                                                    style={{color: 'rgb(23, 23, 40)'}}>Mobile Product
                          Manager</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Google</div>
                            <div className="card-link-arrow"
                                 style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">New York, NY</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Senior</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Design</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/head-of-product-design"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c77c645b466dd56da3b0_icon-3-company-job-board-x-template.svg"
                          alt="Head of Product Design" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">Head of Product
                          Design</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Youtube</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Miami, FL</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Executive</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Design</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/customer-support-agent"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c77c645b466dd56da3b0_icon-3-company-job-board-x-template.svg"
                          alt="Customer Support Agent" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">Customer Support
                          Agent</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Youtube</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Remote</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Junior</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Business</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/react-native-developer"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c84897b7ea2081168fe5_icon-7-company-job-board-x-template.svg"
                          alt="React Native Developer" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">React Native
                          Developer</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Facebook</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Austin, TX</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Senior</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Development</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/video-marketing-producer"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c888b67921277e81392e_icon-8-company-job-board-x-template.svg"
                          alt="Video Marketing Producer" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">Video Marketing
                          Producer</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Webflow</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Remote</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Senior</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Marketing</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/jr-frontend-engineer"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c7ea645b46e9836da40c_icon-4-company-job-board-x-template.svg"
                          alt="Jr Frontend Engineer" className="image card-job"
                          style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}/>
                        </div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job"
                                                                    style={{color: 'rgb(23, 23, 40)'}}>Jr Frontend
                          Engineer</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Google</div>
                            <div className="card-link-arrow"
                                 style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Austin, TX</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Junior</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Development</div>
                        </div>
                      </div>
                    </a></div>
                    <div role="listitem" className="job-item w-dyn-item"><a href="/job/head-of-product-marketing"
                                                                            className="card job w-inline-block">
                      <div className="split-content card-job-left">
                        <div className="image-wrapper card-job"><img
                          src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c829d7c3af7b0d61137c_icon-6-company-job-board-x-template.svg"
                          alt="Head of Product Marketing" className="image card-job"/></div>
                        <div className="card-job-title-wrapper"><h3 className="title h6-size card-job">Head of Product
                          Marketing</h3>
                          <div className="card-link-wrapper">
                            <div className="card-link">Twitter</div>
                            <div className="card-link-arrow">
                              <div className="card-link-arrow-1"></div>
                              <div className="card-link-arrow-2"></div>
                              <div className="card-link-arrow-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="split-content card-job-right">
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc5172557266c1162fc4_icon-1-job-categories-job-board-x-template.svg"
                            alt="Location Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Location</div></div>
                          <div className="card-job-category-text">Remote</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51b6792171f081ab50_icon-2-job-categories-job-board-x-template.svg"
                            alt="Graph Icon - Job Board X Webflow Template" className="card-job-category-title-icon"/>
                            <div>Level</div></div>
                          <div className="card-job-category-text">Executive</div>
                        </div>
                        <div className="card-job-category-wrapper">
                          <div className="card-job-category-title-wrapper"><img
                            src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7dc51c1dfba2485657961_icon-3-job-categories-job-board-x-template.svg"
                            alt="Portfolio Icon - Job Board X Webflow Template"
                            className="card-job-category-title-icon"/>
                            <div>Department</div></div>
                          <div className="card-job-category-text">Marketing</div>
                        </div>
                      </div>
                    </a></div>
                  </div>
                  <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination"><a
                    href="?ea8d9d2b_page=2" aria-label="Next Page"
                    className="w-pagination-next button-secondary pagination">
                    <div className="w-inline-block">Next</div>
                  </a>
                    {/*<link rel="prerender" href="?ea8d9d2b_page=2">*/}
                  </div>
                </div>
              </div>
            </div>
            <div className="split-content job-sidebar">
              <div className="job-sidebar-wrapper">
                <div className="card job-board-post">
                  <div className="card-job-board-post-content">
                    <div className="image-wrapper card-job-board-post-icon"><img
                      src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7ce2fc1dfba6b0c653e97_icon-job-post-job-board-x-template.svg"
                      alt="Job Board X Webflow Template - Webclip" className="image card-job-board-post-icon"/></div>
                    <div className="card-job-board-post-content"><h4 className="title card-job-board-post">Post a job
                      today</h4><p className="paragraph card-job-board-post">Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed.</p>
                      <div className="job-board-post-links-wrapper"><a href="/pricing"
                                                                       className="button-primary small card-job-board-post w-button">Post
                        a featured job</a><a href="/post-a-job" className="card-job-board-post-free-link">or post a free
                        job</a></div>
                    </div>
                  </div>
                </div>
                <div className="card job-board-featured-companies">
                  <div className="card-job-board-featured-companies-content"><h4
                    className="title featured-companies">Featured companies</h4>
                    <div className="w-dyn-list">
                      <div role="list" className="featured-companies-grid w-dyn-items">
                        <div role="listitem" className="featured-company-item w-dyn-item"><a href="/company/facebook"
                                                                                             className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c84897b7ea2081168fe5_icon-7-company-job-board-x-template.svg"
                              alt="Facebook" className="image featured-company"/></div>
                            <h5 className="title featured-company">Facebook</h5></div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"></div>
                            <div className="featured-company-arrow-1"></div>
                            <div className="featured-company-arrow-3"></div>
                          </div>
                        </a></div>
                        <div role="listitem" className="featured-company-item w-dyn-item"><a href="/company/twitter"
                                                                                             className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c829d7c3af7b0d61137c_icon-6-company-job-board-x-template.svg"
                              alt="Twitter" className="image featured-company"/></div>
                            <h5 className="title featured-company">Twitter</h5></div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"></div>
                            <div className="featured-company-arrow-1"></div>
                            <div className="featured-company-arrow-3"></div>
                          </div>
                        </a></div>
                        <div role="listitem" className="featured-company-item w-dyn-item"><a href="/company/google"
                                                                                             className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c7ea645b46e9836da40c_icon-4-company-job-board-x-template.svg"
                              alt="Google" className="image featured-company"/></div>
                            <h5 className="title featured-company">Google</h5></div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"></div>
                            <div className="featured-company-arrow-1"></div>
                            <div className="featured-company-arrow-3"></div>
                          </div>
                        </a></div>
                        <div role="listitem" className="featured-company-item w-dyn-item"><a href="/company/youtube"
                                                                                             className="featured-company-wrapper w-inline-block">
                          <div className="featured-company-content">
                            <div className="image-wrapper featured-company"><img
                              src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c77c645b466dd56da3b0_icon-3-company-job-board-x-template.svg"
                              alt="Youtube" className="image featured-company"/></div>
                            <h5 className="title featured-company">Youtube</h5></div>
                          <div className="featured-company-arrow-wrapper">
                            <div className="featured-company-arrow-2"></div>
                            <div className="featured-company-arrow-1"></div>
                            <div className="featured-company-arrow-3"></div>
                          </div>
                        </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg home-hero"></div>
      </div>
    </div>
  );
};

export default Home;
