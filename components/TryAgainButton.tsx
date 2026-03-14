"use client";

const TryAgainButton = () => {
  return (
    <button
      className="btn btn-primary mt-3 fw-semibold rounded-4"
      onClick={() => window.location.reload()}
    >
      Try Again
    </button>
  );
};

export default TryAgainButton;
