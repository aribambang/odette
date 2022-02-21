/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import AngpaoModal from '../components/AngpaoModal';
import Toaster from '../components/Toaster';
import getMessage from '../lib/getMessage';
import submitMessage from '../lib/submitMessage';

export async function getStaticProps(context) {
  const prayer = await getMessage();

  return {
    props: {
      prayer,
    },
    revalidate: 1,
  };
}

const Message = ({ prayer }) => {
  const [toasterProps, setToasterProps] = useState({
    isError: false,
    isShow: false,
  });
  const [prayerArr, setPrayerArr] = useState(prayer);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showAngpao, setShowAngpao] = useState(false);

  const handleSetToaster = ({ isError }) => {
    setToasterProps({ isError, isShow: true });
    setTimeout(() => setToasterProps({ isError, isShow: false }), 3000);
  };

  const handleOpenAngpao = () => {
    setShowAngpao(true);
  };

  const handleCloseAngpao = () => {
    setShowAngpao(false);
  };

  return (
    <>
      <Head>
        <title>Titip Pesan | Ayu & Ari</title>
      </Head>

      <Toaster {...toasterProps} />

      <div className="w-full">
        <h3
          className="text-4xl text-center py-4 font-display md:text-8xl text-theme-orange"
          style={{ fontFamily: 'Sacramento' }}
        >
          Ayu & Ari
        </h3>
      </div>
      <p className="font-body font-normal text-sm text-gray-700 md:w-1/2 md:text-base lg:w-1/4">
        Kalian bisa mengirimkan pesan dan doa kalian kepada mempelai melalui
        form dibawah ya! Pasti akan kami baca kok!
      </p>
      <div className="w-full min-w-0 overflow-hidden pt-5 pb-6 md:w-3/5 lg:w-1/2">
        <Carousel
          autoPlay
          centerMode
          infiniteLoop
          centerSlidePercentage={80}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {prayerArr.map(({ name, location, who, message }, index) => (
            <div
              key={index}
              className="p-4 mx-2 bg-white border border-theme-orange rounded-xl text-left shadow-md"
            >
              <h3 className="font-title font-black text-theme-orange text-xl md:text-2xl">
                {name}
              </h3>
              <p className="font-body font-semi-bold text-gray-400 text-xs mb-1 md:text-sm">
                {who} | {location}
              </p>
              <p className="font-body font-normal text-gray-700 text-sm md:text-base">
                {message}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-full flex flex-col items-center justify-center md:w-3/5 lg:w-1/3">
        <form
          id="formMessage"
          onSubmit={(e) =>
            submitMessage(e, setLoadingSubmit, setPrayerArr, handleSetToaster)
          }
        >
          <input
            name="name"
            className="w-full border border-theme-orange rounded-md p-2 text-sm text-gray-700 md:text-base focus:outline-none"
            placeholder="Nama"
            maxLength="30"
            required
          />
          <input
            name="location"
            className="w-full border border-theme-orange rounded-md p-2 mt-2 text-sm text-gray-700 md:text-base focus:outline-none"
            maxLength="60"
            placeholder="Tinggal dimana? (ex: Bekasi)"
          />
          <input
            name="who"
            className="w-full border border-theme-orange rounded-md p-2 mt-2 text-sm text-gray-700 md:text-base focus:outline-none"
            maxLength="60"
            placeholder="Siapanya siapa? (ex: Teman kerja Ari)"
          />
          <textarea
            name="message"
            className="w-full resize-none border border-theme-orange rounded-md p-2 mt-2 text-sm text-gray-700 md:text-base focus:outline-none"
            placeholder="Pesan / Ucapan / Doa"
            rows="6"
            maxLength="300"
            required
          />
          <input
            className="w-full mt-2 py-2 rounded-md bg-theme-orange font-title font-black text-white focus:outline-none"
            type="submit"
            disabled={loadingSubmit ? true : false}
            value={loadingSubmit ? 'Mengirim Pesan...' : 'Kirim Pesan'}
          />
        </form>
        <button
          className="w-full mt-2 py-2 rounded-md bg-gray-700 font-title font-black text-white focus:outline-none"
          onClick={handleOpenAngpao}
        >
          Kirim Angpao
        </button>

        <AngpaoModal display={showAngpao} onClose={handleCloseAngpao} />
      </div>
    </>
  );
};

export default Message;
