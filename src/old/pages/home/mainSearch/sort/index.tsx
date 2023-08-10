import React, {FC} from 'react';
import './sort.scss'

interface Interface {}

const Sort: FC<Partial<Interface>> = () => {
  return (
    <div className='search_sort'>
      <div className="search_sort_container">
        <a href="src/old/pages/home/mainSearch/sort/index#" className='search_sort_container_sort_by'>Austin, TX</a>
        <a href="src/old/pages/home/mainSearch/sort/index#" className='search_sort_container_sort_by'>Miami, FL</a>
        <a href="src/old/pages/home/mainSearch/sort/index#" className='search_sort_container_sort_by'>New York, NY</a>
        <a href="src/old/pages/home/mainSearch/sort/index#" className='search_sort_container_sort_by'>Remote</a>
      </div>
    </div>
  );
};

export default Sort;
