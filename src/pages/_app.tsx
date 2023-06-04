import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import Router from 'next/router';
import {AiOutlineLoading} from 'react-icons/ai'
import Loading from '@/components/Loading.cmp';

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

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      {loading && <Loading />} {/* Display loading when page is being loaded. */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;