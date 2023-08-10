import React from 'react';
import FeaturedJob from "./cards/featuredJob";
import FreeJob from "./cards/freeJob";
import './jobPostCars.scss'

const JobPostCars = () => {
  return (
    <div className='job_post_cards'>
      <FeaturedJob />
      <FreeJob />
    </div>
  );
};

export default JobPostCars;
