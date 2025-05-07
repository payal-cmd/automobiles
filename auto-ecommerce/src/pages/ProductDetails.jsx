import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Sedan Car', price: 25000, description: 'A comfortable sedan car with great mileage.' },
  { id: 2, name: 'SUV Car', price: 35000, description: 'A spacious SUV perfect for family trips.' },
  { id: 3, name: 'Motorcycle', price: 15000, description: 'A fast and stylish motorcycle.' },
  { id: 4, name: 'Electric Car', price: 45000, description: 'Eco-friendly electric car with advanced features.' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found</h2>
        <button className="button-3d" onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-3d">{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toLocaleString()}</p>
      <button className="button-3d" onClick={() => navigate('/cart')}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
