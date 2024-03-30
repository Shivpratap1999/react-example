import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const staticFooterProps = {
    companyName: "Your Company",
    companyAddress: "123 Street Name, City, Country",
    phoneNumber: "+123-456-7890",
    emailAddress: "info@example.com",
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row-1">
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat, justo nec vestibulum fermentum.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profiles">Profiles</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-map-marker"></i> {staticFooterProps.companyAddress}
              </li>
              <li>
                <i className="fa fa-phone"></i> {staticFooterProps.phoneNumber}
              </li>
              <li>
                <i className="fa fa-envelope"></i> {staticFooterProps.emailAddress}
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">facebook</a>
              <a href="#">instagram</a>
              <a href="#">whatsApp</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="col-md-12 text-center">
            <p className="copy-right">&copy; {new Date().getFullYear()} {staticFooterProps.companyName}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;