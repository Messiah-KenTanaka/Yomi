import React from 'react'
import VolumeControl from './VolumeControl'
import { Link } from 'react-router-dom';

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onVolumeChange: (volume: number) => void;
  volume: number;
};

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onVolumeChange, volume}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <Link to="/">
          <p className="text-black pb-5" onClick={onClose}>ホームに戻る</p>
        </Link>

        <div className="flex items-center">
          <span className="text-black pr-3">効果音</span>
          <VolumeControl onVolumeChange={onVolumeChange} volume={volume}/>
        </div>
        <button className="text-black pt-5" onClick={onClose}>閉じる</button>
      </div>
    </div>
  )
}

export default SettingsModal