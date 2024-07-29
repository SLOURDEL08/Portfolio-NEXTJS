import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const Slider = ({ className = '' }) => {
  return (
    <div className={clsx('carousel-container', className)}>
      <div className='carousel-track'>
        {[
          'html',
          'css',
          'sass',
          'tailwind',
          'bootstrap',
          'js',
          'php',
          'react',
          'nodejs',
          'ts',
          'mongo',
          'sql',
          'firebase',
          'fig',
          'photoshop',
        ].map((src) => (
          <div key={src} className='carousel-slide'>
            <div className='image-wrapper'>
              <Image
                src={`/slider/${src}.png`}
                width='1000'
                height='1000'
                alt={src}
                className='masked-image object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
