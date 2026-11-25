import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/img/logo.jpg" width="65px" className="rounded-3" alt="Charm Bows Logo" />
        </Link>

        <div className="d-flex align-items-center gap-2 order-lg-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn ms-lg-3"
            aria-label="Toggle Dark/Light Mode"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <a
            href="https://wa.me/c/923430832813"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary-orange d-none d-sm-inline-block ms-2"
          >
            Shop Now
          </a>

          <button
            type="button"
            className="navbar-toggler ms-2"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
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
            <li className="nav-item d-sm-none mt-2">
              <a
                href="https://wa.me/c/923430832813"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary-orange w-100"
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;