import { Typography } from '@/app/modules/typography/typography';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const words = [
  'Bienvenue', 
  'Welcome', 
  'Bienvenidos', 
  '欢迎', 
  'أهلاً وسهلاً', 
  'Добро пожаловать'
];
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
        className='bg-clip-text text-transparent  bg-gradient-to-g from-white to-[#AAAAAA] text-left z-10 leading-none max-[900px]:text-5xl max-[680px]:leading-tight tracking-lighter  borbot max-[450px]:text-4xl mb-2'
      >
        <b>{words[currentWordIndex]}</b>  👋
      </Typography>
    </CSSTransition>
  );
};

export default TransitionWord;
