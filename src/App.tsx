import React, {FC} from 'react';
import {SuccessButton} from "./elements";
import Header from "./pages/header";
import Main from "./pages/main";
import DropDown from "./elements/dropDown";
import Categories from "./pages/header/categories";
import Search from "./elements/search";
import Footer from "./pages/footer";
import Subscribe from "./pages/subscribe";

const App: FC<any> = () => {
  return (
    <div>
      <Header />
      <Main />
      <Subscribe />
      <Footer />
      {/*<Search />*/}
      {/*<SuccessButton*/}
      {/*  cls='btn-primary'*/}
      {/*  title={'Post a job'}*/}
      {/*/>*/}
      {/*<SuccessButton*/}
      {/*  cls='outline-primary'*/}
      {/*  title={'Buy template'}*/}
      {/*/>*/}
    </div>
  );
};

export default App
