import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './NavBar';

const Layout = ({ children, pathname }) => {
  const [displayedChild, setDisplayedChild] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  const opacity = transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0';

  const handleTransitionEnd = () => {
    if (transitionStage === 'fadeOut') {
      setDisplayedChild(children);
      setTransitionStage('fadeIn');
    }
  };

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    if (children !== displayedChild) {
      setTransitionStage('fadeOut');
    }
  }, [children, displayedChild]);

  return (
    <div className="relative overflow-hidden bg-paper-texture relative overflow-hidden min-h-screen h-full flex flex-col items-center justify-center p-5">
      <div>
        <div className="absolute z-10 -top-1 -right-0 w-3/5 md:w-1/2 md:-top-24 xl:-top-40 lg:w-2/5">
          <div className="aspect-w-14 aspect-h-10">
            <Image
              src="/images/ornament-right.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="absolute z-10 -bottom-2 -left-0 w-3/5 md:w-1/2 md:-bottom-24 xl:-bottom-48 lg:w-2/5">
          <div className="aspect-w-13 aspect-h-11">
            <Image
              src="/images/ornament-left.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <main className="w-full border-4 border-theme-orange rounded-lg text-center px-5 py-28 mb-14">
        <div
          className={`${opacity} transition-opacity duration-300 ease-out z-0 flex flex-1 flex-col items-center justify-center w-full`}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayedChild}
        </div>
      </main>

      <Navbar pathname={pathname} />
    </div>
  );
};

export default Layout;
