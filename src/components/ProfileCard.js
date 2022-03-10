import Image from 'next/image';

const ProfileCard = ({ photo, photoAlt, icon, name, text }) => {
  return (
    <div className="relative flex flex-0 items-center w-full overflow-hidden rounded-lg bg-flower-pattern bg-80% shadow-md">
      <div className="relative w-2/5 h-auto z-10">
        <div className="aspect-w-3 aspect-h-4">
          <Image src={photo} alt={photoAlt} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="relative w-3/5 p-1 z-10 sm:p-2">
        <div className="relative w-11 h-11 mb-1 mx-auto md:w-20 md:h-20 xl:w-30 xl:h-30">
          <Image src={icon} alt="" layout="fill" objectFit="contain" />
        </div>
        <h3 className="font-title font-black text-sm text-theme-orange md:text-lg xl:text-xl">
          {name}
        </h3>
        <p className="font-body text-xs text-gray-700 md:text-sm xl:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
