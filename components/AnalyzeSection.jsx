import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const AnalyzeSection = () => (
<section className="row_am analyze_section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="analyze_text" data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100}>
          <span className="icon"><img src="../images/new/Analyze_Icon.svg" alt="image" /></span>
          <div className="section_title">
            <h2>Add custom code with instant preview</h2>
            <p>Tailor your mobile app without limits. Use our editor to add HTML, CSS or JavaScript and watch updates in real time.</p>
          </div>
          <ul>
            <li data-aos="fade-up" data-aos-duration={2000}>
              <h3>Edit code on the fly</h3>
              <p>Inject custom features without rebuilding your app.</p>
            </li>
            <li data-aos="fade-up" data-aos-duration={2000}>
              <h3>Live preview</h3>
              <p>Test your changes instantly across iOS and Android.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="analyze_image" data-aos="fade-in" data-aos-duration={1000}>
          <img data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100} className="moving_animation" src="../images/code/javascript.png" width="350px" alt="image" />
          <img data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100} className="moving_animation" src="../images/code/css.png" width="300px" alt="image" />
          <img data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100} className src="../images/hero/hero-left.png" width="250px" height="600px" alt="image" />
        </div>
      </div>
    </div>
  </div>
</section>

);

export default AnalyzeSection;
