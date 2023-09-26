// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScene from './components/HomeScene';
import GameScene from './components/GameScene';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScene />} />
        <Route path="/game" element={<GameScene />} />
      </Routes>
    </Router>
  );
};

export default App;
