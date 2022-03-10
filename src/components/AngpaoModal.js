import { useState, useEffect } from 'react';
import Image from 'next/image';
import copy from 'copy-to-clipboard';

const WALLET = [
  { txt: 'GoPay', img: '/images/gopay.jpg' },
  { txt: 'Dana', img: '/images/dana.jpg' },
  { txt: 'BCA', img: '/images/bca-logo.png' },
];

const AngpaoModal = ({ display, onClose }) => {
  const [opacity, setOpacity] = useState(false);
  const [walletType, setWalletType] = useState('Gopay');
  const [walletImg, setWalletImg] = useState('/images/gopay.jpg');
  const [copySucces, setCopySuccess] = useState(false);
  const copyText = copySucces ? 'Berhasil Disalin' : 'Salin Nomor';
  const copyBg = copySucces ? 'bg-green-600' : 'bg-theme-orange';
  const modalDisplay = display ? 'block' : 'hidden';
  const bgDisplay = opacity ? 'opacity-100' : 'opacity-0';
  const cardDisplay = opacity
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-4';

  const handleChangeWallet = (wallet, img) => {
    setWalletType(wallet);
    setWalletImg(img);
  };

  const handleCopyNumber = () => {
    const number = walletType === 'BCA' ? '6871135549' : '085779911732';
    copy(number);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handleClose = () => {
    setOpacity(false);
    setTimeout(() => onClose(), 300);
  };

  useEffect(() => {
    if (display) {
      setTimeout(() => setOpacity(true), 300);
    }
  }, [display]);

  return (
    <div
      className={`fixed z-30 inset-0 overflow-y-auto ${modalDisplay}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen py-4 px-4 text-center">
        <div
          className={`fixed inset-0 bg-gray-500 transition-opacity ease-out duration-300 bg-opacity-75 ${bgDisplay}`}
          onClick={handleClose}
          aria-hidden="true"
        />

        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full ease-out duration-300 md:w-1/2 ${cardDisplay}`}
        >
          <div className="bg-white px-4 py-6">
            <div className="text-center">
              <h3
                className="text-lg leading-6 font-title font-black text-gray-700"
                id="modal-title"
              >
                Kirim Angpao
              </h3>
              <div className="mt-2">
                <Image
                  width={200}
                  height={200}
                  src={walletImg}
                  alt={walletType}
                  objectFit="contain"
                />
              </div>
              <div className="w-3/5 rounded-lg overflow-hidden mx-auto mt-4">
                <div className="py-2 bg-gray-50">
                  <p className="font-body font-bold text-sm text-gray-700">
                    {walletType === 'BCA' ? '6871135549' : '085779911732'}
                  </p>
                  <p className="font-body font-normal text-sm text-gray-700">
                    A/N Ari Bambang Kurniawan
                  </p>
                </div>
                <div
                  className={`py-2 text-white font-title font-black cursor-pointer ${copyBg}`}
                  onClick={handleCopyNumber}
                >
                  {copyText}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-gray-50">
            {WALLET.map((wallet) => {
              const { txt, img } = wallet;
              const activeStyle =
                walletType === txt
                  ? 'bg-theme-orange text-white'
                  : 'bg-gray-100 text-theme-orange';

              return (
                <button
                  key={txt}
                  type="button"
                  className={`w-1/2 px-4 py-4 text-base font-title font-black cursor-pointer focus:outline-none ${activeStyle}`}
                  onClick={() => handleChangeWallet(txt, img)}
                >
                  {txt}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngpaoModal;
