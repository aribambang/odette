/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import GalleryTimeline from '../components/GalleryTimeline';

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Cerita Kami | Ayu & Ari</title>
      </Head>

      <h1 className="font-title font-black text-2xl text-theme-orange md:text-xl">
        Cerita Kami
      </h1>
      <GalleryTimeline />
    </>
  );
};

export default Gallery;
