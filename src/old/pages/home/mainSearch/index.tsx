import React, {FC} from 'react';
import Search from "../../../elements/search";
import {DropDown} from "../../../elements";
import Categories from "../../header/categories";
import Sort from "./sort";

import './mainSearch.scss'

interface Interface {}


const MainSearch: FC<Partial<Interface>> = () => {
  return (
    <div className='main_search'>
    <div className='main_search_container'>
      <Search
        placeholder='Search for jobs'
        btnTitle='Search'
      />


      <div className='main_search_sort'>
        <img src="/images/location_transparent.svg" alt="Location"/>
        <DropDown
          title='Categories'
          mainCls='tab_categories_drop_down'
          component={<Sort />}
        />
      </div>
      <div className='main_search_sort'>
        <img src="/images/job_level_transparent.svg" alt="Location"/>
        <DropDown
          title='Categories'
          mainCls='tab_categories_drop_down'
          component={<Sort />}
        />
      </div>
      <div className='main_search_sort'>
        <img src="/images/department_transparent.svg" alt="Location"/>
        <DropDown
          title='Categories'
          mainCls='tab_categories_drop_down'
          component={<Sort />}
        />
      </div>
      </div>

    </div>
  );
};

export default MainSearch;
