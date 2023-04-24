import React, { useEffect } from 'react';
import './assets/style/global.css';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
