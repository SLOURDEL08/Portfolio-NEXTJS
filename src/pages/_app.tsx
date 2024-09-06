import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import { ModalProvider } from '@/app/modules/modal-result/ModalContext';
import { Header } from '@/app/modules/header/header';
import nextI18NextConfig from '../../next-i18next.config.js';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </ModalProvider>
  );
}

const AppContent: React.FC<{ Component: React.ComponentType<any>; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();

  return (
    <TransitionPage header={<Header />}>
      <Component {...pageProps} />
    </TransitionPage>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
