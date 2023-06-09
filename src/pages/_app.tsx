import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import Router from 'next/router';
import Loading from '@/components/Loading.cmp';
import { LoginContextProvider } from '@/context/Login.context';

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false);

  useEffect(() => { // Global effect to handle loading state of a page.

    let timer: NodeJS.Timeout;

    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      timer = setTimeout(() => setLoading(true), 250); // Prevent flickering on fast loading pages.
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
    <LoginContextProvider> {/* Required to share the login state globally through the application */ }
      {loading && <Loading />}
      <Component {...pageProps} />
    </LoginContextProvider>
  )
}

export default MyApp;