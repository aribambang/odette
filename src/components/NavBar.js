import { memo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = ({ pathname }) => {
  let menus = [];
  if (pathname.includes('/t')) {
    menus = [
      {
        link: '/t/profile',
        img: '/images/icon-profile.svg',
        imgActive: '/images/icon-profile-active.svg',
        text: 'Profil Mempelai',
        isActive: pathname === '/t/profile',
      },
      {
        link: '/t/event',
        img: '/images/icon-event.svg',
        imgActive: '/images/icon-event-active.svg',
        text: 'Detail Acara',
        isActive: pathname === '/t/event',
      },
      {
        link: '/t/message',
        img: '/images/icon-message.svg',
        imgActive: '/images/icon-message-active.svg',
        text: 'Titip Pesan',
        isActive: pathname === '/t/message',
      },
    ];
  } else {
    menus = [
      {
        link: '/profile',
        img: '/images/icon-profile.svg',
        imgActive: '/images/icon-profile-active.svg',
        text: 'Profil Mempelai',
        isActive: pathname === '/profile',
      },
      {
        link: '/event',
        img: '/images/icon-event.svg',
        imgActive: '/images/icon-event-active.svg',
        text: 'Detail Acara',
        isActive: pathname === '/event',
      },
      {
        link: '/message',
        img: '/images/icon-message.svg',
        imgActive: '/images/icon-message-active.svg',
        text: 'Titip Pesan',
        isActive: pathname === '/message',
      },
    ];
  }

  return (
    <nav className="fixed bottom-0 z-20 flex flex-0 items-center justify-center w-screen h-14 bg-white border-t border-gray-200 shadow-nav">
      {menus.map((menu, index) => {
        const { link, img, imgActive, text, isActive } = menu;
        const textColor = isActive ? 'text-theme-orange' : 'text-gray-400';
        return (
          <div key={index} className="flex-0 w-1/4 h-full">
            <Link href={link} passHref>
              <a>
                <div className="flex flex-col items-center justify-center mt-1.5 ">
                  <div className="relative w-7 h-7">
                    <Image
                      src={isActive ? imgActive : img}
                      alt={text}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className={`font-body text-xs ${textColor}`}>
                    {text}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default memo(NavBar);
