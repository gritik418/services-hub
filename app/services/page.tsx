import NoServiceCard from "@/components/NoServiceCard";
import ServiceCard from "@/components/ServiceCard";
import { getServices } from "@/lib/api";

export const revalidate = 300;

export default async function ServicesScreen() {
  const res = await getServices();

  if (!res.success) {
    return (
      <main>
        <section className="container py-5 text-center">
          <h1 className="mb-3">Services</h1>
          <p className="text-danger">
            Failed to load services. Please try again later.
          </p>
        </section>
      </main>
    );
  }

  const services = res?.data;

  return (
    <main>
      <section className="container py-5">
        <header className="mb-5 text-center">
          <h1>Our Services</h1>
          <p className="text-muted">
            Explore the range of services we offer to help businesses grow and
            succeed.
          </p>
        </header>

        <div className="row">
          {!services || services.length === 0 ? (
            <NoServiceCard />
          ) : (
            services.map((service) => (
              <article
                key={service.id}
                className="col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <ServiceCard service={service} />
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
