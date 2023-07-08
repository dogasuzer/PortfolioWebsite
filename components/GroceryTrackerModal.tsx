import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import ReactPlayer from 'react-player/youtube';

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const GroceryTrackerModal: React.FC<InfoModalProps> = ({
  visible,
  onClose
}) => {
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
            isVisible ? 'scale-100 ' : 'scale-0'
          } px-4 mb-24 md:px-10 md:py-10 transform rounded-lg duration-300 flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div
            onClick={handleClose}
            className="hover:bg-slate-500 mt-36 md:mt-0 md:mt-cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
          >
            <AiOutlineClose className="text-white w-6" />
          </div>
          <div className="relative md:pb-4">
            <p className="text-white mt-8 md:mt-0 text-xl md:text-2xl h-full text-center lg:text-3xl font-bold md:mb-8">
              Grocery Tracker
            </p>
          </div>

          <div className="flex flex-col  ">
            <div className="w-2/4  md:w-3/4 flex place-self-center ">
              <ReactPlayer
                width="100%"
                height="100%"
                url="            https://youtube.com/shorts/PYgtCY6iP4E?feature=share
                "
              />
            </div>

            <div className=" flex text-center flex-row mt-4">
              <p className="text-white text-sm lg:text-lg">
                GroceryTracker is a mobile application designed to create
                shopping lists. Fronted is written with React Native. Backend of
                the app hosted via heroku, it is connected to a REST API.
                <p className="invisible lg:visible h-4 gap-4 lg:h-auto">
                  <span className=" font-bold underline-offset-1 underline text-xl">
                    Front-end :
                  </span>
                  <span className="text-yellow-500 font-bold">
                    React Native
                  </span>
                  ,
                  <span className="text-yellow-500 font-bold"> JavaScript</span>
                  ,<span className="text-yellow-500 font-bold"> React</span>,
                  <br />
                  <span className=" font-bold underline-offset-1 underline text-xl">
                    Back-end :
                  </span>
                  <span className="text-yellow-500 font-bold">REST API</span>
                  <br />
                  <span className=" font-bold underline-offset-1 underline text-xl">
                    APIs and Libraries :
                  </span>
                  <span className="text-yellow-500 font-bold">Postman</span>,
                  <span className="text-yellow-500 font-bold"> MongoDB</span>,
                  <span className="text-yellow-500 font-bold"> Axios </span>{' '}
                </p>
              </p>
            </div>
            <div className=" invisible md:visible flex gap-8  place-content-center mt-4">
              <button className=" bg-zinc-600 flex place-content-center  hover:bg-zinc-400 rounded-lg ">
                <a
                  href="https://github.com/dogasuzer/grocerytracker"
                  className="github-button"
                  target="_blank"
                >
                  <BsGithub height={8} className="h-8 w-8 m-2 sm:m-6 " />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryTrackerModal;
