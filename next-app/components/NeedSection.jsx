import React from 'react';
// Ensure AOS and other scripts are loaded globally.

const NeedSection = () => (
<section className="need_section" data-aos="fade-in" data-aos-duration={1500} data-aos-delay={100}>
  <div className="container">
    <div className="need_block">
      <div className="need_text">
        <div className="section_title">
          <h2>Need support ? contact our team</h2>
          <p><i className="icofont-clock-time" /> Mon - Fri: 9 am to 5 am</p>
        </div>
      </div>
      <div className="need_action">
        <a href="tel:1234567899" className="btn"><i className="icofont-phone-circle" /> +1 123 456 7890</a>
        <a href="faq.html" className="faq_btn">Read The FAQ </a>
      </div>
    </div>
  </div>
</section>

);

export default NeedSection;
