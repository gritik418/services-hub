import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-light min-vh-100">
      {/* Hero Section */}
      <section className="bg-white py-5 py-lg-5 border-bottom">
        <div className="container py-5 my-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-xl-8">
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-4 fw-medium tracking-wide">
                Welcome to ServicesHub
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
                <a
                  href="#features"
                  className="btn btn-light border rounded-pill px-5 py-3 fw-semibold btn-lg shadow-sm"
                >
                  View Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5 pb-3">
            <h2 className="fw-bold display-6 mb-3">Why Choose Us?</h2>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>
              We deliver excellence through our comprehensive approach. Here is what makes us stand out.
            </p>
          </div>

          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-lift transition">
                 <div className="card-body">
                   <div className="bg-primary-subtle text-primary d-inline-flex rounded-circle p-3 mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-rocket" viewBox="0 0 16 16">
                       <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z"/>
                       <path d="M11.953 8.81c-.195-3.388-1.155-5.806-2.276-7.182C9.222.463 8.666 0 8 0s-1.222.463-1.677 1.628c-1.121 1.376-2.081 3.794-2.276 7.182-.2 3.498.428 6.012 1.487 7.6.357.533.74.881 1.139 1.12.164.1.332.18.528.232.196.052.4.088.62.088.22 0 .424-.036.621-.088.195-.052.363-.132.527-.232.4-.24.782-.587 1.139-1.12 1.059-1.588 1.687-4.102 1.487-7.6ZM8 1.602c.636 1.424 1.258 3.511 1.405 6.075-.436-.312-1.025-.568-1.748-.716C7.576 6.845 7.02 6.51 6.866 6.13a1.944 1.944 0 0 1 .491-1.921c.883-.935 2.156-1.168 3.167-.704.296.136.56.342.775.603.228 1.97-.246 5.896-.246 5.896s-1.96 1.96-4.004 2.217C4.664 12.003 4.254 9 4 7c1.373-1.272 2.809-2.247 4-2.673a32.324 32.324 0 0 1 0-.725Z"/>
                     </svg>
                   </div>
                   <h3 className="h5 fw-bold mb-3">Fast Delivery</h3>
                   <p className="text-secondary mb-0">We ensure that your projects are delivered on time without compromising on quality.</p>
                 </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-lift transition">
                 <div className="card-body">
                   <div className="bg-success-subtle text-success d-inline-flex rounded-circle p-3 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.463.545 7.145 1.14 2.662a1.54 1.54 0 0 1 1.044-1.262c.658-.215 1.778-.57 2.887-.87z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                   </div>
                   <h3 className="h5 fw-bold mb-3">Secure & Reliable</h3>
                   <p className="text-secondary mb-0">Peace of mind guaranteed. We employ multiple security practices for your data.</p>
                 </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-lift transition">
                 <div className="card-body">
                   <div className="bg-info-subtle text-info d-inline-flex rounded-circle p-3 mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                    </svg>
                   </div>
                   <h3 className="h5 fw-bold mb-3">Dedicated Support</h3>
                   <p className="text-secondary mb-0">Our expert team is available 24/7 to solve your queries and business needs.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
