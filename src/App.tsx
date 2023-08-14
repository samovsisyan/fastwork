import React, {FC} from 'react';
// import Header from "./old/pages/header";
// import Main from "./old/pages/main";
// import Footer from "./old/pages/footer";
// import Subscribe from "./old/pages/subscribe";
// import JobPostCars from "./old/pages/jobPostCards";
// import MainSearch from "./old/pages/home/mainSearch";
// import JobCard from "./old/elements/jobCard";
// import JobPage from "./old/pages/jobPost";
// import JobApply from "./old/pages/jobApply/jobApply";

import JobPost from "./pages/jobPost";

import JobItem from "./pages/jobItem";

import Footer from "./pages/footer";
import Pricing from "./pages/pricing";
import JobCredit from "./pages/jobCredit";
import './App.css'
import './main.css'
import './index.css'
const App: FC<any> = () => {
  return (
    <>
      <JobPost />
      <JobItem />
      <Pricing />
      <JobCredit />
      <Footer />
      {/*<Header />*/}
      {/*<JobApply />*/}
      {/*<Index />*/}
      {/*<Main />*/}
      {/*<MainSearch />*/}
      {/*<JobPostCars />*/}
      {/*<div className='jobs-grid'>*/}
      {/*    <JobCard />*/}
      {/*    <JobCard />*/}
      {/*    <JobCard />*/}
      {/*    <JobCard />*/}
      {/*    <JobCard />*/}
      {/*    <JobCard />*/}
      {/*    <JobCard />*/}
      {/*    <JobCard />*/}
      {/*</div>*/}
      {/*<Subscribe />*/}
      {/*<Footer />*/}
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
