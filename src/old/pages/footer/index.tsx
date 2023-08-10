import React, {FC} from 'react';
import Search from "../../elements/search";

import './index.scss'


interface Interface {}

const Footer: FC<Partial<Interface>> = () => {
  return (
    <div className='footer'>
      <div className='footer_content'>
        <div className='footer_content_small-print'>
          © Copyright Job Board X - Designed by BRIX Templates - Powered by Webflow
        </div>

        <div className='footer_content_social'>
          <a href="src/old/pages/footer/index" className='image-wrapper social-media-link facebook'>
            <img src="/images/social/facebook.svg" alt=""/>
          </a>
          <a href="src/old/pages/footer/index" className='image-wrapper social-media-link twitter'>
            <img src="/images/social/twitter.svg" alt=""/>
          </a>
          <a href="src/old/pages/footer/index" className='image-wrapper social-media-link instagram'>
            <img src="/images/social/instagram.svg" alt=""/>
          </a>
          <a href="src/old/pages/footer/index" className='image-wrapper social-media-link linkedin'>
            <img src="/images/social/linkedin.svg" alt=""/>
          </a>
          <a href="src/old/pages/footer/index" className='image-wrapper social-media-link youtube'>
            <img src="/images/social/youtube.svg" alt=""/>
          </a>
          <a href="src/old/pages/footer/index" className='image-wrapper social-media-link whatsapp'>
            <img src="/images/social/whatsapp.svg" alt=""/>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Footer;
