import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  onLearnMore: () => void;
}

const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden transition-all hover-shadow">
      <div className="card-body d-flex flex-column p-4">
        <h2 className="card-title h5 fw-bold text-dark mb-3">
          {service.title}
        </h2>

        <p className="card-text text-secondary flex-grow-1 mb-4">
          {service.description.length > 80
            ? service.description.slice(0, 80) + "..."
            : service.description}
        </p>

        <button
          className="btn btn-primary mt-auto fw-semibold rounded-pill w-100 shadow-sm"
          onClick={onLearnMore}
        >
          Learn More &rarr;
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
