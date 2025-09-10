import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const BannerSection = () => (
<section className="banner_section">
  <div className="container">
    <div className="banner_text">
      <div className="ban_inner_text" data-aos="fade-up" data-aos-duration={1500}>
        <span>Applash</span>
        <h1>Convert your web app into mobile apps for App Store &amp; Google Play</h1>
        <p>Build once, publish everywhere. Turn any website into a full-featured mobile app in minutes.</p>
      </div>
      <div className="btn_group">
        <a href="#" className="btn btn_main" data-aos="fade-right" data-aos-duration={1500}>START FOR FREE <i className="icofont-arrow-right" /></a>
      </div>
    </div>
    <div className="banner_images" data-aos="fade-up" data-aos-duration={1500}>
      <img src="../images/hero/hero-main.png" alt="image" width="936px" />
      <div className="sub_images">
        <img className="moving_animation" src="../images/hero/hero-top-right.png" width="150px" alt="image" />
        <img className="moving_animation" src="../images/hero/hero-left.png" height="570px" width="250px" alt="image" />
        <img className="moving_animation" src="../images/hero/hero-left.png" hidden="true" alt="image" />
      </div>
    </div>
  </div>
</section>

);

export default BannerSection;
