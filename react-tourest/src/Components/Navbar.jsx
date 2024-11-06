import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <small className="me-3 text-light">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                123 Street, New York, USA
              </small>
              <small className="me-3 text-light">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
                +012 345 6789
              </small>
              <small className="text-light">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" />
                info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <FontAwesomeIcon icon={faTwitter} className="fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <FontAwesomeIcon icon={faFacebookF} className="fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <FontAwesomeIcon icon={faLinkedinIn} className="fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <FontAwesomeIcon icon={faInstagram} className="fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="">
                <FontAwesomeIcon icon={faYoutube} className="fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
              Tourist
            </h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/service" className="nav-item nav-link">
                Services
              </a>
              <a href="/package" className="nav-item nav-link">
                Packages
              </a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/destination" className="dropdown-item">
                    Destination
                  </a>
                  <a href="/booking" className="dropdown-item">
                    Booking
                  </a>
                  <a href="/team" className="dropdown-item">
                    Travel Guides
                  </a>
                  <a href="/testimonial" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="/404" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="/contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a href="/register" className="btn btn-primary rounded-pill py-2 px-4">
              Register
            </a>
          </div>
        </nav>

        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">
                  Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit
                </p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Eg: Thailand"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: '7px' }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
}

export default Navbar;
