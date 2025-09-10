import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const AdvanceFeatureSection = () => (
<section className="row_am advance_feature_section" id="getstarted">
  {/* container start */}
  <div className="container">
    <div className="advance_feature_inner" data-aos="fade-in" data-aos-duration={1500} data-aos-delay={100}>
      <div className="adf_shapes">
        <span><img src="../images/new/plus.svg" alt="image" /></span>
        <span><img src="../images/new/polygon.svg" alt="image" /></span>
        <span><img src="../images/new/round.svg" alt="image" /></span>
      </div>
      {/* Section Title */}
      <div className="section_title" data-aos="fade-in" data-aos-duration={1500} data-aos-delay={100}>
        <h2>More Applash features</h2>
        <p>Everything you need to launch a polished mobile app.</p>
      </div>
      {/* row start */}
      <div className="row">
        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration={1500}>
          <div className="feature_block">
            <div className="icon">
              <img src="../images/new/Secure-data.svg" alt="image" />
            </div>
            <div className="text_info">
              <h3>Custom app icon</h3>
              <p>Brand your app with your own icon for the App Store and Google Play.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration={1500}>
          <div className="feature_block">
            <div className="icon">
              <img src="../images/new/Fully-functional.svg" alt="image" />
            </div>
            <div className="text_info">
              <h3>Custom splash screen</h3>
              <p>Welcome users with a splash screen that showcases your brand.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration={1500}>
          <div className="feature_block">
            <div className="icon">
              <img src="../images/new/Live-chat.svg" alt="image" />
            </div>
            <div className="text_info">
              <h3>Bottom menu</h3>
              <p>Create a customizable bottom navigation bar for quick access to key pages.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration={1500}>
          <div className="feature_block">
            <div className="icon">
              <img src="../images/new/24-7-Support.svg" alt="image" />
            </div>
            <div className="text_info">
              <h3>Drawer menu</h3>
              <p>Add a slide-out drawer to organize additional navigation items.</p>
            </div>
          </div>
        </div>
      </div>
      {/* row end */}
    </div>
  </div>
  {/* container end */}
</section>

);

export default AdvanceFeatureSection;
