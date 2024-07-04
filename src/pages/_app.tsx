import type { AppProps } from 'next/app';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <TransitionPage>
      <Component {...pageProps} key={router.route} />
    </TransitionPage>
  );
}

export default MyApp;
