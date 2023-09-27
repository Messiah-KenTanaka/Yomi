import React, { createContext, useState, ReactNode } from 'react';
import SettingsModal from './components/SettingsModal';

interface SettingsContextProps {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleVolumeChange: (value: number) => void;
  currentVolume: number;
}

export const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleVolumeChange = (value: number) => setCurrentVolume(value);

  return (
    <SettingsContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal, handleVolumeChange, currentVolume }}>
      {children}
      {isModalOpen && <SettingsModal isOpen={isModalOpen} onClose={handleCloseModal} onVolumeChange={handleVolumeChange} volume={currentVolume} />}
    </SettingsContext.Provider>
  );
};
