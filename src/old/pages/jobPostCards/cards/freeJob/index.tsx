import React from 'react';
import './freeJob.scss'
import {SuccessButton} from "../../../../elements";
const FreeJob = () => {
  return (
    <div className='free_job_cards'>
      <div className='free_job_cards_content'>
        <div className="free_job_cards_content_info">
          <div className="free_job_cards_content_info_title">
            Post a featured job
          </div>
          <div className="free_job_cards_content_info_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit venenatis, vulputate tristique fringilla ut. Vitae pulvina.
          </div>
        </div>
        <div className="free_job_cards_content_btn">
          <SuccessButton
            cls='btn-primary'
            title='Post a featured job'
          />
        </div>
      </div>
    </div>
  );
};

export default FreeJob;
