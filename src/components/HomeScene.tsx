import React, { useContext, useEffect, useState } from 'react';
import Phaser, { AUTO } from 'phaser';
import { Link } from 'react-router-dom';
import './HomeScene.scss';
import { SettingsContext } from '../SettingsContext';
import SynopsisModal from './SynopsisModal';

const HomeScene: React.FC = () => {
  const { handleOpenModal } = useContext(SettingsContext)!;
  
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

  const [isSynopsisModalOpen, setIsSynopsisModalOpen] = useState(false);

  // あらすじモーダル
  const handleOpenSynopsisModal = () => {
    setIsSynopsisModalOpen(true);
  };

  const handleCloseSynopsisModal = () => {
    setIsSynopsisModalOpen(false);
  };

  return (
    <div id="home-scene-game">

      <SynopsisModal isOpen={isSynopsisModalOpen} onClose={handleCloseSynopsisModal} />
      {/* <SettingsModal isOpen={isModalOpen} onClose={handleCloseModal} onVolumeChange={handleVolumeChange} volume={currentVolume} /> */}

      <div className="AppHome min-h-screen flex flex-col justify-between">
        <div className='p-5'>
          <h1 className="text-4xl font-bold leading-tight py-3">黄泉</h1>
          <p className="text-2xl">-地獄からの誘い-</p>
        </div>

        <div className='flex-grow flex items-center justify-center'>
          <div className='p-5 shadow-lg rounded'>
            <Link to="/game">
              <p className="text-2xl mb-2">はじめる</p>
            </Link>
            <p className="text-2xl mb-2" onClick={handleOpenSynopsisModal}>あらすじ</p>
            <p className="text-2xl" onClick={handleOpenModal}>設定</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeScene;
