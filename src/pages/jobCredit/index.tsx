import React, {FC} from 'react';
import './index.css'


interface Interface {}

const JobCredit: FC<Partial<Interface>> = () => {
  return (
    <div className="section credit">
      <div className="container-default w-container">
        <div className="credit-wrapper">
          <div data-w-id="efe6f1ea-985f-ddb3-4c77-b94ff98b0cd5"
               style={{
                 transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                 opacity: 1,
                 transformStyle: "preserve-3d"
               }}
               className="card credit job_credit_container"><h1 className="title card-credit">1 Job credit</h1><p
            className="paragraph card-credit">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
            sit amet luctus venenatis lectus.</p>
            <div className="w-layout-grid card-credit-features-grid">
              <div className="credit-feature-wrapper"><img
                src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca5000c1298fa4b65f2643_icon-1-check-job-board-x-template.svg"
                alt="Check Icon - Job Board X Webflow Template" className="image credit-feature-icon"/>
                <div>1 job credit</div></div>
              <div className="credit-feature-wrapper"><img
                src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca5000c1298fa4b65f2643_icon-1-check-job-board-x-template.svg"
                alt="Check Icon - Job Board X Webflow Template" className="image credit-feature-icon"/>
                <div>Featured for 1 week</div></div>
              <div className="credit-feature-wrapper"><img
                src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca5000c1298fa4b65f2643_icon-1-check-job-board-x-template.svg"
                alt="Check Icon - Job Board X Webflow Template" className="image credit-feature-icon"/>
                <div>Published for 2 months</div></div>
              <div className="credit-feature-wrapper"><img
                src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca5000c1298fa4b65f2643_icon-1-check-job-board-x-template.svg"
                alt="Check Icon - Job Board X Webflow Template" className="image credit-feature-icon"/>
                <div>1 day approval</div></div>
              <div className="credit-feature-wrapper"><img
                src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60ca5000c1298fa4b65f2643_icon-1-check-job-board-x-template.svg"
                alt="Check Icon - Job Board X Webflow Template" className="image credit-feature-icon"/>
                <div>Verified company</div></div>
            </div>
            <div className="rich-text-card-credit w-richtext"><h3>Why publishing a featured job opening?</h3><p>Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat consectetur est. Blandit
              blandit nec <a href="#">mauris pulvinar</a>. Lectus duis amet tortor, sit tincidunt. Rhoncus tincidunt
              imperdiet penatibus vitae risus, vitae. <strong>Blandit auctor</strong> justo nisl massa.</p><p>Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum ultrices lacus sodales nunc felis eu,
              consectetur arcu. Vitae nulla scelerisque id pellentesque feugiat vel eu.</p></div>
          </div>
          <div data-w-id="f5b486e6-4014-931d-4010-8bdca4769789"
               style={{
                 transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                 opacity: 1,
                 transformStyle: "preserve-3d"
               }}
               className="split-content credit-sidebar">
            <div
              data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Aprice%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FMexico_City%22%7D"
              className="card pay-credit">
              <div className="pay-credit-content-top"><h2 className="title h4-size">Pay your job credit</h2><p
                className="paragraph pay-credit">Lorem ipsum dolor sit amet, consecteturol adipiscing elit. Cras lectus
                duis ornare.</p>
                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                     className="title h2-size pay-credit-price">$&nbsp;99.00&nbsp;USD
                </div>
              </div>
              <div className="credit-add-cart">
                <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="60ca4b7f48288a4a8ad5c500"
                      data-loading-text="Adding to cart..." data-commerce-product-id="60ca4b7f317fed539551b71e"
                      className="w-commerce-commerceaddtocartform credit-add-cart-default-state">
                  <div className="credit-add-cart-buttons-wrapper"><input type="submit"
                                                                          data-node-type="commerce-add-to-cart-button"
                                                                          data-loading-text="Adding to cart..."
                                                                          value="Add to Cart" aria-busy="false"
                                                                          aria-haspopup="dialog"
                                                                          className="w-commerce-commerceaddtocartbutton button-primary full-width credit-add-cart-button" /><a
                    data-node-type="commerce-buy-now-button" data-default-text="Buy now"
                    data-subscription-text="Subscribe now" aria-busy="false" aria-haspopup="false"
                    className="w-commerce-commercebuynowbutton button-secondary full-width credit-add-cart-button w-dyn-hide"
                    href="/checkout">Buy now</a></div>
                </form>
                <div style={{display: "none"}} className="w-commerce-commerceaddtocartoutofstock empty-state small">
                  <div>This product is out of stock.</div>
                </div>
                <div data-node-type="commerce-add-to-cart-error" style={{display: "none"}}
                     className="w-commerce-commerceaddtocarterror error-message">
                  <div data-node-type="commerce-add-to-cart-error"
                       data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                       data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                       data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                       data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                       data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                       data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not
                    available in this quantity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCredit;
