import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import '@/app/globals.css';

type TransitionPageProps = {
  children: ReactNode;
};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const TransitionPage = ({ children }: TransitionPageProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== currentPath) {
        setLoading(true);
      }
    };
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router, currentPath]);

  return (
    <AnimatePresence mode='wait'>
      {loading && (
        <motion.div
          key="transition"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        ></motion.div>
      )}
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionPage;
