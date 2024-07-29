import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const Slider = ({ className = '' }) => {
  return (
    <div className={clsx('carousel-container', className)}>
      <div className='carousel-track'>
        {[
          'htmllog',
          'csslog',
          'jslog',
          'reactlog',
          'nodejslog',
          'typelog',
          'phplog',
          'sasslog',
          'taillog',
          'boostraplog',
          'figmall',
          'photolog',
          'mongodblog',
          'sqlog',
          'firebaselog',
          'htmllog',
          'csslog',
          'jslog',
          'reactlog',
          'nodejslog',
          'typelog',
          'phplog',
          'sasslog',
          'taillog',
          'boostraplog',
          'figmall',
          'photolog',
          'mongodblog',
          'sqlog',
          'firebaselog',
        ].map((src) => (
          <div key={src} className='carousel-slide'>
            <Image
              src={`/animText/${src}.png`}
              width='1000'
              height='1000'
              alt={src}
              className='masked-image object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
