import { useState } from 'react';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>Retention Tracker</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Track where your customers drop off and fix your biggest retention bottlenecks.</p>
        
        <div style={{ marginBottom: '20px' }}>
          <a href="/creator" style={{ display: 'inline-block', background: '#667eea', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', marginRight: '10px' }}>
            Creator Dashboard
          </a>
          <a href="/tracker" style={{ display: 'inline-block', background: '#764ba2', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
            Embed Tracker
          </a>
        </div>
        
        <div style={{ marginTop: '40px', background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Getting Started:</h3>
          <ol style={{ color: '#666', lineHeight: '1.8' }}>
            <li>Go to Creator Dashboard</li>
            <li>Add your products/courses</li>
            <li>Get the tracking code to embed in your content</li>
            <li>Track where customers drop off</li>
            <li>Fix bottlenecks and improve retention</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
