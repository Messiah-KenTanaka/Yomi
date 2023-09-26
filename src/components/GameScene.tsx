import React, { useEffect } from 'react';
import Phaser, { AUTO } from 'phaser';
import './GameScene.scss';

const GameScene: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: AUTO,
      height: AUTO,
      scene: {
        preload: function() {
          // ここにアセットのプリロードロジックを記述
        },
        create: function() {
          // シーンが作成されたときのロジックを記述
        }
      },
      parent: "game-scene-container"  // ゲームがレンダリングされるDOM要素のID
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div id="game-scene-container">
      <div className='Game'>
        GameSceneです
      </div>
    </div>
  );
}

export default GameScene;
