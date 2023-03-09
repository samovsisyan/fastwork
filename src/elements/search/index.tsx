import React, {FC} from 'react';
import {Input} from "../inputs";
import {SuccessButton} from "../buttons";
import './index.scss'

interface Interface {}

const Search: FC<Partial<Interface>> = () => {
  return (
    <div className='search'>
      <div className='search_content'>
        <div className="search_content_input">
          <Input type='text' placeholder='Subscribe to our newsletter' />
        </div>
        <div className="search_content_button">
          <SuccessButton
            cls='btn-primary search_btn'
            title={'Subscribe'}
          />
        </div>

      </div>
    </div>
  );
};

export default Search;
