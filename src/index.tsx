import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style/global.css';
import './assets/style/font.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Main from './pages/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, path: '/', element: <p>홈</p> },
      { path: '/auth/login', element: <p>홈</p> },
      { path: '/auth/register', element: <p>홈</p> },
      { path: '/', element: <p>홈</p> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
