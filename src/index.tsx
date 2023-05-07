import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style/global.css';
import './assets/style/font.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Main from './pages/main';
import Login from './pages/auth/login';
import App from './App';
import Reset from './pages/auth/reset';
import Register from './pages/auth/register';
import Mypage from './pages/auth/mypage';
import EmailConfirm from './pages/auth/email-confirm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <Main /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/reset', element: <Reset /> },
      { path: '/auth/mypage', element: <Mypage /> },
      { path: '/auth/email-confirm', element: <EmailConfirm /> },
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
