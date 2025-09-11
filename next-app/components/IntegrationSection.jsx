import React from 'react';
// Ensure AOS and other scripts are loaded globally.

const IntegrationSection = () => (
<section className="row_am integration_section">
  <div className="container">
    <div className="section_title" data-aos="fade-up" data-aos-duration={1000}>
      <h2>Integrations</h2>
      <p>Applash works seamlessly with services you already use.</p>
    </div>
    <div className="platforms_list">
      <div className="row justify-content-center">
        <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-duration={1000}>
          <div className="list_block">
            <div className="icon">
              <img src="../images/integrations/onesignal-logo.jpg" width="100px" alt="image" />
            </div>
            <div className="caption">
              <p>OneSignal</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-6" data-aos="fade-up" data-aos-duration={1000}>
          <div className="list_block">
            <div className="icon">
              <img src="../images/integrations/expo-logo.png" width="100px" alt="image" />
            </div>
            <div className="caption">
              <p>Expo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

);

export default IntegrationSection;
