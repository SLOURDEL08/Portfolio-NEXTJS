import React, { createContext, useState, useContext } from 'react';

interface ImageViewerContextType {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  openViewer: (images: string[], index: number) => void;
  closeViewer: () => void;
  setCurrentIndex: (index: number) => void;
}

const ImageViewerContext = createContext<ImageViewerContextType | undefined>(undefined);

export const ImageViewerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (newImages: string[], index: number) => {
    setImages(newImages);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
  };

  return (
    <ImageViewerContext.Provider
      value={{ isOpen, images, currentIndex, openViewer, closeViewer, setCurrentIndex }}
    >
      {children}
    </ImageViewerContext.Provider>
  );
};

export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (context === undefined) {
    throw new Error('useImageViewer must be used within a ImageViewerProvider');
  }
  return context;
};
