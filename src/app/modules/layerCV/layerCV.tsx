import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import { Typography } from '@/app/modules/typography/typography';

interface LayerCVProps {
  title: string;
  description?: string;
  date?: string;
  className?: string;
  shortV?: boolean;
  iCon?: string;
}

const LayerCV: React.FC<LayerCVProps> = ({ title, description, date, className, shortV, iCon }) => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      const maxHeight = parseFloat(window.getComputedStyle(element).height);
      const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
      const lines = maxHeight / lineHeight;
      if (element.scrollHeight > maxHeight) {
        const text = description || '';
        const words = text.split(' ');
        let truncatedText = '';
        for (const word of words) {
          if (truncatedText.length > 0 && (truncatedText + ' ' + word).length > lines * 30) {
            truncatedText += ' ...';
            break;
          }
          truncatedText += ' ' + word;
        }
        element.textContent = truncatedText.trim();
      }
    }
  }, [description]);

  return (
    <div
      className={`flex flex-col gap-1 conthover flex-nowrap justify-start items-start expLine hover:bg-[#ffffff10] max-[900px]:py-4 p-4 px-4 ${className}`}
    >
      {/* Contenu principal avec conthover sur la div parent */}
      <div className='flex justify-between w-full items-center gap-3 relative group'>
        {/* Image à afficher au survol */}
        {iCon && (
          <Image
            src={iCon}
            width={50}
            height={50}
            alt='Icon'
            className='h-6 w-6 object-cover rounded-full absolute top-0 left-0 ml-0 group-hover:block fade-in'
          />
        )}

        {/* Contenu principal avec titre */}
        <div className='flex items-center gap-3'>
          <Typography
            theme='gray'
            weight='medium'
            variant='body-lg'
            component='span'
            fontFamily='ClashDisplay'
            className={classnames({ 'transition-transform ease-in-out duration-200': iCon })}
          >
            {title}
          </Typography>
        </div>
        {date && (
          <Typography
            theme='gray'
            weight='light'
            variant='body-sm'
            component='span'
            fontFamily='ClashDisplay'
            className='text-right'
          >
            {date}
          </Typography>
        )}
      </div>

      {/* Description et date */}
      <div className='w-full flex justify-between items-end gap-x-8' ref={descriptionRef}>
        {description && (
          <Typography
            theme='gray'
            weight='extralight'
            variant='body-base'
            component='span'
            fontFamily='Montserrat'
            className={` ${shortV ? 'limitedtext' : ''}`}
          >
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default LayerCV;
