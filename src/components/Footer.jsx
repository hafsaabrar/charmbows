import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <a
        href="https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20aapke%20accessories%20ke%20baare%20mein%20puchna%20hai."
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width="35"
        />
        <span>Chat with us</span>
      </a>

      <footer className="footer bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 fade-in-up delay-1">
              <h3 className="footer-logo">
                <img src="/img/logo.jpg" width="70px" alt="Charm Bows Logo" />
              </h3>
              <p className="text-white-50 mb-2">Handcrafted with love in Pakistan. 🇵🇰</p>
              <p className="text-white-50">
                Bringing you the most elegant hair accessories and upcoming beautiful jewelry pieces.
              </p>
              <div className="mt-3">
                <span className="badge bg-orange text-white-50 p-2">
                  <i className="fas fa-users me-1"></i> 200+ Happy Customers
                </span>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 fade-in-up delay-2">
              <h5 className="mb-3 text-orange">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/our-story">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 fade-in-up delay-2">
              <h5 className="mb-3 text-orange">Customer Care</h5>
              <ul className="list-unstyled footer-links">
                <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 fade-in-up delay-3">
              <h5 className="mb-3 text-orange">Stay Connected</h5>
              <p className="text-white-50">Follow us on social media for new arrivals!</p>
              <div className="d-flex gap-3 mt-3">
                <a
                  href="https://www.instagram.com/charm__bows?igsh=MW41dHZzYjhqNTR0OQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-4 social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/share/1HuET4yRNK/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-4 social-icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@charm.bows?_r=1&_t=ZS-94ElFFwjNsC"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-4 social-icon"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="border-secondary mt-3 mb-3 fade-in-up delay-2" />
          <div className="text-center text-white-50 fade-in-up delay-3">
            <p className="mb-0">&copy; 2025 Charm Bows. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;