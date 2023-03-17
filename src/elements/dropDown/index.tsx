import React, {FC, useState, useRef, useEffect } from 'react';
import { Dropdown, Modal } from 'react-bootstrap'
import './dropDown.scss'

// interface Interface {
//   mainCls: string
//   cls: string
//   title: string
//   component: any
// }
//
// const DropDown: FC<Partial<Interface>> = (props) => {
//   const {mainCls, cls, title, component} = props
//   return (
//     <div>
//       <Dropdown className={`status-dropdown ${mainCls}`}>
//         <Dropdown.Toggle variant="success" className={`row-status-btn ${cls}`}>{title}</Dropdown.Toggle>
//         <Dropdown.Menu className='status-dropdown-menu top-end'>
//               {component && component}
//         </Dropdown.Menu>
//       </Dropdown>
//
//     </div>
//   );
// };
//
//
interface Interface {
  mainCls: string
  cls: string
  title: string
  component: any
}

const DropDown: FC<Partial<Interface>> = (props) => {
  const {mainCls, cls, title, component} = props
  const [showDropdown, setShowDropdown] = useState(true);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 100); // Set the delay time in milliseconds
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`main_dropdown ${mainCls}`}>
      <Dropdown
        show={showDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Dropdown.Toggle
          variant="secondary"
          id="my-dropdown-toggle"
          className={`row-status-btn ${cls}`}
        >
          {title}&nbsp;&nbsp;&nbsp;<span className='drop_down_arrow'>
          <img src="/images/downArrow.png" alt=""/>
        </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className='status-dropdown-menu top-end'>
          {component && component}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};


export {
  DropDown
}
