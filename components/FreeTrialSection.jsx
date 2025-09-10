import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const FreeTrialSection = () => (
<section className="free_trial_section" data-aos="fade-in" data-aos-duration={1500}>
  <div className="free_inner">
    <div className="text">
      <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
        <h2>Start Your 14-Day Free Trial</h2>
        <p>Instant free download from apple and play store orem Ipsum is simply dummy
          text of the printing.</p>
      </div>
      <ul data-aos="fade-up" data-aos-duration={1500}>
        <li>
          <p><i className="icofont-check-circled" />Free 14-day trial</p>
        </li>
        <li>
          <p><i className="icofont-check-circled" />No credit card required</p>
        </li>
        <li>
          <p><i className="icofont-check-circled" />Support 24/7</p>
        </li>
        <li>
          <p><i className="icofont-check-circled" />Cancel anytime</p>
        </li>
      </ul>
      <div className="start_and_watch" data-aos="fade-up" data-aos-duration={1500}>
        <a href="contact-us.html" className="btn btn_main">GET STARTED <i className="icofont-arrow-right" /></a>
        <a className="popup-youtube play-button" data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU">
          <div className="play_btn">
            <img src="../images/play_icon.png" alt="image" />
            <div className="waves-block">
              <div className="waves wave-1" />
              <div className="waves wave-2" />
              <div className="waves wave-3" />
            </div>
          </div>
          <span>WATCH PROMO</span>
        </a>
      </div>
    </div>
    <div className="side_img">
      <img src="../images/dashboard.png" alt="image" />
    </div>
  </div>
</section>

);

export default FreeTrialSection;
