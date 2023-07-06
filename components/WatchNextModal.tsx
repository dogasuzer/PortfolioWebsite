import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

import useInfoModalStore from '@/hooks/useInfoModalStore';

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const WatchNextModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={handleClose}
      className="z-50 transition  duration-300 bg-zinc-700 bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="flex w-3/4 max-w-7xl items-center h-full rounded-md overflow-hidden "
      >
        <div
          className={`${
            isVisible ? 'scale-100' : 'scale-0'
          } mt-16 md:px-10 md:py-10  transform rounded-lg duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div
            onClick={handleClose}
            className="hover:bg-slate-500 mt-36 md:mt-0 md:mt-cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
          >
            <AiOutlineClose className="text-white w-6" />
          </div>
          <div className="relative  md:pb-4">
            <p className="text-white mt-4 md:mt-0 text-xl md:text-2xl h-full text-center lg:text-3xl font-bold md:mb-8">
              WatchNext{' '}
            </p>
          </div>

          <div className="flex flex-col">
            <img
              className=" invisible w-0 lg:w-auto lg:visible object-contain lg:h-80  "
              src="/WatchNextFull.png"
            />
            <div className=" flex text-center flex-row mt-4">
              <p className="text-white text-sm lg:text-lg">
                Watchnext is a web application that helps users decide what to
                watch based on trailers, providing an experience similar to
                Netflix with a focus on trailer previews. The project includes
                both front-end and back-end components, utilizing various
                technologies and frameworks. Here are the key features and
                technologies used in Watchnext:
                <p className="invisible lg:visible h-4 gap-4 lg:h-auto">
                  <span className=" font-bold underline-offset-1 underline text-xl">
                    Front-end :
                  </span>
                  <span className="text-yellow-500 font-bold">Next.js</span>,
                  <span className="text-yellow-500 font-bold">
                    Tailwind CSS
                  </span>
                  ,
                  <span className="text-yellow-500 font-bold"> TypeScript</span>
                  ,<span className="text-yellow-500 font-bold"> React</span>,
                  <span className="text-yellow-500 font-bold"> React SWR</span>{' '}
                  <span className="text-yellow-500 font-bold"> Zustand</span>{' '}
                  <br />
                  <span className=" font-bold underline-offset-1 underline text-xl">
                    Back-end :
                  </span>
                  <span className="text-yellow-500 font-bold"> Node.js</span>,
                  <span className="text-yellow-500 font-bold"> MongoDB</span>,
                  <span className="text-yellow-500 font-bold"> Prisma</span>,
                  <span className="text-yellow-500 font-bold">
                    {' '}
                    Cookie-based Authentication
                  </span>
                  <br />
                </p>
              </p>
            </div>
            <div className="pb-4 lg:pb-0 flex gap-8  place-content-center lg:mt-2 mt-4">
              <button className="bg-zinc-600 flex place-content-center  hover:bg-zinc-400 rounded-lg ">
                <a
                  href="https://github.com/dogasuzer/Watchnext"
                  className="github-button"
                  target="_blank"
                >
                  <BsGithub height={8} className="h-8 w-8 m-2 sm:m-6 " />
                </a>
              </button>
              <button className="bg-zinc-600 hover:bg-zinc-400 flex place-content-center  rounded-lg">
                <a
                  href="https://github.com/dogasuzer/Watchnext"
                  className="github-button"
                  target="_blank"
                >
                  <TbWorld height={8} className="h-8 w-8 m-2 sm:m-6 " />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchNextModal;
