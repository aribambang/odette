import Head from 'next/head';
import Image from 'next/image';

const Event = () => {
  const prokes = [
    {
      img: '/images/icon-use-masker.svg',
      text: 'Memakai masker',
    },
    {
      img: '/images/icon-wash-hand.svg',
      text: 'Mencuci tangan',
    },
    {
      img: '/images/icon-no-handshake.svg',
      text: 'Hindari salaman',
    },
    {
      img: '/images/icon-jaga-jarak.svg',
      text: 'Menjaga jarak',
    },
  ];

  const handleCheckMap = () => {
    window.open('https://goo.gl/maps/bfFGm8pgN5yHM1Tm6', '_blank');
  };

  return (
    <>
      <Head>
        <title>Detail Acara | Ari & Ayu</title>
      </Head>

      <div className="w-3/4 md:w-1/2">
        <p className="font-body text-gray-700 text-xs md:text-base">
          Dengan memohon rahmat dan ridho Allah SWT, perkenankanlah kami memohon
          doa restu pada acara pernikahan putra-putri kami yang akan di
          selenggarakan pada :
        </p>
      </div>
      <div className="flex flex-0 flex-col flex-wrap justify-center w-full  mt-6">
        <div className="w-full mx-auto md:max-w-lg xl:max-w-2xl">
          <div className="relative overflow-hidden w-full p-4 rounded-lg bg-flower-pattern bg-80% shadow-md">
            <div className="relative z-10 text-left">
              <div className="w-max p-1 border-2 border-theme-orange rounded-md">
                <h3 className="font-title font-black text-xs text-theme-orange">
                  Akad Nikah
                </h3>
              </div>
              <div className="mt-2">
                <p className="font-body font-bold text-sm text-theme-orange">
                  Sabtu, 21 Mei 2022
                </p>
                <p className="mt-2font-title font-black text-2xl text-theme-orange">
                  08:00 WIB - Selesai
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 mx-auto md:max-w-lg xl:max-w-2xl">
          <div className="relative overflow-hidden w-full p-4 rounded-lg bg-flower-pattern bg-80% shadow-md">
            <div className="relative z-10 text-left">
              <div className="w-max p-1 border-2 border-theme-orange rounded-md">
                <h3 className="font-title font-black text-xs text-theme-orange">
                  Resepsi
                </h3>
              </div>
              <div className="mt-2">
                <p className="font-body font-bold text-sm text-theme-orange">
                  Sabtu, 21 Mei 2022
                </p>
                <p className="mt-2font-title font-black text-2xl text-theme-orange">
                  10:00 - 14:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 mx-auto md:max-w-lg xl:max-w-2xl">
          <div className="relative overflow-hidden w-full p-4 rounded-lg bg-flower-pattern bg-80% shadow-md">
            <div className="relative z-10 text-left">
              <div className="w-max p-1 border-2 border-theme-orange rounded-md">
                <h3 className="font-title font-black text-xs text-theme-orange">
                  Lokasi
                </h3>
              </div>
              <div className="mt-4">
                <p className="mt-2font-title font-black text-2xl text-theme-orange">
                  Mustikasari Convention Hall Bekasi
                </p>
                <p className="font-body font-bold text-sm text-theme-orange">
                  Jl. Cipete Raya No.48
                  <br /> Kel. Mustikasari, Kec. Mustika Jaya, Kota Bekasi
                </p>
              </div>
              <div
                className="mt-4 rounded-md bg-theme-orange py-2 text-center cursor-pointer"
                onClick={handleCheckMap}
              >
                <p className="font-title font-black text-sm text-white">
                  Cek Peta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full">
        <p className="font-title font-black text-lg text-theme-orange md:text-xl">
          Kami Mohon Maaf
        </p>
        <p className="font-body text-gray-700 text-xs md:text-base">
          Sehubungan dengan kondisi pandemi COVID-19 saat ini dan kebijakan
          pemerintah mengenai pembatasan jumlah tamu undangan, kami memutuskan
          untuk hanya mengundang keluarga dan kerabat dekat saja. Mohon maaf
          jika belum bisa mengundang saudara/i untuk menghadiri pernikahan kami.
        </p>
      </div>
      <div className="mt-6 text-center">
        <p className="font-title font-black text-lg text-theme-orange md:text-xl">
          Kepada Tamu Undangan
        </p>
        <p className="font-body text-gray-700 text-xs md:text-base md:mt-2">
          Tanpa mengurangi rasa hormat, dimohon untuk para tamu undangan untuk
          memperhatikan hal-hal berikut saat menghadiri acara:
        </p>
        <div className="flex flex-0 flex-wrap justify-center w-full mt-4 md:mt-6">
          {prokes.map((rule, index) => {
            const { img, text } = rule;
            return (
              <div key={index} className="w-1/2 p-2 md:w-48">
                <div className="bg-white rounded-full w-20 h-20 mx-auto p-2 shadow-md">
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      alt={text}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <p className="mt-2 font-body text-gray-700 text-sm">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Event;
