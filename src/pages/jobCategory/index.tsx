import React, {FC} from 'react';
import './index.css'


interface Interface {}

const JobCategory: FC<Partial<Interface>> = () => {
  return (
    <div className="section job-category-hero">
      <div className="container-default w-container">
        <div className="backlink-wrapper"><a href="/home" className="backlink"><span
          className="backlink-arrow"></span>&nbsp;&nbsp;&nbsp;Back to all jobs</a></div>
        <div data-w-id="ba0536e4-410e-0b95-b624-ea767d98589e"
             style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: "preserve-3d"}}
             className="job-category-main-content">
          <div className="job-category-title-wrapper"><img
            src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7ad8638121dcd6eb1f916_icon-location-job-board-x-template.svg"
            alt="Remote" className="image job-category"/>
            <div className="job-category-title"><h1 className="title h2-size job-category">Remote</h1>
              <div className="title h2-size job-category">jobs</div>
            </div></div>
          <p className="paragraph job-category">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
        </div>
        <div data-w-id="58df99bd-7c10-e931-6f62-1742fd38fcf5"
             style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 1, transformStyle: "preserve-3d"}}
             className="card job-category-filters">
          <form action="/search" className="job-category-filter-search w-form"><input type="search"
                                                                                      className="input job-category-filter-search-input w-input"
                                                                                      name="query"
                                                                                      placeholder="Search for jobs"
                                                                                      id="search" /><input
            type="submit" value="Search" className="button-primary small job-category-filter-search-button w-button" />
          </form>
          <div className="job-category-filters-wrapper">
            <div data-hover="true" data-delay="0" className="jobs-filters-dropdown job-category-filter w-dropdown">
              <div className="jobs-filters-dropdown-button job-category-filter w-dropdown-toggle"
                   id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false"
                   role="button"><img
                src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60c7e859a1e14a2779c3bfb1_icon-1-dropdown-job-categories-job-board-x-template.svg"
                alt="Location Icon - Job Board X Webflow Template" className="image jobs-filters-dropdown-icon"/>
                <div className="dropdown-job-category-filter-text">Location</div>
                <img
                  src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60cccd6ae643dd6c588e715c_icon-dropdown-job-board-x-template.svg"
                  alt="Chevron - Job Board X Webflow Template" className="image dropdown-icon"
                  style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: 'preserve-3d'}}/>
              </div>
              <nav className="jobs-filters-dropdown-list w-dropdown-list"
                   style={{display: 'none', opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', width: '404px', height: '0px'}}
                   id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                <div className="card jobs-filters-dropdown-links">
                  <div className="w-dyn-list">
                    <div role="list" className="jobs-filters-dropdown-links-grid w-dyn-items">
                      <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                        href="/job-location-category/austin-tx" className="dropdown-nav-link">Austin,
                        TX</a></div>
                      <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                        href="/job-location-category/miami-fl" className="dropdown-nav-link">Miami, FL</a>
                      </div>
                      <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                        href="/job-location-category/new-york-ny" className="dropdown-nav-link">New York,
                        NY</a></div>
                      <div role="listitem" className="jobs-filters-dropdown-link-item w-dyn-item"><a
                        href="/job-location-category/remote" aria-current="page"
                        className="dropdown-nav-link w--current">Remote</a></div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
