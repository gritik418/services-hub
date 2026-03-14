import React from "react";

const NoServiceCard = () => {
  return (
    <div className="text-center py-5 bg-white shadow-sm rounded-4 border-0">
      <div className="p-5">
        <h2 className="h4 fw-bold text-dark mb-3">No services available</h2>
        <p className="text-secondary lead mb-0">
          We are currently updating our offerings. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default NoServiceCard;
