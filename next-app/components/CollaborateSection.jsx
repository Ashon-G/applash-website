import React from 'react';
// Ensure AOS and other scripts are loaded globally.

const CollaborateSection = () => (
<section className="row_am collaborate_section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="collaborate_image" data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100}>
          <div className="img_block" data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100}>
            <img className="icon_img moving_animation" src="../images/features/mic.svg" width="100px" alt="image" />
            <img className="icon_img moving_animation" src="../images/features/gps.svg" width="100px" alt="image" />
          </div>
          <div className="img_block" data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100}>
            <img src="../images/features/camera.svg" width="100px" alt="image" />
            <dotlottie-wc src="https://lottie.host/22989d96-ebf0-40ef-b35f-5cf2c5010611/hKfaXDqezw.lottie" style={{width: 300, height: 300}} speed={1} autoPlay loop />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="collaborate_text" data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100}>
          <span className="icon"><img src="../images/new/securely.svg" alt="image" /></span>
          <div className="section_title">
            <h2>Access native device features</h2>
            <p>Let your web app tap into geolocation, camera, and microphone for a true native experience.</p>
          </div>
          <ul>
            <li data-aos="fade-up" data-aos-duration={2000}>
              <h3>Geolocation access</h3>
              <p>Use location services to power local experiences.</p>
            </li>
            <li data-aos="fade-up" data-aos-duration={2000}>
              <h3>Camera &amp; microphone</h3>
              <p>Capture photos, video, or audio directly from your app.</p>
            </li>
          </ul>
          <a href="service-detail.html" data-aos="fade-up" data-aos-duration={2000} className="btn btn_main">READ MORE <i className="icofont-arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
</section>

);

export default CollaborateSection;
