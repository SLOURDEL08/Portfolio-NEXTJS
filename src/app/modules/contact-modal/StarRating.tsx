import React, { useState } from 'react';

interface StarRatingProps {
  onChange: (rate: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onChange }) => {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    onChange(rate); // Passe la note sélectionnée au parent
  };

  return (
    <div className='flex gap-2 items-center'>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          onClick={() => handleRating(star)}
          xmlns='http://www.w3.org/2000/svg'
          className={`h-8 w-6 cursor-pointer ${
            star <= rating ? 'text-yellow-500' : 'text-gray-400'
          }`}
          fill={star <= rating ? 'currentColor' : 'none'}
          viewBox='0 5 24 24'
          stroke='currentColor'
          strokeWidth={1}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.283 7.013a1 1 0 00.95.69h7.392c.958 0 1.356 1.23.586 1.786l-5.99 4.37a1 1 0 00-.364 1.118l2.283 7.013c.3.921-.755 1.688-1.54 1.118l-5.99-4.37a1 1 0 00-1.176 0l-5.99 4.37c-.784.57-1.839-.197-1.54-1.118l2.283-7.013a1 1 0 00-.364-1.118l-5.99-4.37c-.77-.556-.372-1.786.586-1.786h7.392a1 1 0 00.95-.69l2.283-7.013z'
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
