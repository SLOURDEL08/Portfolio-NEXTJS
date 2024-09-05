import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import { ContactModalProvider, useContactModal } from '@/app/modules/contact-modal/ModalContext';
import { ModalProvider } from '@/app/modules/modal-result/ModalContext';
import ContactModal from '@/app/modules/contact-modal/ContactModal';
import nextI18NextConfig from '../../next-i18next.config.js';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ContactModalProvider>
      <ModalProvider>
        <TransitionPage>
          <Content Component={Component} pageProps={pageProps} />
        </TransitionPage>
      </ModalProvider>
    </ContactModalProvider>
  );
}

const Content: React.FC<{ Component: any; pageProps: any }> = ({ Component, pageProps }) => {
  const { isContactModalOpen, openContactModal, closeContactModal } = useContactModal();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/contact') {
        openContactModal();
      } else if (isContactModalOpen) {
        closeContactModal();
      }
    };

    const handleRouteChangeStart = () => {
      // Empêcher le défilement pendant la transition
      document.body.style.overflow = 'hidden';
    };

    const handleRouteChangeComplete = () => {
      // Réactiver le défilement après la transition
      document.body.style.overflow = 'unset';
      handleRouteChange(router.asPath);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router, openContactModal, closeContactModal, isContactModalOpen]);

  return (
    <>
      <Component {...pageProps} />
      {isContactModalOpen && <ContactModal />}
    </>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
