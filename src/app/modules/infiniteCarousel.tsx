import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@/app/modules/typography/typography';

interface InfiniteTagCarouselProps {
  tags: string[];
}

const InfiniteTagCarousel: React.FC<InfiniteTagCarouselProps> = ({ tags }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth / 2);
    }
  }, [tags]);

  return (
    <div className='tag-carousel-container overflow-hidden w-full relative'>
      <div className='fade-overlay left-fade'></div>
      <div className='fade-overlay right-fade'></div>
      <div
        ref={carouselRef}
        className='tag-carousel flex !w-[800px]'
        style={{
          animation: `scrollTags ${tags.length * 2}s linear infinite`,
          width: `${carouselWidth * 2}px`,
        }}
      >
        {[...tags, ...tags].map((tag, index) => (
          <Typography
            key={`${tag}-${index}`}
            theme='graylight'
            weight='regular'
            variant='body-sm'
            component='span'
            fontFamily='Montserrat'
            className='p-2 px-3 rounded-2xl bg-[#ffffff10] whitespace-nowrap mx-2'
          >
            #{tag}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default InfiniteTagCarousel;
