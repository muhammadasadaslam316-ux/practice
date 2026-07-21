import React from 'react';

export default function ProductList({ products }) {
  return (
    <div className="productList">
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
