import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-vh-100">
      <section className="py-5 py-lg-5">
        <div className="container py-5 my-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-xl-8">
              <span className="badge bg-light text-black fs-6 rounded-pill px-3 py-2 mb-4 fw-medium tracking-wide">
                Welcome to{" "}
                <span className="text-primary fw-bold">ServicesHub</span>
              </span>
              <h1 className="display-3 fw-bolder text-dark mb-4 tracking-tight">
                Scale Your Business With Our{" "}
                <span className="text-primary">Premium Services</span>
              </h1>
              <p className="lead text-secondary mb-5 px-md-5 fs-4">
                Discover top-tier solutions tailored to meet your unique needs.
                We provide the expertise and tools to help you achieve your
                goals faster.
              </p>

              <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
                <Link
                  href="/services"
                  className="btn btn-primary rounded-pill px-5 py-3 fw-semibold shadow-sm btn-lg"
                >
                  Explore Services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
