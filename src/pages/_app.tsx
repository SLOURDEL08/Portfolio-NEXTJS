import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import { ContactModalProvider, useContactModal } from '@/app/modules/contact-modal/ModalContext';
import { ModalProvider } from '@/app/modules/modal-result/ModalContext';
import ContactModal from '@/app/modules/contact-modal/ContactModal';
import { Header } from '@/app/modules/header/header'; // Assurez-vous que le chemin est correct
import nextI18NextConfig from '../../next-i18next.config.js';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContactModalProvider>
      <ModalProvider>
        <TransitionPage header={<Header />}>
          <Component {...pageProps} />
        </TransitionPage>
      </ModalProvider>
    </ContactModalProvider>
  );
}

const AppContent: React.FC<{ Component: React.ComponentType<any>; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
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
      // Nous ne désactivons plus le défilement ici, car TransitionPage gère cela
    };

    const handleRouteChangeComplete = () => {
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
    <TransitionPage header={<Header />}>
      <Component {...pageProps} />
      {isContactModalOpen && <ContactModal />}
    </TransitionPage>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
