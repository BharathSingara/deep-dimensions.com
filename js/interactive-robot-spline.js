'use client';

import React, { Suspense, lazy } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import { createRoot } from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/client/+esm';

const Spline = lazy(() => import('https://unpkg.com/@splinetool/react-spline?module'));

export function InteractiveRobotSpline({ scene, className }) {
  return (
    React.createElement(Suspense, {
      fallback: React.createElement('div', { className: `w-full h-full flex items-center justify-center bg-gray-900 text-white ${className || ''}` },
        React.createElement('svg', { className: 'animate-spin h-5 w-5 text-white mr-3', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24' },
          React.createElement('circle', { className: 'opacity-25', cx: '12', cy: '12', r: '10', stroke: 'currentColor', strokeWidth: '4' }),
          React.createElement('path', { className: 'opacity-75', fill: 'currentColor', d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z' })
        )
      )
    },
      React.createElement(Spline, { scene, className })
    )
  );
}

const rootElement = document.getElementById('robot-root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    React.createElement(InteractiveRobotSpline, {
      scene: rootElement.dataset.scene,
      className: rootElement.getAttribute('class')
    })
  );
}
