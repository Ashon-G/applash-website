import React from 'react';
// Ensure AOS and other scripts are loaded globally.

const Header = () => (
<header className="fixed">
  {/* container start */}
  <div className="container">
    {/* navigation bar */}
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="index.html">
        <img src="../images/logo.png" alt="image" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
          {/* <i class="icofont-navigation-menu ico_menu"></i> */}
          <div className="toggle-wrap">
            <span className="toggle-bar" />
          </div>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about-us.html">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="testimonial.html">Testimonial</a>
          </li>
          {/* secondery menu start */}
          <li className="nav-item has_dropdown">
            <a className="nav-link" href="#">Services</a>
            <span className="drp_btn"><i className="icofont-rounded-down" /></span>
            <div className="sub_menu">
              <ul>
                <li><a href="service-list-1.html">Service List 1</a></li>
                <li><a href="service-list-2.html">Service List 2</a></li>
                <li><a href="service-detail.html">Service Details </a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item has_dropdown">
            <a className="nav-link" href="#">Blog </a>
            <span className="drp_btn"><i className="icofont-rounded-down" /></span>
            <div className="sub_menu">
              <ul>
                <li><a href="blog-list.html">Blog List</a></li>
                <li><a href="blog-detail.html">Single Blog</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item has_dropdown">
            <a className="nav-link" href="#">Pages </a>
            <span className="drp_btn"><i className="icofont-rounded-down" /></span>
            <div className="sub_menu">
              <ul>
                <li><a href="pricing.html">Pricing </a></li>
                <li><a href="sign-in.html">Sign In </a></li>
                <li><a href="sign-up.html">Sign Up </a></li>
                <li><a href="error.html">Error 404 </a></li>
                <li><a href="faq.html">Faq </a></li>
              </ul>
            </div>
          </li>
          {/* secondery menu end */}
          <li className="nav-item">
            <a className="nav-link" href="contact-us.html">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dark_btn" href="contact-us.html">TRY IT FREE <i className="icofont-arrow-right" /></a>
          </li>
        </ul>
      </div>
    </nav>
    {/* navigation end */}
  </div>
  {/* container end */}
</header>

);

export default Header;
