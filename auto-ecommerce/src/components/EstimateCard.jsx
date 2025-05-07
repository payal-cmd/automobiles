import React from 'react';

const EstimateCard = ({ vehicle, estimate }) => {
  return (
    <div className="card card-3d">
      <h3>{vehicle}</h3>
      <p>Estimated Cost: <strong>${estimate.toLocaleString()}</strong></p>
    </div>
  );
};

export default EstimateCard;
