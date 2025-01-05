import React from 'react';
import { Typography } from '../typography/typography';
import Image from 'next/image';

// Define the available font families and font weights for tags
const TAGS = ['#France', '#Europe', '#World', '#Remote', '#Freelance', '#Front-End', '#Back-End'];
const FONTS: Array<'ClashDisplay' | 'Inter' | 'SanFrancisco' | 'Montserrat'> = [
  'ClashDisplay',
  'Inter',
  'SanFrancisco',
  'Montserrat',
];
const WEIGHTS: Array<'bold' | 'light' | 'medium' | 'regular'> = [
  'bold',
  'light',
  'medium',
  'regular',
];
const DURATION = 10000;

// Define image sources for the variants
const IMAGES_FRONT = [
  '/animText/nextjswhitelog.webp',
  '/animText/jslog.webp',
  '/animText/taillog.webp',
  '/animText/figmall.webp',
  '/animText/photolog.webp',
  '/animText/jsonlog.webp',
  '/animText/restlog.webp',
  '/animText/nextjswhitelog.webp',
  '/animText/jslog.webp',
  '/animText/taillog.webp',
  '/animText/figmall.webp',
  '/animText/photolog.webp',
  '/animText/jsonlog.webp',
  '/animText/restlog.webp',
]; // Replace with your actual image paths
const IMAGES_BACK = ['/applelay.webp', '/applelay.webp', '/applelay.webp']; // Replace with your actual image paths

interface InfiniteLoopSliderProps {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean;
}

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({
  children,
  duration,
  reverse = false,
}) => {
  return (
    <div
      className='loop-slider'
      style={
        {
          '--duration': `${duration}ms`,
          '--direction': reverse ? 'reverse' : 'normal',
        } as React.CSSProperties
      }
    >
      <div className='inner gap-6'>
        {children}
        {children}
      </div>
    </div>
  );
};

interface TagProps {
  text: string;
  fontFamily: 'ClashDisplay' | 'Inter' | 'SanFrancisco' | 'Montserrat';
  fontWeight: 'bold' | 'light' | 'medium' | 'regular';
}

const Tag: React.FC<TagProps> = ({ text, fontFamily, fontWeight }) => (
  <div className='tag'>
    <Typography
      className='opacity-80'
      theme='graylight'
      variant='h5'
      fontFamily={fontFamily}
      weight={fontWeight}
    >
      {text}
    </Typography>
  </div>
);

const TextSlide: React.FC = () => {
  const tagsWithStyles = TAGS.map((tag, index) => ({
    text: tag,
    fontFamily: FONTS[index % FONTS.length],
    fontWeight: WEIGHTS[index % WEIGHTS.length],
  }));

  return (
    <div className='tag-list '>
      <InfiniteLoopSlider duration={DURATION}>
        {tagsWithStyles.map((tag, index) => (
          <Tag
            text={tag.text}
            key={index}
            fontFamily={tag.fontFamily}
            fontWeight={tag.fontWeight}
          />
        ))}
      </InfiniteLoopSlider>
      <div className='fade' />
    </div>
  );
};

interface ImageSlideProps {
  images: string[];
  className?: string;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ images, className }) => {
  return (
    <div className={`image-list  ${className || ''}`}>
      <InfiniteLoopSlider duration={DURATION}>
        {images.map((image, index) => (
          <div className='image' key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={500}
              height={500}
              layout='responsive'
              className=''
            />
          </div>
        ))}
      </InfiniteLoopSlider>
      <div className='fade' />
    </div>
  );
};

const ImageSlideFront: React.FC<{ className?: string }> = ({ className }) => (
  <ImageSlide images={IMAGES_FRONT} className={className} />
);
const ImageSlideBack: React.FC<{ className?: string }> = ({ className }) => (
  <ImageSlide images={IMAGES_BACK} className={className} />
);

export { TextSlide, ImageSlide, ImageSlideFront, ImageSlideBack };
