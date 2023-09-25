import React, { ChangeEvent, useState } from 'react';

type VolumeControlProps = {
  onVolumeChange: (value:number) => void;
};

const VolumeControl: React.FC<VolumeControlProps> = ({ onVolumeChange }) => {
  const [volume, setVolume] = useState(1); // 初期後リューム100%

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    onVolumeChange(newVolume);
  };
    
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.1"
      value={volume}
      onChange={handleChange}
    />
  )
}

export default VolumeControl