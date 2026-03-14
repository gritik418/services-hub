"use client";

import React, { useState } from "react";
import { Service } from "@/types";
import ServiceCard from "./ServiceCard";
import ServiceDetailModal from "./ServiceDetailModal";

interface ServicesListProps {
  services: Service[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div className="row g-4">
        {services.map((service) => (
          <article key={service.id} className="col-sm-6 col-md-4 col-lg-3">
            <ServiceCard 
              service={service} 
              onLearnMore={() => setSelectedService(service)} 
            />
          </article>
        ))}
      </div>

      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};

export default ServicesList;
