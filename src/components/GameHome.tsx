import React from 'react';
import './GameHome.scss';

const GameHome = () => {
  return (
    <div className="AppHome min-h-screen flex flex-col justify-between">
      <div className='p-5'>
        <h1 className="text-4xl font-bold leading-tight py-3">黄泉</h1>
        <p className="text-2xl">-地獄からの誘い-</p>
      </div>
      <div className='flex-grow flex items-center justify-center'>
        <div className='p-5 shadow-lg rounded'>
          <p className="text-2xl mb-2">はじめる</p>
          <p className="text-2xl">設定</p>
        </div>
      </div>
    </div>
  )
}

export default GameHome;
