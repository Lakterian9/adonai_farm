// Mobile test configuration
// This script automatically enables localStorage mode for mobile devices
(function() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const isFileProtocol = window.location.protocol === 'file:';
  
  if (isMobile || isFileProtocol || !navigator.onLine) {
    localStorage.setItem('use-local-storage', 'true');
    console.log('📱 Mobile/offline mode detected - using localStorage backend');
  }
  
  // Add mobile-specific optimizations
  if (isMobile) {
    document.documentElement.classList.add('mobile-device');
    
    // Optimize for mobile performance
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }
})();
