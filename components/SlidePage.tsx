const skillsArray = [
  {
    skill: 'Typescript',
    description:
      "I have extensively utilized TypeScript's power to enhance the reliability and maintainability of my codebase. By embracing TypeScript's static type system, I ensure early detection of potential errors and improved code quality. This demonstrates my deep understanding of TypeScript's ability to catch type-related issues during development, resulting in more robust and bug-free applications."
  },
  {
    skill: 'Javascript',
    description:
      'JavaScript is the foundation of my web development journey. I utilize JavaScript to build interactive and dynamic web applications, leveraging its versatility and wide range of libraries and frameworks (mostly REACT).'
  },
  {
    skill: 'React',
    description:
      'React is a JavaScript library I frequently employ to build user interfaces. With React, I create reusable components, manage state efficiently, and build interactive UIs, resulting in scalable and performant applications.'
  },
  {
    skill: 'Next.js',
    description:
      'PS: This website is built with Next.js 👀👀 In my Watchnext project, I showcase my proficiency in Next.js and my ability to use it effectively for creating dynamic and captivating web applications. Through Next.js, I utilize features like SSR, API integration, efficient routing, and attractive interfaces to deliver exceptional user experiences.'
  },
  {
    skill: 'React Native',
    description:
      'React Native is a JavaScript framework I specialize in for building native mobile applications. With React Native, I develop robust and performant mobile apps for iOS and Android platforms, sharing a single codebase and utilizing platform-specific components.'
  },
  {
    skill: 'Tailwind',
    description:
      'Tailwind CSS is my go-to utility-first CSS framework. It allows me to rapidly build responsive and aesthetically pleasing user interfaces by composing classes that provide ready-to-use styles, resulting in streamlined development.'
  },
  {
    skill: 'AWS',
    description:
      "Amazon Web Services (AWS) is a cloud computing platform I utilize for hosting, and deploying web applications. Through the utilization of Amplify's authentication, storage, API services, and built-in UI components, I have created modern applications that leverage the power of the AWS cloud. I used AWS AppSync to create robust and efficient data-driven applications,and implemented real-time data synchronization with AWS Appsync."
  },
  {
    skill: 'CSS',
    description:
      'CSS is a fundamental technology for web styling. I leverage CSS to create visually appealing and responsive user interfaces, applying layout, animations, and styling techniques to enhance the overall user experience.'
  },
  {
    skill: 'MongoDB',
    description:
      'MongoDB is a NoSQL database I use to store and manage data for my applications. With MongoDB, I can design flexible and scalable data models, perform complex queries, and ensure efficient data retrieval and storage.'
  },
  {
    skill: 'Node.js',
    description:
      'Node.js is a powerful JavaScript runtime environment I employ for server-side development. With Node.js, I build fast and scalable backend applications, leveraging its event-driven architecture and extensive package ecosystem.'
  },
  {
    skill: 'Redux',
    description:
      'Redux is a state management library I use for global state management. It offers a centralized solution. Additionally, Zustand and custom hooks have been valuable tools for managing both global application state and local component-level state. They contribute to building scalable and maintainable applications.'
  },
  {
    skill: 'Postman',
    description:
      'Postman is an API development tool I use to test APIs. With Postman, I can make HTTP requests, inspect responses, and automate testing, ensuring reliable and well-documented API integrations.'
  },
  {
    skill: 'Graphql',
    description:
      'GraphQL is a query language and runtime I employ to create efficient and flexible APIs. With GraphQL, I define schemas, query data efficiently, and enable clients to request precisely the data they need, reducing over-fetching and under-fetching.'
  },
  {
    skill: 'Git',
    description:
      'Git is a distributed version control system I use to track changes in my codebase. With Git, I manage source code, collaborate with teammates, and maintain version history, ensuring smooth development workflows and easy code rollbacks.'
  },
  {
    skill: 'Html',
    description:
      'HTML is the backbone of web development. I utilize HTML to structure web pages, define content semantics, and create accessible and well-organized documents that form the basis of user interfaces.'
  },
  {
    skill: 'Firebase',
    description:
      'Firebase is a comprehensive platform I utilize for building web and mobile applications. With Firebase, I integrate authentication, database, hosting, and other services to rapidly develop and deploy scalable and real-time applications.'
  },
  {
    skill: 'Figma',
    description:
      'Figma is a collaborative design tool I use to create wireframes, prototypes, and high-fidelity designs. With Figma, I design visually appealing interfaces, collaborate with team members, and ensure seamless design-to-development handoff.'
  }
];

import useSlideStore from '@/hooks/useSlideStore';
import React from 'react';
import Image from 'next/image';

const SlidePage = () => {
  const { currentSkill, setCurrentSkill } = useSlideStore();
  const skillIndex = currentSkill - 1;

  return (
    <div className=" z-30 w-screen h-screen justify-center gap-8  mx-4 lg:mx-8 center lg:mt-4 flex  ">
      <div className="mt-60 pt-10 absolute center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl hover:scale-125 border-purple-500 border-2	 bg-zinc-500 bg-opacity-70 rounded-full w-64 h-64 ">
        {skillsArray[skillIndex].skill}
        <div className="justify-center hidden lg:flex">
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width={80}
            height={80}
            className={`${
              currentSkill == 1 ? 'visible ' : 'invisible'
            } absolute`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width={80}
            height={80}
            className={`${
              currentSkill == 2 ? 'visible ' : 'invisible'
            } absolute`}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width={80}
            height={80}
            className={`${
              currentSkill == 3 ? 'visible ' : 'invisible'
            } absolute`}
          />
          <Image
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width={80}
            height={80}
            className={`${
              currentSkill == 4 ? 'visible ' : 'invisible'
            } absolute mt-6`}
          />

          <Image
            src="/reactnatix.png"
            alt="reactnative"
            width={80}
            height={30}
            className={`${
              currentSkill == 5 ? 'visible ' : 'invisible'
            } absolute`}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width={80}
            height={80}
            className={`${
              currentSkill == 6 ? 'visible ' : 'invisible'
            } absolute `}
          />

          <Image
            src="https://docs.amplify.aws/assets/logo-dark.svg"
            alt="amplify"
            width={80}
            height={80}
            className={`${
              currentSkill == 7 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width={80}
            height={80}
            className={`${
              currentSkill == 8 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width={80}
            height={80}
            className={`${
              currentSkill == 9 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width={80}
            height={80}
            className={`${
              currentSkill == 10 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width={80}
            height={80}
            className={`${
              currentSkill == 11 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width={80}
            height={80}
            className={`${
              currentSkill == 12 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
            alt="graphql"
            width={80}
            height={80}
            className={`${
              currentSkill == 13 ? 'visible ' : 'invisible'
            } absolute `}
          />

          <Image
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width={80}
            height={80}
            className={`${
              currentSkill == 14 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width={80}
            height={80}
            className={`${
              currentSkill == 15 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            width={80}
            height={80}
            className={`${
              currentSkill == 16 ? 'visible ' : 'invisible'
            } absolute `}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="figma"
            width={80}
            height={80}
            className={`${
              currentSkill == 17 ? 'visible ' : 'invisible'
            } absolute `}
          />
        </div>
      </div>

      <div className="absolute top-48 left-24 justify-center items-center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl border-purple-500 border-2 border-opacity-75 bg-zinc-500 bg-opacity-70 rounded-full w-40 h-40">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          alt="nextjs"
          width={60}
          height={60}
          className={`absolute`}
        />
      </div>

      <div className="absolute top-48 right-24 justify-center items-center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl border-yellow-200 border-2 border-opacity-75 bg-zinc-500 bg-opacity-70 rounded-full w-40 h-40">
        <Image
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="tailwind"
          width={60}
          height={60}
          className={`absolute`}
        />
      </div>

      <div className="absolute bottom-48 right-48 justify-center items-center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl border-yellow-200 border-2 border-opacity-75 bg-zinc-500 bg-opacity-70 rounded-full w-40 h-40">
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width={70}
          height={70}
          className={`absolute`}
        />
      </div>

      <div className="absolute bottom-48 left-52 justify-center items-center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl border-purple-500 border-2 border-opacity-75 bg-zinc-500 bg-opacity-70 rounded-full w-40 h-40">
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width={60}
          height={60}
          className={`absolute`}
        />
      </div>

      <div className="invisible 2xl:visible absolute bottom-96 2xl:left-72 ml-48 justify-center items-center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl border-opacity-75 border-yellow-200 border-2 bg-zinc-500 bg-opacity-70 rounded-full w-40 h-40">
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width={60}
          height={60}
          className={`absolute`}
        />
      </div>

      <div className="invisible 2xl:visible absolute bottom-96 2xl:right-72 mr-36 justify-center items-center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl border-opacity-75 border-purple-500 border-2 bg-zinc-500 bg-opacity-70 rounded-full w-40 h-40">
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="typescript"
          width={60}
          height={60}
          className={`absolute`}
        />
      </div>

      <div className="invisible 2xl:visible absolute bottom-482xl:right-96 mr-96 justify-center items-center text-zinc-300 flex-col gap-6 flex text-center font-bold text-lg lg:text-2xl border-opacity-75 border-yellow-200 border-2 bg-zinc-500 bg-opacity-70 rounded-full w-40 h-40">
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
          width={60}
          height={60}
          className={`absolute`}
        />
      </div>
    </div>
  );
};

export default SlidePage;
