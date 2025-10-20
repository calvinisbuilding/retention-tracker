import { useState, useEffect } from 'react';

export default function CreatorDashboard() {
  const [products, setProducts] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', modules: 3 });

  const addProduct = () => {
    if (newProduct.name) {
      setProducts([...products, { id: Date.now(), ...newProduct, created: new Date().toLocaleDateString() }]);
      setNewProduct({ name: '', modules: 3 });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '30px', color: '#333' }}>Creator Dashboard</h1>
        
        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginTop: 0 }}>Add New Product</h2>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Product/Course Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
            />
            <input
              type="number"
              min="1"
              max="20"
              value={newProduct.modules}
              onChange={(e) => setNewProduct({ ...newProduct, modules: parseInt(e.target.value) })}
              style={{ width: '100px', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
            />
            <button
              onClick={addProduct}
              style={{ padding: '10px 20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}
            >
              Add Product
            </button>
          </div>
        </div>

        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginTop: 0, marginBottom: '20px' }}>Your Products</h2>
          {products.length === 0 ? (
            <p style={{ color: '#999' }}>No products yet. Add one above to get started.</p>
          ) : (
            <div>
              {products.map((product) => (
                <div key={product.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{product.name}</h3>
                  <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
                    {product.modules} modules • Added {product.created}
                  </p>
                  <button
                    style={{ padding: '8px 16px', background: '#764ba2', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
                    onClick={() => alert(`Tracking code for ${product.name}:\n\n<script src="https://tracker.example.com/track.js" data-product-id="${product.id}"></script>`)}
                  >
                    Get Tracking Code
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
