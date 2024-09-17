import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  initialIndex,
  onClose,
  onIndexChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  }, [images.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') handlePrev();
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'Escape') onClose();
    },
    [handlePrev, handleNext, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className='fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center'>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors'
        aria-label='Close viewer'
      >
        &times;
      </button>
      <button
        onClick={handlePrev}
        className='absolute left-4 text-white text-6xl hover:text-gray-300 transition-colors'
        aria-label='Previous image'
      >
        &#8249;
      </button>
      <div className='relative w-[80%] h-[80%] -mt-10'>
        <Image
          src={images[currentIndex]}
          layout='fill'
          objectFit='contain'
          alt={`Fullscreen image ${currentIndex + 1}`}
          priority
        />
      </div>
      <button
        onClick={handleNext}
        className='absolute right-4 text-white text-6xl hover:text-gray-300 transition-colors'
        aria-label='Next image'
      >
        &#8250;
      </button>
      <div className='absolute bottom-6 p-3 rounded-xl bg-[#ffffff15] left-1/2 transform -translate-x-1/2 text-white font-CD font-medium'>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageViewer;
