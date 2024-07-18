// src/ProductList.js
import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Producto 1', price: '$10' },
  { id: 2, name: 'Producto 2', price: '$20' },
  { id: 3, name: 'Producto 3', price: '$30' },
];

function ProductList() {
  return (
    <div className="ProductList">
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
