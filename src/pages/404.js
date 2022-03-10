import React from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="w-1/2">
      <h1 className="text-2xl text-center py-4 font-display md:text-4xl text-theme-orange">
        404 | Not Found
      </h1>
      <p className="mt-4 font-body text-gray-700 text-xs md:text-base">
        Halaman ini tidak ditemukan. Anda mungkin salah mengetik alamat atau
        halaman mungkin telah dipindahkan.
      </p>
      <button
        className="w-1/2 my-12 py-2 rounded-md bg-gray-700 font-title font-black text-white focus:outline-none"
        onClick={handleBack}
      >
        Kembali
      </button>
    </div>
  );
};

export default NotFound;
