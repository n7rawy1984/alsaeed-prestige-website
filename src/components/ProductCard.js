import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <div className="product-body">
        <h4>{product.name}</h4>
        <p className="desc">{product.desc}</p>
        <div className="row between">
          <strong className="price">{product.price}</strong>
          <a className="btn small" href="tel:+97142674488">اتصل للشراء</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;