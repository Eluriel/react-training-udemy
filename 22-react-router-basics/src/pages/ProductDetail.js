import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const { productId } = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
