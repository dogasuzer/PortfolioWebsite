import { useState } from 'react';

import useSlideStore from '@/hooks/useSlideStore';
import Image from 'next/image';
import SlidePage from './SlidePage';

const ProjectionScreen = () => {
  const [issOpen, setIssOpen] = useState(false);
  const { setCurrentSkill, currentSkill, setisCurrentSkillExist } =
    useSlideStore();

  const currentSkillHandler = (input: number) => {
    setCurrentSkill(input);
    setisCurrentSkillExist(true);
  };

  const toggleScreen = () => {
    setIssOpen(!issOpen);
  };

  return (
    <div className=" w-full h-full relative ">
      {/* Projection Screen */}
      <div className="flex flex-col h-3/4 w-4/5 self-center mx-auto sm:h-4/6 sm:w-4/6 md:w-full lg:w-full ">
        <div
          className={`${
            issOpen ? 'h-full' : 'h-1/3'
          } bg-zinc-700 shadow-xl w-full rounded-lg p-8`}
        >
          {/* Projection Screen Content */}
          <div
            className={`${
              issOpen
                ? 'flex lg:flex-col w-full h-full opacity-100 text-black'
                : 'opacity-0 translate-y-4'
            }  bg-zinc-900 lg:pt-4 relative transition-transform duration-300 ease-in-out`}
          >
            <div className="opacity-30 top-40 invisible md:visible absolute ">
              <Image
                alt="background"
                width={296}
                height={196}
                src={'/code.png'}
              />
            </div>
            <div className="opacity-30 bottom-0 right-0 invisible md:visible absolute ">
              <Image
                alt="background"
                width={296}
                height={196}
                src={'/code.png'}
              />
            </div>
            <div className="relative">
              <SlidePage />
            </div>
            <div className="md:bottom-0 mx-4 my-4 md:left-4 absolute lg:mt-auto pb-4 flex-wrap gap-4 flex flex-row">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(1)}
                className={`${
                  currentSkill == 1
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(2)}
                className={`${
                  currentSkill == 2
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(3)}
                className={`${
                  currentSkill == 3
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(4)}
                className={`${
                  currentSkill == 4
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <Image
                src="/reactnatix.png"
                width={50}
                height={30}
                alt="reactnative"
                onClick={() => currentSkillHandler(5)}
                className={`${
                  currentSkill == 5
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(6)}
                className={`${
                  currentSkill == 6
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://docs.amplify.aws/assets/logo-dark.svg"
                alt="amplify"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(7)}
                className={`${
                  currentSkill == 7
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />

              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(8)}
                className={`${
                  currentSkill == 8
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(9)}
                className={`${
                  currentSkill == 9
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(10)}
                className={`${
                  currentSkill == 10
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(11)}
                className={`${
                  currentSkill == 11
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-40 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(12)}
                className={`${
                  currentSkill == 12
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                alt="graphql"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(13)}
                className={`${
                  currentSkill == 13
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />

              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(14)}
                className={`${
                  currentSkill == 14
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(15)}
                className={`${
                  currentSkill == 15
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(16)}
                className={`${
                  currentSkill == 16
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="figma"
                width="50"
                height="40"
                onClick={() => currentSkillHandler(17)}
                className={`${
                  currentSkill == 17
                    ? 'outline-purple-400 outline-4 '
                    : 'outline-1  outline-zinc-400'
                }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
              />
            </div>

            {/* Projection Screen */}
            <div
              className={`${
                issOpen ? 'bg-white' : 'bg-gray-900'
              } relative h-auto rounded-lg overflow-hidden transition-all duration-300 ease-in-out`}
            >
              {/* Projection Screen Opening */}
              <div
                className={`${
                  issOpen ? 'h-1/2' : 'h-1/4'
                } bg-gray-800 absolute top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
              />
            </div>
          </div>
        </div>
        <div className="relative flex items-center  flex-col self-center">
          {/* Rope */}
          <div
            className={`${
              issOpen ? 'h-20' : 'h-14'
            } bg-gray-800 transform  w-1 rounded-full transition-all duration-300 ease-in-out`}
          />
          <div
            onClick={toggleScreen}
            className={`${
              issOpen ? 'translate-y-0' : ' animate-bounce -translate-y-2'
            } bg-gray-800  transform  w-8 h-8 rounded-full transition-transform duration-300 ease-in-out`}
          />
          {issOpen ? (
            <></>
          ) : (
            <span
              onClick={toggleScreen}
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-55"
            ></span>
          )}
        </div>

        {/* Projection Screen Toggle Button */}
        {/* <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-200 text-gray-700 rounded-full p-4 text-2xl focus:outline-none"
          onClick={toggleScreen}
        >
          {isOpen ? 'Close ' : 'Open '}
        </button> */}
      </div>
    </div>
  );
};

export default ProjectionScreen;
