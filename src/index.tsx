import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import GameHome from './components/GameHome';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* home */}
    <GameHome />
  </React.StrictMode>
);
