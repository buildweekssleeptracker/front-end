import React from "react";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col 16 s12">
            <h5 className="white-text">Footer</h5>
            <p className="gray-text text-lighten-4">Sleep Tracker &copy;</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">&copy; 2019 Alfonso Garcia</div>
      </div>
    </footer>
  );
};
export default Footer;
