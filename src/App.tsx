import React, {FC} from 'react';
import Header from "./pages/header";
import Main from "./pages/main";
import Footer from "./pages/footer";
import Subscribe from "./pages/subscribe";
import JobPostCars from "./pages/jobPostCards";
import MainSearch from "./pages/home/mainSearch";
import JobCard from "./elements/jobCard";
import JobPage from "./pages/jobPage";
import JobApply from "./pages/jobApply/jobApply";

import './App.css'

const App: FC<any> = () => {
  return (
    <>
      <Header />
      <JobApply />
      <JobPage />
      <Main />
      <MainSearch />
      <JobPostCars />
      <div className='jobs-grid'>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
      </div>
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
    </>
  );
};

export default App
