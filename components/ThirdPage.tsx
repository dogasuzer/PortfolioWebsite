import BigCloud from './BigCloud';
import Cactus from './Cactus';
import Clouds from './Clouds';
import NeonGridFloor from './MovingGrid';
import Projects from './Projects';
import useSwitchStore from '@/hooks/useSwitchStore';
import React, { MouseEvent } from 'react';

const ThirdPage = () => {
  const { isOpen, onOpen, onClose } = useSwitchStore();
  const handlePlay = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(isOpen);
    event.preventDefault();
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
    console.log(isOpen);
    const buttonElement = event.target as HTMLButtonElement;
    buttonElement.blur();
  };

  return (
    <>
      <div className="invisible lg:visible z-50 absolute mx-12 my-12 ">
        <button
          onClick={handlePlay}
          className="animate-pulse text-zinc-500 w-48 h-48 rounded-full bg-gradient-to-t from-yellow-300 to-orange-300"
        >
          {isOpen ? 'Stop Game' : 'Start Game'}
        </button>
      </div>
      <div className="z-40 h-full flex flex-col place-content-end  ">
        <div className="mb-24 w-screen">
          {isOpen ? (
            <div className="relative top-20">
              <Clouds />
              <BigCloud />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="absolute h-screen w-screen top-48 z-50">
          {!isOpen ? <Projects /> : <></>}
        </div>
        <div className=" z-40 flex ">
          {isOpen ? (
            <div className="z-50 relative bottom-24 flex-grow">
              <Cactus />
            </div>
          ) : (
            <></>
          )}

          <div className="z-20 bottom-0 bg-zinc-800 h-32 absolute">
            <NeonGridFloor gridColor={'#282d3b'} backgroundColor={'#323749'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
