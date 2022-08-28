import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList = () => {
  let products = useSelector((state) => state.product.productList);
  return (
    <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8'>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductList;
