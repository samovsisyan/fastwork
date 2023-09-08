import React, {FC} from 'react';
import {
  Home,
  About,
  Hero,
  Blog,
  Contact
} from './pages'
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import './App.css'
import './main.css'
import './index.css'
interface Interface {}
const App: FC<Partial<Interface>> = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
                <Route path="/about" element={<About />} /> {/* 👈 Renders at /app/ */}
                <Route path="/hero" element={<Hero />} /> {/* 👈 Renders at /app/ */}
                <Route path="/blog" element={<Blog />} /> {/* 👈 Renders at /app/ */}
                <Route path="/contact" element={<Contact />} /> {/* 👈 Renders at /app/ */}
            </Routes>
        </BrowserRouter>
      {/*<Header />*/}
      {/*<Hero />*/}
      {/*<PostFreeJob />*/}
      {/*<BlogPost />*/}
      {/*<Blog />*/}
      {/*<CompanySingle />*/}
      {/*<JobCategory />*/}
      {/*<Companies />*/}

      {/*<Contact />*/}
      {/*<About />*/}
      {/*<JobPost />*/}
      {/*<JobItem />*/}
      {/*<Pricing />*/}
      {/*<JobCredit />*/}
      {/*<Footer />*/}








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
