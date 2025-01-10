import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  onChange: (rating: number) => void;
  initialValue?: number;
}

const StarRatingNew: React.FC<RatingProps> = ({ onChange, initialValue = 0 }) => {
  const [rating, setRating] = useState(initialValue);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className='flex w-36 h-full items-center'>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-full w-auto aspect-square cursor-pointer transition-all duration-200
            ${
              (hover || rating) >= star
                ? 'fill-white stroke-white opacity-80'
                : 'stroke-white/20 opacity-40'
            }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleClick(star)}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
};

export default StarRatingNew;
