import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import '@/app/globals.css';

type TransitionPageProps = {
  children: ReactNode;
  header?: ReactNode; // Ajout de la propriété header optionnelle
};

const pageVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(4px)',
  },
  in: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.4 },
  },
  out: {
    opacity: 0,
    filter: 'blur(4px)',
    transition: { duration: 0.4 },
  },
};

const TransitionPage = ({ children, header }: TransitionPageProps) => {
  const [isChanging, setIsChanging] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsChanging(true);
    const handleComplete = () => setIsChanging(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  useEffect(() => {
    if (isChanging) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isChanging]);

  return (
    <>
      {header && <div className='fixed top-0 left-0 right-0 z-50'>{header}</div>}
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.asPath}
          initial='initial'
          animate='in'
          exit='out'
          variants={pageVariants}
          style={{ paddingTop: header ? '/* hauteur de votre header */' : 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default TransitionPage;
