import DinosaurGame from '@/components/DinosaurGame';
import Image from 'next/image';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import useScrollStore from '@/hooks/useScrollStore';
import useNavbarNavigate from '@/hooks/useNavbarNavigate';
import FirstPage from '@/components/FirstPage';
import MatrixCodeRain from '@/components/CodeRain';
import NeonGridFloor from '@/components/MovingGrid';
import SecondPage from '@/components/SecondPage';
import ThirdPage from '@/components/ThirdPage';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import ContactPage from '@/components/ContactPage';
import MobileMenu from '@/components/MobileMenu';
import { FaChevronDown } from 'react-icons/fa';

export default function Home() {
  const { isOpen, closeModal } = useInfoModalStore();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const { currentPosition, setCurrentPosition } = useScrollStore();
  const { navbarDestination, setPage } = useNavbarNavigate();
  const [usersPlace, setUsersPlace] = useState(0);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(current => !current);
  }, []);

  if (typeof window !== 'undefined') {
    var windowsize = window.innerWidth;
  } else {
    var windowsize = 0;
  }

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      const updateUsersPlace = () => {
        const containerRect = scrollContainer.getBoundingClientRect();
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollTop = scrollContainer.scrollTop;

        const pagePositionX = Math.round(
          (scrollLeft / containerRect.width) * 100
        );
        const pagePositionY = Math.round(
          (scrollTop / containerRect.height) * 100
        );

        setUsersPlace(pagePositionX);
      };

      updateUsersPlace();

      scrollContainer.addEventListener('scroll', updateUsersPlace);

      return () => {
        scrollContainer.removeEventListener('scroll', updateUsersPlace);
      };
    } else {
      console.log("The 'scroll-container' element was not found.");
    }
  }, []);

  useEffect(() => {
    // console.log("User's Place:", usersPlace);
  }, [usersPlace]);

  const handleNavbarItemClick = (input: number) => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      const pageWidth = scrollContainer.offsetWidth;
      const scrollAmount = pageWidth;
      if (usersPlace >= 200 && usersPlace < 300 && input == 1) {
        scrollContainer.scrollLeft -= scrollAmount;
        //case for projects to skills
      }
      if (usersPlace >= 300 && input == 2) {
        scrollContainer.scrollLeft -= scrollAmount;
        //case for contact to projects
      }
      if (usersPlace >= 300 && input == 1) {
        scrollContainer.scrollLeft -= scrollAmount * 2;
        //case for contact to skills
      }
      if (usersPlace >= 100 && usersPlace < 200 && input == 3) {
        scrollContainer.scrollLeft += scrollAmount * 2;
        //case for skills to contact
      }
      if (usersPlace >= 200 && input == 3) {
        scrollContainer.scrollLeft += scrollAmount * 2;
        //case for projects to contact
      }
      if (usersPlace >= 100 && usersPlace < 200 && input == 2) {
        scrollContainer.scrollLeft += scrollAmount;
        //case for skills to project
      }
      if (usersPlace < 100 && input == 1) {
        scrollContainer.scrollLeft += scrollAmount;
        //case for start to skills
      }
      if (usersPlace < 100 && input == 2) {
        scrollContainer.scrollLeft += scrollAmount * 2;
        //case for start to projects
      }
      if (usersPlace < 100 && input == 3) {
        scrollContainer.scrollLeft += scrollAmount * 3;
        //case for start to contact
      }
      if (input == 0) {
        scrollContainer.scrollLeft -= scrollAmount * 3;
        //case for start to contact
      }
    } else {
      console.log("The 'scroll-container' element was not found.");
    }
  };
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    const handleScroll = (event: WheelEvent) => {
      const container = document.getElementById('scroll-container');
      if (container) {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
        setIsScrolling(true);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, 400);
      }
    };
    document.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        // JUMP
        setIsJumping(true);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          setIsJumping(false);
        }, 800);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, []);

  const [showDiv, setShowDiv] = useState(false);

  const handleComponentClick = () => {
    setShowDiv(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showDiv) {
      timer = setTimeout(() => {
        setShowDiv(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showDiv]);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('scroll-container');
      if (container) {
        const currentPosition = container.scrollLeft;
        setCurrentPosition(currentPosition);
      }
    };
    const container = document.getElementById('scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      id="scroll-container"
      className="absolute w-screen h-screen overflow-x-scroll  overflow-y-hidden bg-light"
    >
      <header className="z-40 fixed flex w-screen justify-between px-10 py-4">
        <Image
          onClick={() => handleNavbarItemClick(0)}
          src={'/favicon.ico'}
          width={80}
          height={80}
          alt={'logo'}
        />

        <div className="h-12  flex-row ml-8 gap-7 flex ">
          <div className=" flex-row ml-8 gap-10 hidden md:flex font-bold ">
            <div
              className={`cursor-pointer ${
                currentPosition > (windowsize * 1) / 2 &&
                currentPosition <= (windowsize * 3) / 2
                  ? 'text-primary'
                  : 'text-black'
              }`}
              onClick={() => handleNavbarItemClick(1)}
            >
              //Skills
            </div>
            <div
              className={`cursor-pointer ${
                currentPosition > (windowsize * 3) / 2 &&
                currentPosition <= (windowsize * 5) / 2
                  ? 'text-primary'
                  : 'text-black'
              }`}
              onClick={() => handleNavbarItemClick(2)}
            >
              //Projects{' '}
            </div>
            <div
              className={`cursor-pointer ${
                currentPosition > (windowsize * 5) / 2
                  ? 'text-primary'
                  : 'text-black'
              }`}
              onClick={() => handleNavbarItemClick(3)}
            >
              //Contact{' '}
            </div>
          </div>
          <div className="md:hidden w-full">
            <div
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative "
            >
              <p className="text-zinc-700 font-semibold text-2xl">Menu</p>
              <FaChevronDown
                className={`w-4 text-zinc-700 fill-zinc-700 transition ${
                  showMobileMenu ? 'rotate-180' : 'rotate-0'
                }`}
              />
              <div className="sm:absolute -left-16">
                <MobileMenu visible={showMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex" style={{ width: '400vw' }}>
        <div
          onClick={handleComponentClick}
          className="bottom-20 left-18 xl:left-96 flex-row gap-12 pl-32 invisible lg:visible fixed flex z-30 "
        >
          {currentPosition >= 500 && !isOpen ? (
            <>
              {showDiv && (
                <div className="w-22 h-16 relative text-center mb-6 rounded-lg  bg-zinc-300 text-lg lg:text-2xl flex flex-wrap">
                  Press the space bar to jump, click the sun to start the game.
                </div>
              )}
              <DinosaurGame isJumping={isJumping} isRunning={isScrolling} />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="z-30 opacity-100">
          <MatrixCodeRain />
        </div>

        <div className="z-30 h-screen w-screen justify-center items-center flex">
          {currentPosition <= 1000 ? <FirstPage /> : <></>}
        </div>
        <div className=" z-10 overflow-hidden relative h-screen w-screen bg-zinc-600 ">
          <SecondPage />
          {/* 
          <div className="bottom-0 bg-zinc-800 h-32 absolute">
            <NeonGridFloor gridColor={'#3f3326'} backgroundColor={'#3f3326'} />
          </div> */}
        </div>

        <div className="relative z-20 h-screen w-screen bg-gradient-to-t from-gray-100 via-blue-300 to-purple-300   ">
          <ThirdPage />
        </div>

        <div className="z-30 relative h-screen w-screen bg-purple-200">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}

{
  /* <Image
  width={2800}
  height={80}
  src="/../public/bg.gif"
  alt="loading..."
/> */
}
