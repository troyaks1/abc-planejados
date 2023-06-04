import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import Router from 'next/router';
import {AiOutlineLoading} from 'react-icons/ai'
import Loading from '@/components/Loading.cmp';

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      setLoading(true);
    }
    const handleComplete = (url: string) => {
      console.log(`Stop Loading: ${url}`);
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
      {loading && <Loading />} {/* Display your loading component here */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;