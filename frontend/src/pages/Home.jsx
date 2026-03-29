import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
        const { data } = await axios.get(`${baseUrl}/api/products`);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Aquaponics Catalog</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product._id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '250px' }}>
              <img src={product.imageUrl} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button style={{ backgroundColor: '#2c5e3f', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
