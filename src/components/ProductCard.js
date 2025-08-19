import React from 'react';
import { useTranslation } from 'react-i18next';

function ProductCard({ product }) {
  const { t } = useTranslation();

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} loading="lazy" />
      <div className="product-body">
        <h4>{product.name}</h4>
        <p className="desc">{product.desc}</p>
        <div className="row between">
          <strong className="price">{product.price}</strong>
          <a className="btn small" href="tel:+97142674488">{t('product_buy_cta')}</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
