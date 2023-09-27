import React, { createContext, useState, ReactNode, useRef, useEffect } from 'react';
import SettingsModal from './components/SettingsModal';
import titileSound from './assets/sounds/effects/titleButton.mp3';
import startButton from './assets/sounds/effects/startButton.mp3';
import settingButton from './assets/sounds/effects/settingButton.mp3';

interface SettingsContextProps {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleVolumeChange: (value: number) => void;
  currentVolume: number;
  soundEffects: Record<string, HTMLAudioElement>;
}

export const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);

  const soundEffects = useRef({
    title: new Audio(titileSound),
    start: new Audio(startButton),
    setting: new Audio(settingButton),
  }).current;

  useEffect(() => {
    Object.values(soundEffects).forEach(sound => {
      sound.volume = currentVolume;
    });
  }, [currentVolume, soundEffects]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleVolumeChange = (value: number) => setCurrentVolume(value);

  return (
    <SettingsContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal, handleVolumeChange, currentVolume, soundEffects }}>
      {children}
      {isModalOpen && <SettingsModal isOpen={isModalOpen} onClose={handleCloseModal} onVolumeChange={handleVolumeChange} volume={currentVolume} />}
    </SettingsContext.Provider>
  );
};
