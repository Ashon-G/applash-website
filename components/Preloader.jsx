import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const Preloader = () => (
  <div id="preloader">
    {/* <div id="loader"></div> */}
    <div className="circle-border">
      <div className="circle-core"></div>
    </div>
  </div>
);

export default Preloader;
