import React from 'react';

const HomePageSkeleton: React.FC = () => {
  return (
    <div className='absolute inset-0 z-50 bg-black bg-opacity-50 overflow-hidden'>
      <div className='p-24 max-[900px]:p-14 max-[450px]:p-8'>
        {/* Image container */}
        <div className='image-container pt-2 w-full max-md:block flex gap-10 max-[900px]:pt-16 items-stretch'>
          <div className='overlay-skeleton w-[30%] max-md:h-[160px] max-md:w-[160px] max-md:mb-8 rounded-WL max-[900px]:w-[40%]'></div>
          <div className='flex flex-col items-start gap-6 w-[70%] max-md:w-full h-auto max-[900px]:w-[60%] min-h-full'>
            <div className='overlay-skeleton w-full h-40'></div>
            <div className='overlay-skeleton w-full h-32'></div>
            <div className='flex gap-6 gap-y-4 justify-between flex-wrap w-full'>
              <div className='overlay-skeleton w-32 h-12'></div>
              <div className='overlay-skeleton w-32 h-12'></div>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-10 mt-10 max-[1280px]:flex-wrap revezed'>
          {/* Left blocks */}
          <div className='flex flex-nowrap flex-col max-[1280px]:flex-row max-[1280px]:flex-wrap justify-between gap-10 w-[40%] max-[1280px]:w-[100%]'>
            <div className='overlay-skeleton w-full h-96 rounded-3xl'></div>
            <div className='overlay-skeleton w-full h-96 rounded-3xl'></div>
            <div className='overlay-skeleton w-full h-20 rounded-3xl'></div>
          </div>

          {/* Projects block */}
          <div className='overlay-skeleton w-[60%] max-[1280px]:w-[100%] h-[600px] rounded-3xl'></div>
        </div>

        {/* Slider skeleton */}
        <div className='mt-10 overlay-skeleton h-40 rounded-3xl'></div>

        {/* Footer skeleton */}
        <footer className='mt-10 pt-10'>
          <div className='overlay-skeleton w-full h-64 rounded-3xl'></div>
        </footer>
      </div>
    </div>
  );
};

export default HomePageSkeleton;
