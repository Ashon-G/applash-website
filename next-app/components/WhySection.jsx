import React from 'react';
// Ensure AOS and other scripts are loaded globally.

const WhySection = () => (
<section className="why_section">
  <div className="why_inner">
    <div className="container">
      <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
        <h2>Why choose Applash</h2>
        <p>Everything you need to transform your website into polished mobile apps without writing native code.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="why_cards" data-aos="fade-up" data-aos-duration={1500}>
            <div className="image">
              <img src="../images/new/why1.png" alt="image" />
            </div>
            <div className="text">
              <span>01 </span>
              <h3>Custom branding</h3>
              <p>Create a unique app icon and splash screen that match your brand.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="why_cards" data-aos="fade-up" data-aos-duration={1500}>
            <div className="image">
              <img src="../images/new/why2.png" alt="image" />
            </div>
            <div className="text">
              <span>02 </span>
              <h3>Native navigation</h3>
              <p>Add a bottom menu and side drawer for a familiar mobile experience.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="why_cards" data-aos="fade-up" data-aos-duration={1500}>
            <div className="image">
              <img src="../images/new/why3.png" alt="image" />
            </div>
            <div className="text">
              <span>03 </span>
              <h3>Real-time preview</h3>
              <p>See every change instantly as you customize your app.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

);

export default WhySection;
