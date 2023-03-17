import React, {FC} from 'react';
import './jobCard.scss'

interface Interface { }

const JobCard: FC<Partial<Interface>> = () => {
  return (
    <div className='job_card'>
      <div className="job_card_container">
        <div className='job_card_container_left_info'>
          <span className='job_card_container_left_info_logo'>
            <img src="/images/company_logo.svg" alt="Company Logo"/>
          </span>
          <div className='job_card_container_left_info_company_info'>
            <span className='job_card_container_left_info_company_info_name'>
              Backend Software Engineer
            </span>
            <span className='job_card_container_left_info_company_info_description'>
              Workflow
            </span>
          </div>
        </div>
        <div className='job_card_container_right_info'>
          <div className="job_card_container_right_info_company_info">
            <span className='job_card_container_right_info_company_info_subtitle'>
              <img src="/images/location_transparent.svg" alt="Location"/>
              <span>Location</span>
            </span>
            <span className='job_card_container_right_info_company_info_types'>
              Remote
            </span>
          </div>
          <div className="job_card_container_right_info_company_info">
            <span className='job_card_container_right_info_company_info_subtitle'>
              <img src="/images/job_level_transparent.svg" alt="Level"/>
              <span>Level</span>
            </span>
            <span className='job_card_container_right_info_company_info_types'>
              Senior
            </span>
          </div>
          <div className="job_card_container_right_info_company_info">
            <span className='job_card_container_right_info_company_info_subtitle'>
              <img src="/images/department_transparent.svg" alt="Department"/>
              <span>Department</span>
            </span>
            <span className='job_card_container_right_info_company_info_types'>
              Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
