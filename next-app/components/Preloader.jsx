import React from 'react';
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
