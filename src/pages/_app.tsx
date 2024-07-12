import type { AppProps } from 'next/app';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import { ModalProvider } from '@/app/modules/modal-result/ModalContext'; // Mettez le chemin correct vers votre ModalContext


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <TransitionPage>
    <ModalProvider>

      <Component {...pageProps} key={router.route} />
      </ModalProvider>

    </TransitionPage>
  );
}

export default MyApp;
