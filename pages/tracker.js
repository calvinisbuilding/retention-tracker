import { useState } from 'react';

export default function TrackerEmbed() {
  const [trackingData, setTrackingData] = useState([]);
  const [dropoutRate, setDropoutRate] = useState(0);

  const simulateTracking = (action) => {
    const event = {
      action,
      timestamp: new Date().toLocaleTimeString(),
      id: Math.random()
    };
    setTrackingData([...trackingData, event]);
    
    if (action === 'dropout') {
      setDropoutRate(Math.min(100, dropoutRate + 10));
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '30px', color: '#333' }}>Tracking Test</h1>
        
        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginTop: 0 }}>Simulate User Actions</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => simulateTracking('view')}
              style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              View Content
            </button>
            <button
              onClick={() => simulateTracking('progress')}
              style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Progress
            </button>
            <button
              onClick={() => simulateTracking('complete')}
              style={{ padding: '10px 20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Complete
            </button>
            <button
              onClick={() => simulateTracking('dropout')}
              style={{ padding: '10px 20px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Dropout
            </button>
          </div>
        </div>

        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginTop: 0 }}>Live Tracking Data</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Dropout Rate: <strong style={{ color: '#dc3545', fontSize: '18px' }}>{dropoutRate}%</strong></p>
          
          {trackingData.length === 0 ? (
            <p style={{ color: '#999' }}>Click buttons above to generate tracking events</p>
          ) : (
            <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #eee', borderRadius: '6px' }}>
              {trackingData.map((event) => (
                <div key={event.id} style={{ padding: '12px', borderBottom: '1px solid #eee', fontSize: '14px' }}>
                  <span style={{ fontWeight: 'bold', color: '#333' }}>{event.action.toUpperCase()}</span>
                  <span style={{ color: '#999', marginLeft: '10px' }}>{event.timestamp}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
