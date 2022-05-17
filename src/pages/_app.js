import React, { useEffect } from 'react';
import Router from 'next/router';
import ReactAudioPlayer from 'react-audio-player';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';
import { pageView } from '../lib/gtag';

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => pageView(url);
    Router.events.on('routeChangeComplete', () => handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router.events]);

  const pathname = router.pathname || '/';

  if (pathname === '/') {
    return <Component {...pageProps} />;
  }

  if (pathname === '/t') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout pathname={pathname}>
      <Component {...pageProps} />
      <ReactAudioPlayer src="/audio/backsound.mp3" autoPlay loop />
    </Layout>
  );
};

export default MyApp;
