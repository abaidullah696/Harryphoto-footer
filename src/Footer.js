import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="first-row">
          <div className="resources">
            <h2>Resources</h2>
            <p>Stock Photos Collection</p>
            <p>Editorials</p>
            <p>Featured Collection</p>
            <p>Premium</p>
            <p>Trending</p>
          </div>
          <div className="clr">
            <h3>Our Company</h3>
            <p>About Us</p>
            <p>Pricing</p>
            <p>Coupons</p>
            <p>Contactus</p>
          </div>
          <div className="clr">
            <h3>Legal</h3>
            <p>Terms of use</p>
            <p>Term of Service</p>
            <p>Privacy Policy</p>
            <p>Patents</p>
            <p>Cookie Policy</p>
          </div>
          <div className="clr">
            <h3>Earn</h3>
            <p>Affiliate Partner Benifits</p>
            <p>Shop Benifits</p>
            <p>Become an Ambassador</p>
          </div>
        </div>
        <div className="second-row">
          <div className="clr">
            <h3>Packages</h3>
            <p>Enterprise Package</p>
            <p>Agency Packages</p>
          </div>
          <div className="clr">
            <h3>Check out More</h3>
            <p>Gift Cards</p>
            <p>Coupons</p>
          </div>
          <div className="clr">
            <h3>Privacy Policy</h3>
            <p>Licences</p>
            <p>Help Center</p>
          </div>
          <div className="clr">
            <h3>Languages</h3>
            <div className="language">
              <div className="language-row">
                <p>AR</p>
                <p>DE</p>
                <p>EN</p>
                <p>ES</p>
              </div>
              <div className="language-row">
                <p>FR</p>
                <p>ID</p>
                <p>IT</p>
                <p>JA</p>
              </div>
              <div className="language-row">
                <p>KD</p>
                <p>NL</p>
                <p>PL</p>
                <p>PT</p>
              </div>
              <div className="language-row">
                <p>SV</p>
                <p>TH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="third-row">
          <h3>Harryphoto</h3>
          <p>
            Sign up for a free account today and start exploring our Image
            Content Library. Whether you're working on a professional project,
            sprucing up your personal blog, or simply seeking visual
            inspiration, we've got you covered
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 Harry Photo, All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
