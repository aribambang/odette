import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { to } = router.query;

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen py-4 bg-paper-texture">
      <Head>
        <title>Ayu &#38; Ari Wedding</title>
      </Head>

      <div>
        <div className="absolute -top-1 -right-1 w-3/5 md:-top-4 md:-right-4 md:w-2/5">
          <div className="aspect-w-10 aspect-h-8">
            <Image
              src="/images/splash-top-right.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-1/2 md:-bottom-4 md:-right-4 md:w-1/3">
          <div className="aspect-w-10 aspect-h-4">
            <Image
              src="/images/splash-line.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="absolute -bottom-1 -left-1 w-3/5 md:-bottom-4 md:-left-4 md:w-2/5">
          <div className="aspect-w-10 aspect-h-9">
            <Image
              src="/images/splash-bottom-left.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <main className="z-10 flex flex-col items-center justify-center w-full flex-1 text-center px-10 md:px-0">
        <h4
          className="text-2xl text-center py-4 font-display md:text-4xl text-theme-orange"
          style={{ fontFamily: 'Sacramento' }}
        >
          Undangan Pernikahan
        </h4>

        <h3
          className="text-4xl text-center py-4 font-display md:text-8xl text-theme-orange"
          style={{ fontFamily: 'Sacramento' }}
        >
          Ayu & Ari
        </h3>

        {Boolean(to) ? (
          <div className="grid grid-cols-1 divide-y">
            <h1
              className="text-2xl text-center py-4 font-display md:text-4xl text-theme-orange"
              style={{ fontFamily: 'Sacramento' }}
            >
              - 21 Mei 2022 -
            </h1>
            <div className="mt-6">
              <p className="font-body text-xl text-theme-orange">
                Kepada Yth. <br /> Bapak / Ibu / Saudara / i
              </p>
              <h3 className="font-title font-black text-theme-orange text-3xl mt-1 md:mt-2  md:text-5xl">
                {to.replace('-', ' ')}
              </h3>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 px-8 leading-relaxed md:max-w-screen-md md:mx-auto">
            <p>
              Untuk kami, mengundang kalian semua adalah harapan yang dinanti.
              Bertegur sapa, bertemu kerabat lainnya, ceria bercerita, makan
              bersama, bersuka cita. Tapi kita tahu, dunia sedang dilanda
              bencana yang membuat satu dan lainnya berjarak dengan penutup
              muka. Semua yang sudah kami siapkan juga harus dibatasi dengan
              protokol yang ada.
            </p>
            <p className="pt-4">
              Kami, dan segenap keluarga besar dengan berat hati tidak bisa
              mengundang kalian semua, terutama yang berada di luar kota. Dengan
              adanya ini, berharap semua tetap bisa mendoakan kami agar bahagia
              selamanya.
            </p>
            <p className="pt-4">
              Dari kami, semoga semua dapat memaklumi dan kita bisa tidak
              berjarak lagi. Amin.
            </p>
            <p className="text-center pt-4 leading-relaxed">Terima kasih.</p>
          </div>
        )}
        <div className="bg-theme-orange text-white rounded-full font-title font-black cursor-pointer py-1 px-6 mt-4 text-lg md:mt-6 md:py-2 md:px-12 md:text-2xl">
          <Link href="/profile">
            <a>BUKA</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
