import React from 'react';
// Ensure AOS and other scripts are loaded globally.

const FaqSection = () => (
<section id="faqBlock" className="row_am faq_section">
  <div className="container">
    <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={300}>
      <h2><span>FAQ</span> - Frequently Asked Questions</h2>
      <p>Find answers to common questions about Applash.</p>
    </div>
    <div className="faq_panel">
      <div className="accordion" id="accordionExample">
        <div className="card" data-aos="fade-up" data-aos-duration={1500}>
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button type="button" className="btn btn-link active" data-toggle="collapse" data-target="#collapseOne"><i className="icon_faq icofont-plus" /> How can I pay?</button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              <p>You can pay with any major credit card. One-time and subscription options are available.</p>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration={1500}>
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"><i className="icon_faq icofont-plus" /> How do I set up an account?</button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              <p>Sign up with your email and follow the guided steps to connect your website.</p>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration={1500}>
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"><i className="icon_faq icofont-plus" /> What is the process to get a refund?</button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              <p>Contact support within 14 days and we'll issue a full refund.</p>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration={1500}>
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"><i className="icon_faq icofont-plus" /> Can I use my own code?</button>
            </h2>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div className="card-body">
              <p>Yes. Add custom HTML, CSS, and JavaScript directly in the builder.</p>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration={1500}>
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"><i className="icon_faq icofont-plus" /> Do updates require new builds?</button>
            </h2>
          </div>
          <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div className="card-body">
              <p>No. Your app updates automatically whenever your website changes.</p>
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration={1500}>
          <div className="card-header" id="headingSix">
            <h2 className="mb-0">
              <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix"><i className="icon_faq icofont-plus" /> Does Applash support push notifications?</button>
            </h2>
          </div>
          <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
            <div className="card-body">
              <p>Yes. Integrate with OneSignal to send unlimited notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* container end */}
</section>

);

export default FaqSection;
