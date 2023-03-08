import React, {FC} from 'react';
import './index.scss'
import {SuccessButton} from "../../elements";


interface Interface {}

const Main: FC<Partial<Interface>> = (props) => {
  const {} = props
  return (
    <div className='main'>
      <div className='main_container'>
        <div className="main_container_title">
          Job Board X Webflow Template
        </div>
        <div className="main_container_description">
          Presenting Job Board X, the ultimate job board Template.
        </div>
        <div className="main_container_buttons">
          <SuccessButton
            cls='btn-primary'
            title={'Buy template'}
          />
          <SuccessButton
            cls='outline-primary'
            title={'Explore pages'}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
