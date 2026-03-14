import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-primary fs-4">
          ServicesHub
        </Link>

        <div className="d-flex align-items-center">
          <ul className="navbar-nav flex-row align-items-center gap-3 mb-0">
            <li className="nav-item d-none d-lg-block">
              <Link href="/" className="nav-link fw-medium px-3">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/services"
                className="btn btn-primary rounded-pill px-4 fw-semibold"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
