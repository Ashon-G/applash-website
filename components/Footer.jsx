import React from 'react';
import '../css/icofont.min.css';
import '../css/animate.min.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/aos.css';
import '../css/style.css';
import '../css/responsive.css';
// Ensure AOS and other scripts are loaded globally.

const Footer = () => (
<footer>
  <div className="banner_shapes">
    <div className="container">
      <span><img src="../images/new/plus.svg" alt="image" /></span>
      <span><img src="../images/new/polygon.svg" alt="image" /></span>
      <span><img src="../images/new/round.svg" alt="image" /></span>
    </div>
  </div>
  <div className="top_footer" id="contact">
    <div className="footer_inner">
      {/* container start */}
      <div className="container">
        {/* row start */}
        <div className="row">
          {/* footer link 1 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="abt_side">
              <div className="logo"> <img src="../images/logo.png" alt="image" /></div>
              <p>Applash converts your web app into mobile apps for iOS and Android.</p>
              <div className="news_letter_block">
                <form action="submit">
                  <div className="form-group">
                    <input type="email" placeholder="Enter your email" className="form-control" />
                    <button className="btn"><i className="icofont-paper-plane" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* footer link 2 */}
          <div className="col-lg-2 col-md-6 col-12">
            <div className="links">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">About us</a></li>
                <li><a href="service-list-1.html">Services</a></li>
                <li><a href="service-detail.html">Service Detail</a></li>
                <li><a href="blog-list.html">Blog</a></li>
              </ul>
            </div>
          </div>
          {/* footer link 3 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="links">
              <h3>Help &amp; Suport</h3>
              <ul>
                <li><a href="contact-us.html">Contact us</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Terms &amp; conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
          </div>
          {/* footer link 4 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="try_out">
              <h3>Contact us</h3>
              <ul>
                <li>
                  <span className="icon">
                    <img src="../images/new/contact_01.png" alt="image" />
                  </span>
                  <div className="text">
                    <p>Reach us <br /> 599, Vilium Crossing, NJ</p>
                  </div>
                </li>
                <li>
                  <span className="icon">
                    <img src="../images/new/contact_02.png" alt="image" />
                  </span>
                  <div className="text">
                    <p>Call us <a href="tel:+1-900-1234567">+1-900-123 4567</a></p>
                  </div>
                </li>
                <li>
                  <span className="icon">
                    <img src="../images/new/contact_03.png" alt="image" />
                  </span>
                  <div className="text">
                    <p>Email us <a href="mailto:support@example.com">support@example.com</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </div>
  </div>
  {/* last footer */}
  <div className="bottom_footer">
    {/* container start */}
    <div className="container">
      {/* row start */}
      <div className="row">
        <div className="col-md-4">
          <p>© Copyrights 2023. All rights reserved.</p>
        </div>
        <div className="col-md-4">
          <ul className="social_media">
            <li><a href="#"><i className="icofont-facebook" /></a></li>
            <li><a href="#"><i className="icofont-twitter" /></a></li>
            <li><a href="#"><i className="icofont-instagram" /></a></li>
            <li><a href="#"><i className="icofont-pinterest" /></a></li>
          </ul>
        </div>
        <div className="col-md-4">
        </div>
      </div>
      {/* row end */}
    </div>
    {/* container end */}
  </div>
  {/* go top button */}
  <div className="go_top" id="Gotop">
    <span><i className="icofont-arrow-up" /></span>
  </div>
</footer>

);

export default Footer;
