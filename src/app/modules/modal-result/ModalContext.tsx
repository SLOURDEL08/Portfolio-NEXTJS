// ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  searchResults: any[];
  openModal: (results: any[]) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const openModal = (results: any[]) => {
    setSearchResults(results);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchResults([]);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, searchResults, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};