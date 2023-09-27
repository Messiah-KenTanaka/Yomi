import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScene from './components/HomeScene';
import GameScene from './components/GameScene';
import { SettingsProvider } from './SettingsContext';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SettingsProvider><HomeScene /></SettingsProvider>} />
        <Route path="/game" element={<SettingsProvider><GameScene /></SettingsProvider>} />
      </Routes>
    </Router>
  );
};

export default App;
