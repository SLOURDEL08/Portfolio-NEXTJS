import React, { useState } from 'react';
import Image from 'next/image';
import { useImageViewer } from '@/app/modules/ImageViewer/ViewerContext'; // Assurez-vous que le chemin d'importation est correct

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
  const [activeImage, setActiveImage] = useState(project.image);
  const { openViewer } = useImageViewer();

  const galleryImages = [
    project.image,
    project.gallery.big,
    project.gallery.topleft,
    project.gallery.topright,
    project.gallery.botright,
    project.gallery.botleft,
    project.gallery.vertical,
  ];

  const handleMainImageClick = () => {
    openViewer(galleryImages, galleryImages.indexOf(activeImage));
  };

  const handleThumbnailClick = (image: string) => {
    setActiveImage(image);
  };

  return (
    <div className='gallery-block w-full flex flex-col gap-10'>
      <div
        className='main-image-container w-full h-[400px] relative rounded-3xl overflow-hidden cursor-pointer'
        onClick={handleMainImageClick}
      >
        <Image
          src={activeImage}
          layout='fill'
          objectFit='cover'
          alt='Main gallery image'
          className='transition-all duration-300 ease-in-out object-top object-cover'
        />

        <div>
          <div className='bgleft-gradient-gallery w-80 h-full flex items-center absolute left-0 top-1/2 -translate-y-1/2'>
            <Image alt='icon next' width={60} height={60} src='/larrow.png' className='m-auto' />
          </div>
          <div className='bgright-gradient-gallery justify-end pr-20 z-50 w-80 m h-full flex items-center  absolute right-0 top-1/2 -translate-y-1/2'>
            <Image alt='icon next' width={60} height={60} src='/rarrow.png' className='' />
          </div>
        </div>

        <div className='dots-container left-1/2 -translate-x-1/2 bottom-6 absolute flex justify-center gap-4 my-2'>
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleThumbnailClick(image);
              }}
              className={`w-10 p-0 h-3 rounded-full transition-all duration-300 ${
                activeImage === image ? 'ovhea' : 'bg-black/60 hover:bg-[#7A24E8]'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className='thumbnail-container overflow-hidden overflow-x-auto'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className='inline-flex gap-10'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer w-[180px] h-[135px] relative rounded-2xl overflow-hidden transition-all duration-300 ${
                activeImage === image ? '' : ''
              }`}
              onClick={() => handleThumbnailClick(image)}
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
