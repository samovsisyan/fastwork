import React, {FC} from 'react';
import './index.css'
import AboutHero from "./hero";
import AboutNatural from "./neutral";
import AboutTestimonials from "./testimonials";
import {Wrapper} from "../../elements";


interface Interface {}

const About: FC<Partial<Interface>> = () => {
  return (
    <Wrapper>
    <div style={{opacity: 1}} className="page-wrapper">
      <AboutHero />
      <AboutNatural />
      {/*<AboutTestimonials />*/}
    </div>
    </Wrapper>
  );
};

export default About;
