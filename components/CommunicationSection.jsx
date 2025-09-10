import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const CommunicationSection = () => (
<section className="row_am communication_section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="communication_text" data-aos="fade-in" data-aos-duration={2000} data-aos-delay={100}>
          <span className="icon"><img src="../images/new/comunication.svg" alt="image" /></span>
          <div className="section_title">
            <h2>Engage users with push notifications</h2>
            <p>Send targeted messages and keep your audience coming back.</p>
          </div>
          <ul>
            <li data-aos="fade-up" data-aos-duration={2000}>
              <h3>Push notifications</h3>
              <p>Deliver real-time updates and promotions.</p>
            </li>
            <li data-aos="fade-up" data-aos-duration={2000}>
              <h3>OneSignal integration</h3>
              <p>Connect your OneSignal account in seconds.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="communication_image" data-aos="fade-in" data-aos-duration={1000}>
          <dotlottie-wc src="https://lottie.host/d150bd80-839e-4333-b942-f947d243543e/DZzUiG17J9.lottie" style={{width: 300, height: 300}} speed={1} autoPlay loop />
        </div>
      </div>
    </div>
  </div>
</section>

);

export default CommunicationSection;
