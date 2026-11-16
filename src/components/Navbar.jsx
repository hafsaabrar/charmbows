import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/img/logo.jpg" width="70px" alt="Charm Bows Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu border-0 shadow-sm" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/silk-bow">Hair Bows</Link></li>
                <li><Link className="dropdown-item" to="/silk-scrunchie">Scrunchies</Link></li>
                <li><Link className="dropdown-item" to="/bag">Potli Bags</Link></li>
                <li><Link className="dropdown-item" to="/hairband">Hairbands</Link></li>
                <li><Link className="dropdown-item" to="/pins">Pins</Link></li>
                <li><Link className="dropdown-item" to="/koreanclaw">Korean Claw</Link></li>
                <li><Link className="dropdown-item" to="/jewelry">Jewelry</Link></li>
                <li><Link className="dropdown-item" to="/hairtassel">Hair Tassels</Link></li>
                <li><Link className="dropdown-item" to="/crown">Turkish Style Crown</Link></li>
                <li><Link className="dropdown-item" to="/babyfootwear">Baby Footwear</Link></li>
                <li><Link className="dropdown-item" to="/kids-fashion">Kids Fashion</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/accessories">Night Accessories</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <a
            href="https://wa.me/c/923430832813"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary-orange ms-lg-3"
          >
            Shop Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;