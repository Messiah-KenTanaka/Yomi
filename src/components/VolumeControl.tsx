import React, { useEffect, ChangeEvent, useState } from 'react';

type VolumeControlProps = {
  onVolumeChange: (value:number) => void;
  volume: number;
};

const VolumeControl: React.FC<VolumeControlProps> = ({ onVolumeChange, volume }) => {
  const [currentVolume, setCurrentVolume] = useState(volume);

  useEffect(() => {
    setCurrentVolume(volume);
  }, [volume]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setCurrentVolume(newVolume);
    onVolumeChange(newVolume);
  };
    
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.1"
      value={currentVolume}
      onChange={handleChange}
    />
  )
}

export default VolumeControl