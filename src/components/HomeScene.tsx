import React, { useEffect } from 'react';
import Phaser, { AUTO } from 'phaser';
import './HomeScene.scss';
import clickSound from '../assets/sounds/effects/startButton.mp3';
import VolumeControl from './VolumeControl';

const HomeScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: AUTO,
      height: AUTO,
      scene: {
        preload: function() {
          console.log('preload');
        },
        create: function() {
          console.log('create');
        }
      },
      parent: "phaser-game"
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  const audio = new Audio(clickSound); // 効果音を初期化

	const handleVolumeChange =  (value: number) => {
		audio.volume = value;
	}

  const handlePlaySound = () => {
    audio.play();
  };

  return (
    <div id="phaser-game">

      <div className="AppHome min-h-screen flex flex-col justify-between">
        <div className='p-5'>
          <h1 className="text-4xl font-bold leading-tight py-3">黄泉</h1>
          <p className="text-2xl">-地獄からの誘い-</p>
        </div>

        <div className='flex-grow flex items-center justify-center'>
          <div className='p-5 shadow-lg rounded'>
            <p className="text-2xl mb-2" onClick={handlePlaySound}>はじめる</p>
            <p className="text-2xl" onClick={handlePlaySound}>設定</p>
            <VolumeControl onVolumeChange={handleVolumeChange} />
          </div>
        </div>
      </div>

    </div>
  );
};


export default HomeScene;
