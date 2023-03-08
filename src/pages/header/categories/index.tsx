import React, {FC} from 'react';
import './index.scss'

interface Interface {}

const Categories: FC<Partial<Interface>> = () => {
  return (
    <div className='navbar_categories'>
      <div className='navbar_categories_location'>
        <img src="/images/navbarCategoriesLocationIcon.svg" className='navbar_categories_location_icon' alt=""/>
        <span className='navbar_categories_location_title'>Location</span>
        <span className='navbar_categories_location_field'>New York</span>
        <span className='navbar_categories_location_field'>Armenia</span>
        <span className='navbar_categories_location_field'>Remote</span>
      </div>

      <div className='navbar_categories_location'>
        <img src="/images/navbarCategoriesJobLevelIcon.svg" className='navbar_categories_location_icon' alt=""/>
        <span className='navbar_categories_location_title'>Job Level</span>
        <span className='navbar_categories_location_field'>Inter</span>
        <span className='navbar_categories_location_field'>Junior</span>
        <span className='navbar_categories_location_field'>Mid</span>
        <span className='navbar_categories_location_field'>Senior</span>
      </div>

      <div className='navbar_categories_location'>
        <img src="/images/navbarCategoriesDepartmentIcon.svg" className='navbar_categories_location_icon' alt=""/>
        <span className='navbar_categories_location_title'>Department</span>
        <span className='navbar_categories_location_field'>Support</span>
        <span className='navbar_categories_location_field'>Bigness</span>
        <span className='navbar_categories_location_field'>Marketing</span>
      </div>


      {/*<div className='navbar_categories_job_level'></div>*/}
      {/*<div className='navbar_categories_department'></div>*/}
    </div>
  );
};

export default Categories;
