import React, {FC} from 'react';
import './header.scss'
import {SuccessButton, DropDown} from "../../elements";
import Categories from "./categories";


interface Interface {}

const Header: FC<Partial<Interface>> = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src="/images/logo.svg" alt=""/>
      </div>

      <div className='navbar'>
        <div className='tab'>Home</div>
        <div className='tab'>About</div>
        {/*<div className='tab'>*/}
          {/*<MyDropdown*/}
          {/*  title='Categories'*/}
          {/*  mainCls='tab_categories_drop_down'*/}
          {/*  component={<Categories />}*/}
          {/*/>*/}
          {/*<DropDown*/}
          {/*  title='Categories'*/}
          {/*  mainCls='tab_categories_drop_down'*/}
          {/*  component={<Categories />}*/}
          {/*/>*/}

          {/*<img src="/images/downArrow.png" className='tab_categories_icon' alt="Down arrow"/>*/}
        {/*</div>*/}
        <div className='tab'>Contact</div>
        <div className='tab'>Cart</div>
      </div>
      <SuccessButton
        cls='btn-primary header_post_job_btn'
        title={'Post a job'}
      />
    </div>
  );
};

export default Header;
