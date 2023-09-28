import React, { useContext, useEffect, useState } from 'react';
import Phaser from 'phaser';
import './GameScene.scss';
import { SettingsContext } from '../SettingsContext';
import backgroundImage from '../assets/images/background/washitu_01.png';
import SettingsIcon from '../assets/images/kokeshi.gif';
import FrameImage from '../assets/images/materials/frame.gif';

const GameScene: React.FC = () => {
  
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

  const { soundEffects, handleOpenModal } = useContext(SettingsContext)!;

  // 設定モーダル
  const handlSettings = () => {
    soundEffects.setting.play();
    handleOpenModal();
  }

  // ストーリーのコメント
  const [storyIndex, setStoryIndex] = useState<number>(0);
  const [showStory, setShowStory] = useState(true);
  const storyComments = [
    "シンディ「ここはどこ・・・？」",
    "シンディ「気味が悪い」",
    "シンディ「閉じ込められているみたい」",
  ];

  // フレーム・コメントをクリックした時の処理
  const handleStoryClick = () => {
    if (storyIndex < storyComments.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else {
      setShowStory(false);
    }
  }

  return (
    <div id="game-scene-container" className="relative">

      <img
        src={SettingsIcon}
        className="absolute top-0 left-0 m-2 m-2 w-10 h-12"
        alt='設定画像'
        onClick={ handlSettings }
      >
      </img>

      {showStory && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-[600px] h-[200px]" onClick={handleStoryClick}>
          <img
            src={FrameImage}
            className="absolute w-full h-full"
            alt='フレーム画像'
          ></img>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-[580px] h-[180px] flex items-center justify-center text-white text-lg">
            {storyComments[storyIndex]}
          </div>
        </div>
      )}
    </div>
  );
}

export default GameScene;
