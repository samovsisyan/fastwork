import React, {FC}  from 'react';
import {Header} from "../../pages";
import {Footer} from "../../pages";
interface Interface {
  children: any;
}
const Wrapper: FC<Partial<Interface>>  = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Wrapper;