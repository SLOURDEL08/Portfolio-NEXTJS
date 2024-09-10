import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@/app/modules/typography/typography';

// Hook personnalisé pour détecter la luminosité
const useBrightnessDetection = (imageUrl: string) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let brightness = 0;
        for (let i = 0; i < imageData.data.length; i += 4) {
          brightness +=
            (imageData.data[i] * 299 + imageData.data[i + 1] * 587 + imageData.data[i + 2] * 114) /
            1000;
        }
        brightness /= imageData.width * imageData.height;
        setIsDark(brightness < 128);
      }
    };
  }, [imageUrl]);

  return isDark;
};

interface AdaptiveDateOverlayProps {
  date: string;
  imageUrl: string;
}

const AdaptiveDateOverlay: React.FC<AdaptiveDateOverlayProps> = ({ date, imageUrl }) => {
  const isDark = useBrightnessDetection(imageUrl);

  return (
    <div
      className={`absolute top-4 right-4 px-3 py-1 rounded-lg backdrop-filter backdrop-blur-sm
        ${isDark ? 'bg-black/50' : 'bg-white/50'}`}
    >
      <Typography
        theme={isDark ? 'white' : 'black'}
        weight='medium'
        variant='body-base'
        component='p'
        fontFamily='ClashDisplay'
        className={isDark ? 'text-shadow-sm' : ''}
      >
        {date}
      </Typography>
    </div>
  );
};

export default AdaptiveDateOverlay;
