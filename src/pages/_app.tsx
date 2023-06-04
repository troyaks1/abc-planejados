import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import Router from 'next/router';
import Loading from '@/components/Loading.cmp';
import { LoginProvider } from '@/context/Login.context';

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false);

  let timer: NodeJS.Timeout;

  useEffect(() => { // Global effect to handle loading pages.
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      timer = setTimeout(() => setLoading(true), 250); // Set loading animation only after 0.5 seconds to prevent flickering with fast loading pages.
    }
    const handleComplete = (url: string) => {
      console.log(`Stop Loading: ${url}`);
      clearTimeout(timer);
      setLoading(false);
    }

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);
    Router.events.on('hashChangeComplete', handleComplete)

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
      Router.events.off('hashChangeComplete', handleComplete)
    };
  }, []);

  return (
    <LoginProvider>
      {loading && <Loading />} {/* Display loading when page is being loaded. */}
      <Component {...pageProps} />
    </LoginProvider>
  )
}

export default MyApp;