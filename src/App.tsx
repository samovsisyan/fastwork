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

import About from "./pages/about";
import Contact from "./pages/contact";
import './App.css'
import './main.css'
import './index.css'
import Home from "./pages/home";
import Companies from "./pages/companies";
import JobCategory from "./pages/jobCategory";
import CompanySingle from "./pages/companySingle";
import Blog from "./pages/blog";
import BlogPost from "./pages/blogPost";
const App: FC<any> = () => {
  return (
    <>
      <BlogPost />
      <Blog />
      <CompanySingle />
      <JobCategory />
      <Companies />
      <Home />
      <Contact />
      <About />
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
