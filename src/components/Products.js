import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ASSETS = {
    products: {
        farroad: "/assets/images/product-farroad.jpg",
        duro: "/assets/images/product-duro.jpg",
        threeA: "/assets/images/product-three-a.jpg"
    }
};

const productsData = [
    {id:1, name:'FARROAD', price:'اتصل للسعر', img: ASSETS.products.farroad, desc:'الأداء الرياضي الفائق والتحكم المطلق. مثالية للسيارات الرياضية والفاخرة.'},
    {id:2, name:'DURO', price:'اتصل للسعر', img: ASSETS.products.duro, desc:'المتانة التي تدوم. مصممة لتقاوم أصعب الظروف وتوفر عمراً افتراضياً طويلاً.'},
    {id:3, name:'THREE-A', price:'اتصل للسعر', img: ASSETS.products.threeA, desc:'الجودة الموثوقة والقيمة الذكية. توفر قيادة هادئة ومريحة لمختلف السيارات.'}
];

function Products() {
  const [query, setQuery] = useState('');
  const filtered = productsData.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="products" className="products container">
      <h3 className="section-title"><span>علامات تجارية نثق بها</span></h3>
      <div className="product-search">
        <input placeholder="ابحث باسم العلامة التجارية..." value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div className="products-grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

export default Products;