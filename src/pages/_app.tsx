import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import { ContactModalProvider, useContactModal } from '@/app/modules/contact-modal/ModalContext';
import { ModalProvider } from '@/app/modules/modal-result/ModalContext';
import ContactModal from '@/app/modules/contact-modal/ContactModal';
import '@/app/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <TransitionPage>
      <ContactModalProvider>
        <ModalProvider>
          <Content Component={Component} pageProps={pageProps} router={router} />
        </ModalProvider>
      </ContactModalProvider>
    </TransitionPage>
  );
}

const Content: React.FC<{ Component: any; pageProps: any; router: any }> = ({
  Component,
  pageProps,
  router,
}) => {
  const { isContactModalOpen, openContactModal, closeContactModal } = useContactModal();
  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/contact') {
        openContactModal();
      } else {
        closeContactModal();
      }
    };

    nextRouter.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [nextRouter, openContactModal, closeContactModal]);

  return (
    <>
      <Component {...pageProps} key={router.route} />
      {isContactModalOpen && <ContactModal />}
    </>
  );
};

export default MyApp;
