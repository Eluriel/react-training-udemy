import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { productId } = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{productId}</p>
    </>
  );
}
