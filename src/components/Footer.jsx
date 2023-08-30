import React from "react";
import logo from "../../src/assets/logo.png";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_section">
        <img src={logo} />
        <div className="footer_grid">
          <div>
            <h5>Comapany</h5>
            <p>About Us</p>
            <p>Store</p>
            <p>Blog</p>
          </div>
          <div>
            <h5>Legal</h5>
            <p>Terms and Conditions</p>
            <p>Privacy olicy</p>
            <p>Shipping Policy</p>
            <p>Returns and Refunds</p>
            <p>Cookies</p>
          </div>
          <div>
            <h5>Need Help</h5>
            <p>Track Orders</p>
            <p>FAQ's</p>
          </div>
          <div >
            <h5>Contact Us</h5>
            <p className="contact_us">support@rareeatfresh.com</p>
            <p className="contact_us">020 7205 4031</p>
            <p className="contact_us">
              International House, 64 Nile Street, London, N1 7SR, United
              Kingdom
            </p>
            <FaFacebook className="icons" />
            <FaInstagram className="icons"  />
            <FaTwitter className="icons"  />
            <FaLinkedinIn className="icons"  />
          </div>
        </div>
        <hr />
        <p className="small">Copyright &#169; 2023 Rare Eat Fresh. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
