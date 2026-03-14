import { Service } from "@/types";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title h5 fw-semibold mb-3">{service.title}</h2>

        <p className="card-text text-muted flex-grow-1">
          {service.description.length > 60
            ? service.description.slice(0, 60) + "..."
            : service.description}
        </p>

        <button className="btn btn-primary mt-auto">Learn More →</button>
      </div>
    </div>
  );
};

export default ServiceCard;
