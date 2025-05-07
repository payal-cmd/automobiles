import React from 'react';
import EstimateCard from '../components/EstimateCard';

const estimates = [
  { vehicle: 'Sedan Car', estimate: 1200 },
  { vehicle: 'SUV Car', estimate: 1800 },
  { vehicle: 'Motorcycle', estimate: 600 },
  { vehicle: 'Electric Car', estimate: 1500 },
];

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-3d">Vehicle Estimates Dashboard</h1>
      <p>Overview of estimated service costs for different vehicles.</p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {estimates.map((item, index) => (
          <EstimateCard key={index} vehicle={item.vehicle} estimate={item.estimate} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
