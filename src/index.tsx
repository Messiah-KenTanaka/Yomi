import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SettingsProvider } from './SettingsContext';
import './index.css';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
    {/* <ClickEffect /> */}
    {/* TODO:クリックエフェクトはSP時に挙動がおかしいバグを発見したので一度コメントアウト */}
  </React.StrictMode>
);
