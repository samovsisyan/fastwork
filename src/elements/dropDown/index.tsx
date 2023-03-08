import React, {FC} from 'react';
import { Dropdown, Modal } from 'react-bootstrap'
import './index.scss'
import './index.scss'

interface Interface {
  mainCls: string
  cls: string
  title: string
  component: any
}

const DropDown: FC<Partial<Interface>> = (props) => {
  const {mainCls, cls, title, component} = props
  return (
    <div>
      <Dropdown className={`status-dropdown ${mainCls}`}>
        <Dropdown.Toggle variant="success" className={`row-status-btn ${cls}`}>{title}</Dropdown.Toggle>
        <Dropdown.Menu className='status-dropdown-menu top-end'>
              {component && component}
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
};

export default DropDown;
