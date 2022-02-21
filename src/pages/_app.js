import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps, router }) => {
  const pathname = router.pathname || '/';

  if (pathname === '/') {
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
