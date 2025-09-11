import React from 'react';
// Ensure AOS and other scripts are loaded globally.

const TrustedSection = () => (
<section className="row_am trusted_section">
  {/* container start */}
  <div className="container">
    <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
      <h2>Built for every web project</h2>
      <p>From e‑commerce stores to HTML games and marketplaces, Applash powers mobile experiences for hundreds of businesses.</p>
    </div>
    {/* logos slider start */}
    <div className="company_logos" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
      <div id="company_slider" className="owl-carousel owl-theme">
        <div className="item">
          <div className="logo">
            <img src="../images/paypal.png" alt="image" />
          </div>
        </div>
        <div className="item">
          <div className="logo">
            <img src="../images/spoty.png" alt="image" />
          </div>
        </div>
        <div className="item">
          <div className="logo">
            <img src="../images/shopboat.png" alt="image" />
          </div>
        </div>
        <div className="item">
          <div className="logo">
            <img src="../images/slack.png" alt="image" />
          </div>
        </div>
        <div className="item">
          <div className="logo">
            <img src="../images/envato.png" alt="image" />
          </div>
        </div>
        <div className="item">
          <div className="logo">
            <img src="../images/paypal.png" alt="image" />
          </div>
        </div>
        <div className="item">
          <div className="logo">
            <img src="../images/spoty.png" alt="image" />
          </div>
        </div>
        <div className="item">
          <div className="logo">
            <img src="../images/shopboat.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
    {/* logos slider end */}
  </div>
  {/* container end */}
</section>

);

export default TrustedSection;
