import React, {FC} from 'react';
import './index.css'
import AboutHero from "./hero";
import AboutNatural from "./neutral";
import AboutTestimonials from "./testimonials";


interface Interface {}

const About: FC<Partial<Interface>> = () => {
  return (
    <div style={{opacity: 1}} className="page-wrapper">
      <AboutHero />
      <AboutNatural />
      {/*<AboutTestimonials />*/}
    </div>
  );
};

export default About;
