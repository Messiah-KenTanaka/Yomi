import React, { useEffect, useRef, useState } from 'react';
import Phaser, { AUTO } from 'phaser';
import './HomeScene.scss';
import SettingsModal from './SettingsModal';
import titleSound from '../assets/sounds/effects/titleButton.mp3';
import startSound from '../assets/sounds/effects/startButton.mp3';
import settingSound from '../assets/sounds/effects/settingButton.mp3';

const HomeScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: AUTO,
      height: AUTO,
      scene: {
        preload: function() {
        },
        create: function() {
        }
      },
      parent: "home-scene-game"
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);

  // 効果音のマッピング
  const soundEffects = useRef({
    title: new Audio(titleSound),
    start: new Audio(startSound),
    setting: new Audio(settingSound),
  }).current;

  // 効果音を再生する関数
  const handlePlaySound = (soundKey: keyof typeof soundEffects) => {
    soundEffects[soundKey].play();
  };

  // 設定クリック
  const handleSettingClick = () => {
    handlePlaySound('setting'); // 効果音
    handleOpenModal(); // 設定モーダルOpen
  }

  // 音量の変更
  const handleVolumeChange =  (value: number) => {
		Object.values(soundEffects).forEach(audioInstance => {
      audioInstance.volume = value;
    });
    setCurrentVolume(value); // 現在の音量を更新
	}

  // 設定モーダル
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="home-scene-game">

      <SettingsModal isOpen={isModalOpen} onClose={handleCloseModal} onVolumeChange={handleVolumeChange} volume={currentVolume} />

      <div className="AppHome min-h-screen flex flex-col justify-between">
        <div className='p-5' onClick={() => handlePlaySound('title')}>
          <h1 className="text-4xl font-bold leading-tight py-3">黄泉</h1>
          <p className="text-2xl">-地獄からの誘い-</p>
        </div>

        <div className='flex-grow flex items-center justify-center'>
          <div className='p-5 shadow-lg rounded'>
            <p className="text-2xl mb-2" onClick={() => handlePlaySound('start')}>はじめる</p>
            <p className="text-2xl" onClick={handleSettingClick}>設定</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeScene;
