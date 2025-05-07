import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Sedan Car', price: 25000 },
  { id: 2, name: 'SUV Car', price: 35000 },
  { id: 3, name: 'Motorcycle', price: 15000 },
  { id: 4, name: 'Electric Car', price: 45000 },
];

const Products = () => {
  return (
    <div className="container">
      <h1 className="text-3d">Products</h1>
      <div>
        {products.map(product => (
          <div key={product.id} className="card card-3d" style={{ marginBottom: '15px' }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toLocaleString()}</p>
            <Link to={`/products/${product.id}`}>
              <button className="button-3d">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
