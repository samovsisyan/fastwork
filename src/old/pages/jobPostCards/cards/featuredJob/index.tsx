import React from 'react';
import './featuredJob.scss'
import {SuccessButton} from "../../../../elements";

const FeaturedJob = () => {
  return (
    <div className='featured_job_cards'>
      <div className='featured_job_cards_content'>
        <div className="featured_job_cards_content_info">
          <div className="featured_job_cards_content_info_title">
            Post a featured job
          </div>
          <div className="featured_job_cards_content_info_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit venenatis, vulputate tristique fringilla ut. Vitae pulvina.
          </div>
        </div>
        <div className="featured_job_cards_content_btn">
          <SuccessButton
            cls='outline-primary'
            title='Post a featured job'
          />
        </div>
        <div className='bg cta-shape-1'/>
        <div className='bg cta-shape-2'/>
        <div className='bg cta-shape-3'/>
      </div>
    </div>
  );
};

export default FeaturedJob;
