// api.js
export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network error');
  return await response.json();
};

// App.jsx
import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products')
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}
