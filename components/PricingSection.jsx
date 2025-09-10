import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const PricingSection = () => (
<section className="row_am pricing_section service_list_ps" id="pricing">
  <div className="container">
    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
      <h2>Simple pricing for every project</h2>
      <p>Start for free and upgrade when you're ready to publish.</p>
    </div>
    <div className="pricing_pannel active" data-aos="fade-up" data-aos-duration={1500}>
      <div className="row">
        <div className="col-md-4">
          <div className="pricing_block">
            <div className="icon">
              <img src="../images/new/Free-Trial-01.svg" alt="image" />
              <div className="dot_block">
                <span className="dot_anim" />
                <span className="dot_anim" />
                <span className="dot_anim" />
              </div>
            </div>
            <div className="pkg_name">
              <h3>Free</h3>
              <span>Explore Applash</span>
            </div>
            <span className="price">$0<span /></span>
            <ul className="benifits">
              <li className="include"><p><i className="icofont-check-circled" />Live preview in real time</p></li>
              <li className="include"><p><i className="icofont-check-circled" />Custom app icon &amp; splash screen</p></li>
              <li className="include"><p><i className="icofont-check-circled" />Push notifications</p></li>
            </ul>
            <a href="#" className="btn btn_main">GET STARTED <i className="icofont-arrow-right" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing_block highlited_block">
            <div className="icon">
              <img src="../images/new/unlimited.png" alt="image" />
              <div className="dot_block">
                <span className="dot_anim" />
                <span className="dot_anim" />
                <span className="dot_anim" />
              </div>
            </div>
            <div className="pkg_name">
              <h3>One Build</h3>
              <span>Publish once</span>
            </div>
            <span className="price">$10<span>/Build</span></span>
            <ul className="benifits">
              <li className="include"><p><i className="icofont-check-circled" />Everything in Free</p></li>
              <li className="include"><p><i className="icofont-check-circled" />Submit to App Store &amp; Google Play</p></li>
              <li className="include"><p><i className="icofont-check-circled" />One time build</p></li>
            </ul>
            <a href="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing_block">
            <div className="icon">
              <img src="../images/new/Premium.svg" alt="image" />
              <div className="dot_block">
                <span className="dot_anim" />
                <span className="dot_anim" />
                <span className="dot_anim" />
              </div>
            </div>
            <div className="pkg_name">
              <h3>Unlimited</h3>
              <span>For high volume teams</span>
            </div>
            <span className="price">$349<span>/Month</span></span>
            <ul className="benifits">
              <li className="include"><p><i className="icofont-check-circled" />Unlimited builds</p></li>
              <li className="include"><p><i className="icofont-check-circled" />Auto updates with every web change</p></li>
              <li className="include"><p><i className="icofont-check-circled" />24/7 ticket support</p></li>
            </ul>
            <a href="#" className="btn btn_main">BUY NOW <i className="icofont-arrow-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

);

export default PricingSection;
