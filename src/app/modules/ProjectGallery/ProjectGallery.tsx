import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: {
    fr: string;
    en: string;
    es: string;
  };
  symbol: string;
  categories: string[];
  tags: string[];
  link: string;
  hoverBackgroundColor: string;
  repoUrl: string;
  pageUrl: string;
  gallery: {
    topleft: string;
    topright: string;
    big: string;
    botright: string;
    botleft: string;
    vertical: string;
  };
}

const ProjectGallery: React.FC<{ project: Project }> = ({ project }) => {
  const [activeImage, setActiveImage] = useState(project.gallery.big);

  const galleryImages = [
    project.gallery.big,
    project.gallery.topleft,
    project.gallery.topright,
    project.gallery.botright,
    project.gallery.botleft,
    project.gallery.vertical,
  ];

  return (
    <div className='gallery-block w-full flex flex-col gap-8'>
      <div className='main-image-container w-full h-[400px] relative rounded-3xl overflow-hidden'>
        <Image
          src={activeImage}
          layout='fill'
          objectFit='cover'
          alt='Main gallery image'
          className='transition-all duration-300 ease-in-out object-top object-cover'
        />
        <div className='dots-container left-1/2 -translate-x-1/2 bottom-6 absolute flex justify-center gap-3 my-2'>
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className={`w-10 h-2 rounded-full transition-all duration-300 ${
                activeImage === image ? 'ovhea' : 'bg-gray-400/40 hover:bg-gray-400'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className='thumbnail-container overflow-hidden  '
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className='inline-flex  gap-10'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer w-[180px] h-[135px] relative rounded-2xl overflow-hidden  transition-all duration-300 ${
                activeImage === image ? ' ' : ''
              }`}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image}
                layout='fill'
                objectFit='cover'
                alt={`Gallery thumbnail ${index + 1}`}
                className='transition-all duration-300 ease-in-out hover:scale-110'
              />
              {activeImage !== image && (
                <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm grayscale transition-all duration-300 ease-in-out hover:opacity-0'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
