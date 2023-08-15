import React, {FC} from 'react';
import './index.css'


interface Interface {}

const AboutNatural: FC<Partial<Interface>> = () => {
  return (
    <div className="section bg-neutral-200">
      <div className="container-default w-container">
        <div className="about-achievements-wrapper">
          <div data-w-id="c394a58e-6c3a-e4e7-3777-90ca9c097053"
               style={{
                 transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                 opacity: 1,
                 transformStyle: 'preserve-3d'
               }}                 className="split-content about-achievements-left"><h2 className="title about-achievements">Our
            numbers</h2><p className="paragraph about-achievements">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Venenatis fames faucibus egestas integer scelerisque. Morbi non viverra arcu arcu luctus in vel.</p><a
            href="/post-a-job" className="button-primary w-button">Post a free job</a></div>
          <div className="split-content about-achievements-right">
            <div data-w-id="62fdbda5-10f1-7275-7754-fa8a239a921d"
                 style={{
                   transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                   opacity: 1,
                   transformStyle: 'preserve-3d'
                 }}                   className="about-achievements-cards-left">
              <div className="card about-achievement">
                <div className="card-about-achievement-number">20,583<span className="accent-primary-1">+</span></div>
                <div className="card-about-achievement-text">Job posted</div>
              </div>
              <div className="card about-achievement last">
                <div className="card-about-achievement-number">581<span className="accent-primary-1">+</span></div>
                <div className="card-about-achievement-text">Verified companies</div>
              </div>
            </div>
            <div data-w-id="9e85d719-9ce1-976b-759f-c01df1e5a4b8"
                 style={{
                   transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                   opacity: 1,
                   transformStyle: 'preserve-3d'
                 }}                   className="about-achievements-cards-right">
              <div className="card about-achievement">
                <div className="card-about-achievement-number">3,896<span className="accent-primary-1">+</span></div>
                <div className="card-about-achievement-text">Successful hires</div>
              </div>
              <div className="card about-achievement last">
                <div className="card-about-achievement-number">100K<span className="accent-primary-1">+</span></div>
                <div className="card-about-achievement-text">Monthly visits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNatural;
