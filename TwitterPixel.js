import { useEffect } from 'react';

const useTwitterPixel = (pixelId) => {
  useEffect(() => {
    // Load Twitter Pixel script
    (function (e, t, n, s, u, a) {
      e.twq = e.twq || function () {
        e.twq.exe ? e.twq.exe.apply(e.twq, arguments) : e.twq.queue.push(arguments);
      };
      e.twq.version = '1.1';
      e.twq.queue = [];
      u = t.createElement(n);
      u.async = true;
      u.src = '//static.ads-twitter.com/uwt.js';
      a = t.getElementsByTagName(n)[0];
      a.parentNode.insertBefore(u, a);
    })(window, document, 'script');

    // Initialize Twitter Pixel
    window.twq('init', pixelId);

    // Track initial page view
    window.twq('track', 'PageView');

    const handleRouteChange = (url) => {
      // Track page view for subsequent page changes
      window.twq('track', 'PageView');
    };

    // Add event listener for route changes
    window.addEventListener('routeChangeComplete', handleRouteChange);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, [pixelId]);
};

export default useTwitterPixel;
