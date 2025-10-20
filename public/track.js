(function(){
  const scriptEl = document.currentScript;
  const productId = scriptEl?.getAttribute('data-product-id') || '';
  const productName = scriptEl?.getAttribute('data-product-name') || '';

  function post(path, body){
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        keepalive: true
      }).catch(()=>{});
    } catch(_) {}
  }

  function sendEvent(action, extra){
    post('', {
      productId,
      productName,
      action,
      extra: extra || {},
      ts: new Date().toISOString()
    });
  }

  window.RT = {
    track: sendEvent
  };

  sendEvent('page_view');
  window.addEventListener('beforeunload', function(){
    sendEvent('page_exit');
  });
})();
