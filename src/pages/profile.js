import Head from 'next/head';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profil Mempelai | Ayu &quot; Ari</title>
      </Head>
      <div>
        <h1 className="font-title font-black text-theme-orange text-base md:text-xl">
          Bismillahirrahmanirrahim
        </h1>
        <p className="font-body text-gray-700 text-xs md:text-base">
          Assalamu`alaikum Warahmatullahi Wabarakatuh <br />
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.{' '}
          <br />
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan putra-putri
          kami:
        </p>
      </div>
      <div className="w-full mt-6 mx-auto md:max-w-lg xl:max-w-2xl">
        <ProfileCard
          photo="/images/bride.jpg"
          photoAlt="Bride"
          icon="/images/icon-bride.png"
          name="Annisa Ayu Sabrina"
          text="Putri dari Bapak Suparno & Ibu Sumiati"
        />
      </div>
      <div className="w-full mt-4 mx-auto md:max-w-lg xl:max-w-2xl">
        <ProfileCard
          photo="/images/groom.jpg"
          photoAlt="Groom"
          icon="/images/icon-groom.png"
          name="Ari Bambang Kurniawan"
          text="Putra dari Bapak Budi Aryono & Ibu Murtini"
        />
      </div>
      <div className="w-full mt-4 mx-auto md:max-w-lg xl:max-w-2xl">
        <h1 className="font-title font-black text-theme-orange text-base md:text-xl">
          &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&quot;
        </h1>
        <p className="font-body text-gray-700 text-xs md:text-base">
          Surat Ar-Rum Ayat 21
        </p>
      </div>
    </>
  );
};

export default Profile;
