import { Service } from "@/types";
import React from "react";

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetailModal = ({ service, isOpen, onClose }: ServiceDetailModalProps) => {
  if (!isOpen || !service) return null;

  return (
    <div 
      className="modal show d-block" 
      style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
        transition: "opacity 0.3s ease"
      }} 
      tabIndex={-1}
      onClick={onClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="modal-header border-0 bg-primary bg-gradient text-white p-4">
            <h5 className="modal-title fw-bold fs-4">{service.title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4 bg-white">
            <p className="lead text-dark mb-0">{service.description}</p>
          </div>
          <div className="modal-footer border-0 p-4 bg-light">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-4 fw-semibold shadow-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
