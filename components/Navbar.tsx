import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-primary fs-4">
          ServicesHub
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <Link href="/" className="nav-link fw-medium px-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link fw-medium px-3">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link fw-medium px-3">
                About
              </Link>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link href="/contact" className="btn btn-primary rounded-pill px-4 fw-semibold">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
