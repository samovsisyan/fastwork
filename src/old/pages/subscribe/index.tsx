import React, {FC} from 'react';
import Search from "../../elements/search";
import './index.scss'

interface Interface {}

const Subscribe: FC<Partial<Interface>> = () => {
  return (
    <div className='subscribe'>
      <div className='subscribe_content'>
        <div className='subscribe_content_information'>
          <div className="subscribe_content_information_logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="subscribe_content_information_description">
            Join our newsletter and receive the best job openings of the week, right on your inbox.
          </div>
        </div>


        <div className='subscribe_content_search'>
          <Search
            placeholder={'Subscribe to our newsletter'}
            btnTitle={'Subscribe'}
            mainCls=''
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
