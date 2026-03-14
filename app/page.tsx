import Link from "next/link";

export default function Home() {
  return (
    <main className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-7">
            <h1 className="display-3 fw-bold text-dark mb-4">
              Empower Your Business Growth
            </h1>
            <p className="lead text-secondary mb-5 px-md-5">
              Discover top-tier services tailored to meet your unique needs. We
              provide scalable solutions to help you achieve your goals faster.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
              <Link
                href="/services"
                className="btn btn-primary rounded-pill px-5 py-3 fw-semibold shadow-sm"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="btn btn-outline-secondary rounded-pill px-5 py-3 fw-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
