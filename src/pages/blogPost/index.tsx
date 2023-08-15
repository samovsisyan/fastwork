import React, {FC} from 'react';
import './index.css'


interface Interface {}

const BlogPost: FC<Partial<Interface>> = () => {
  return (
    <div className="section post">
      <div data-w-id="8e89c8f8-8892-090e-3354-07e01a000011" className="image-wrapper post-main-image"><img
        src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60cb5d5665646dddfceb9d96_image-1-blog-post-job-board-x-template.jpg"
        alt="How to easily collaborate with designers as a developer" sizes="100vw"
        srcSet="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60cb5d5665646dddfceb9d96_image-1-blog-post-job-board-x-template-p-500.jpeg 500w, https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60cb5d5665646dddfceb9d96_image-1-blog-post-job-board-x-template-p-1080.jpeg 1080w, https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60cb5d5665646dddfceb9d96_image-1-blog-post-job-board-x-template-p-2600.jpeg 2600w, https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60cb5d5665646dddfceb9d96_image-1-blog-post-job-board-x-template.jpg 2884w"
        className="image post-main-image"
        style={{willChange: "transform", transform: "translate3d(0px, -5.0132px, 0px) scale3d(1.02507, 1.02507, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}} />
      </div>
      <div className="container-medium-940px post">
        <div data-w-id="5328e60f-11db-c421-c26a-0578353be62a"
             style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", opacity: 1, transformStyle: "preserve-3d"}}
             className="card post">
          <div className="card-post-wrapper">
            <div className="card-post-content-top"><h1 className="title card-post">How to easily collaborate with
              designers as a developer</h1><p className="paragraph card-post">Vel magnis facilisi urna nulla. Mauris
              rhoncus vulputate enim vulputate. Volutpat sapien, viverra commodo cras. Volutpat ullamcorper praesent
              amet, scelerisque a volutpat bibendum sed. Purus elit odio.</p>
              <div className="card-post-about-wrapper">
                <div className="card-post-date">September 1, 2022</div>
                <a href="/blog-category/development"
                   className="button-primary small card-post-category w-button">Development</a></div>
            </div>
            <div className="divider card-post"></div>
            <div className="rich-text w-richtext"><h2>How to collaborate with designers</h2><p>Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Et hendrerit dolor, habitant lectus congue. <strong>Nisl nunc
                donec</strong> aliquam viverra nisi, lacus id. Viverra ac eu tristique lorem laoreet morbi. In pulvinar
              magnis est, non.</p>
              <ol role="list">
                <li>Ornare lectus sit amet est placerat in egestas erat imperdiet.</li>
                <li>Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.</li>
                <li>Posuere mori leo urna molestie at.</li>
                <li>Aliquet bibendu enfacilisis gravida neque convallis a.</li>
              </ol>
              <h3>Using tools like Sketch or Figma</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                a mattis arcu nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam
                magna elementum condimentum commodo. <a href="#">Ut sed feugiat</a> sem in pharetra viverra.</p>
              <figure style={{maxWidth:"1276px"}} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img
                  src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60cb5bd020a93437da340233_image-blog-figure-job-board-x-template.jpg"
                  loading="lazy" alt="" /></div>
                <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</figcaption>
              </figure>
              <h4>How to request designers to do the development handoff</h4><p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vitae maecenas at ultricies felis ac. Nibh facilisi amet, integer consectetur feugiat.
                Sit id sit interdum vitae porta consectetur laoreet id. <strong>Odio orci</strong>, consequat
                egestas <strong>lectus et, quis pulvinar</strong>. In in euismod adipiscing congue aliquet faucibus
                facilisi tincidunt. <br /><br />Volutpat, orci nibh erat quam. Mattis ut in condimentum vitae in eget
                  consectetur nunc, elit. Semper consectetur duis egestas quis feugiat metus, tortor massa cursus.
                  Eleifend dolor tincidunt malesuada sed felis. Nibh felis, fames sed at arcu sed. Fermentum nam.</p>
              <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisg lit. Amet a mattis arcu nunc eu porttitor
                lamcorper”
              </blockquote>
              <h5>Interesting resources for designers and developers collaboration</h5><p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Amet a mattis arcu nunc eu porttitor. Ullamcorper neque ante venenatis
                ornare. <a href="#">Non magnis</a> congue diam aliquam magna elementum condimentum commodo. Ut sed
                feugiat sem in pharetra viverra.</p>
              <ul role="list">
                <li>Ornare lectus sit amet est placerat in egestas erat imperdiet.</li>
                <li>Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.</li>
                <li>Posuere mori leo urna molestie at.</li>
                <li>Aliquet bibendu enfacilisis gravida neque convallis a.</li>
              </ul>
              <h6>What other tools do you use?</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet a
                mattis arcu nunc eu porttitor. Ullamcorper neque ante venenatis ornare. Non magnis congue diam aliquam
                magna elementum condimentum commodo. Ut sed feugiat sem in pharetra viverra.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
