import { Typography } from '@/app/modules/typography/typography';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const words = ['Bonjour', 'Hello', 'Hola', '你好', 'مرحبا', 'Привет'];

const TransitionWord = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CSSTransition
      in={true}
      timeout={500}
      classNames="slide"
      key={words[currentWordIndex]}
    >
      <Typography
        theme='white'
        weight='bold'
        variant='h1'
        component='h1'
        fontFamily='ClashDisplay'
        className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left z-10 text-slide max-[900px]:text-5xl'
      >
        {words[currentWordIndex]} 👋 ,
      </Typography>
    </CSSTransition>
  );
};

export default TransitionWord;
