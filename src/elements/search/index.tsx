import React, {FC} from 'react';
import {Input} from "../inputs";
import {SuccessButton} from "../buttons";
import './index.scss'

interface Interface {
  placeholder: string
  btnTitle: string
  mainCls: string
}

const Search: FC<Partial<Interface>> = (props) => {
  const { placeholder, btnTitle, mainCls } = props
  return (
    <div className={`${mainCls} search`}>
      <div className='search_content'>
        <div className="search_content_input">
          <Input type='text' placeholder={placeholder} />
        </div>
        <div className="search_content_button">
          <SuccessButton
            cls='btn-primary search_btn'
            title={btnTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
