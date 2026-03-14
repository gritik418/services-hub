import ServicesList from "@/components/ServicesList";
import TryAgainButton from "@/components/TryAgainButton";
import { getServices } from "@/lib/api";

export const revalidate = 300;

export default async function ServicesScreen() {
  const res = await getServices();

  if (!res.success) {
    return (
      <main className="bg-light min-vh-100 d-flex align-items-center">
        <section className="container py-5 text-center">
          <div
            className="bg-white p-5 rounded-4 shadow-sm mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="display-6 fw-bold text-danger mb-3">Oops!</h1>
            <p className="lead text-secondary mb-0">
              Failed to load services. Please try again later.
            </p>

            <TryAgainButton />
          </div>
        </section>
      </main>
    );
  }

  const services = res?.data || [];

  return (
    <main className="bg-light min-vh-100">
      <section className="container py-5">
        <header className="mb-5 text-center bg-white p-5 rounded-4 shadow-sm">
          <h1 className="display-4 fw-bold text-dark mb-3">Our Services</h1>
          <p
            className="lead text-secondary mx-auto mb-0"
            style={{ maxWidth: "600px" }}
          >
            Explore the range of services we offer to help businesses grow and
            succeed.
          </p>
        </header>

        <ServicesList services={services} />
      </section>
    </main>
  );
}
