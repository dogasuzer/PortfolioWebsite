import Image from 'next/image';
import ProjectionScreenop2 from './ProjectionScreenop2';
import React from 'react';
import { useState } from 'react';

import useSlideStore from '@/hooks/useSlideStore';

const SecondPage: React.FC = () => {
  const [issOpen, setIssOpen] = useState(false);
  const { setCurrentSkill, currentSkill, setisCurrentSkillExist } =
    useSlideStore();

  const currentSkillHandler = (input: number) => {
    setCurrentSkill(input);
    setisCurrentSkillExist(true);
    console.log('first');
  };

  const toggleScreen = () => {
    setIssOpen(!issOpen);
  };
  return (
    <div className="relative h-full m-8 flex  justify-center ">
      <div className="invisible lg:visible absolute bottom-96 text-gray-200 left-32 w-44 text-center mb-6 text-sm lg:text-md pb-24 flex flex-wrap">
        P.S. Press the space bar to jump, click the sun to start the game.
      </div>

      <div className="invisible xl:visible w-0 md:w-auto relative h-3/4 flex justify-center items-center z-20 ">
        <ProjectionScreenop2 />
      </div>
      <div className="w-screen h-60 lg:bottom-0 mt-24 lg:mt-0 absolute z-50 flex justify-center">
        <div className=" justify-center absolute mx-16 md:bottom-24 mt-32 md:mt-0 flex-wrap gap-4 flex ">
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(1)}
            className={`${
              currentSkill === 1
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(2)}
            className={`${
              currentSkill === 2
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(3)}
            className={`${
              currentSkill === 3
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(4)}
            className={`${
              currentSkill === 4
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
              currentSkill === 5
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(6)}
            className={`${
              currentSkill === 6
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://docs.amplify.aws/assets/logo-dark.svg"
            alt="amplify"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(7)}
            className={`${
              currentSkill === 7
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />

          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(8)}
            className={`${
              currentSkill === 8
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(9)}
            className={`${
              currentSkill === 9
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(10)}
            className={`${
              currentSkill === 10
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            } bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(11)}
            className={`${
              currentSkill === 11
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-40 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(12)}
            className={`${
              currentSkill === 12
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
            alt="graphql"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(13)}
            className={`${
              currentSkill === 13
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />

          <Image
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(14)}
            className={`${
              currentSkill === 14
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(15)}
            className={`${
              currentSkill === 15
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(16)}
            className={`${
              currentSkill === 16
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="figma"
            width={50}
            height={40}
            onClick={() => currentSkillHandler(17)}
            className={`${
              currentSkill === 17
                ? 'outline-purple-400 outline-4 '
                : 'outline-1  outline-zinc-400'
            }  bg-zinc-100 bg-opacity-30 outline outline-offset-2 hover:outline-4 hover:scale-110`}
          />
        </div>
      </div>

      <div className="z-0 w-screen bottom-0 bg-zinc-800 h-40 absolute"></div>
    </div>
  );
};

export default SecondPage;
