import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';

const ASSETS = {
    products: {
        farroad: "/assets/images/product-farroad.jpg",
        duro: "/assets/images/product-duro.jpg",
        threeA: "/assets/images/product-three-a.jpg"
    }
};

function Products() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  const productsData = [
    {id:1, name:'FARROAD', price: t('product_price'), img: ASSETS.products.farroad, desc: t('product_farroad_desc')},
    {id:2, name:'DURO', price: t('product_price'), img: ASSETS.products.duro, desc: t('product_duro_desc')},
    {id:3, name:'THREE-A', price: t('product_price'), img: ASSETS.products.threeA, desc: t('product_threea_desc')}
  ];

  const filtered = productsData.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="products" className="products container">
      <h3 className="section-title"><span>{t('products_title')}</span></h3>
      <div className="product-search">
        <input placeholder={t('product_search_placeholder')} value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div className="products-grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

export default Products;
