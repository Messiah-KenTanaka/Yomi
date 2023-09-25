import React from 'react';
import './GameHome.scss';
import clickSound from '../assets/sounds/effects/startButton.mp3';

const GameHome = () => {
	const audio = new Audio(clickSound);

  const handlePlaySound = () => {
    audio.play();
  };
  return (
    <div className="AppHome min-h-screen flex flex-col justify-between">
			{/* タイトル */}
      <div className='p-5'>
        <h1 className="text-4xl font-bold leading-tight py-3">黄泉</h1>
        <p className="text-2xl">-地獄からの誘い-</p>
      </div>

      <div className='flex-grow flex items-center justify-center'>
        <div className='p-5 shadow-lg rounded'>
          <p className="text-2xl mb-2" onClick={handlePlaySound}>はじめる</p>
          <p className="text-2xl" onClick={handlePlaySound}>設定</p>
        </div>
      </div>
    </div>
  )
}

export default GameHome;
