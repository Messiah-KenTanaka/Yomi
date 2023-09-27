import React, { useContext, useEffect } from 'react';
import Phaser from 'phaser';
import './GameScene.scss';
import { SettingsContext } from '../SettingsContext';
import backgroundImage from '../assets/images/background/washitu_01.png';
import SettingsIcon from '../assets/images/kokeshi.gif';

const GameScene: React.FC = () => {
  const { handleOpenModal } = useContext(SettingsContext)!;
  useEffect(() => {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: canvasWidth,
      height: canvasHeight,
      backgroundColor: '#000000',
      scene: {
        preload: function() {
          this.load.image('background', backgroundImage);
        },
        create: function() {
          const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
          const scaleX = canvasWidth / bg.width;
          const scaleY = canvasHeight / bg.height;
          const scale = Math.min(scaleX, scaleY);
          bg.setScale(scale).setOrigin(0.5, 0.5).setPosition(canvasWidth / 2, canvasHeight / 2);
        }
      },
      parent: 'game-scene-container'
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div id="game-scene-container" className="relative">

      <img
        src={SettingsIcon}
        className="absolute top-0 left-0 m-2 m-2 w-10 h-12"
        alt='画像'
        onClick={ handleOpenModal }
      >
      </img>
    </div>
  );
}

export default GameScene;
