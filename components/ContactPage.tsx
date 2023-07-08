import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithubSquare, FaMailchimp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function ContactPage() {
  const linkedinUrl = 'https://www.linkedin.com/in/helin-doga-suzer-884029217/';
  const gitHubUrl = 'https://github.com/dogasuzer';
  const emailAddress = 'doga.suzer@hotmail.com';
  const handleEmailClick = () => {
    const subject = 'Hello!';
    const body = 'Just say hi!';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };
  return (
    <div className="w-screen h-screen absolute bg-purple-100 overflow-hidden flex justify-center">
      <div className="z-30 absolute text-center mt-24 text-zinc-600 text-3xl md:text-7xl font-semibold  ">
        Contact<span className=" text-2xl md:text-6xl ml-2">&#10024;</span>
        <div className="flex text-purple-400 pr-2 items-center justify-center gap-16 flex-row mt-10  w-full h-40 ">
          <Link target="_blank" href={linkedinUrl} passHref>
            <FaLinkedin className="h-40 hover:text-zinc-700" />
          </Link>
          <Link target="_blank" href={gitHubUrl} passHref>
            <FaGithubSquare className="h-40 hover:text-zinc-700" />{' '}
          </Link>
        </div>
        <div
          onClick={handleEmailClick}
          className="flex text-2xl md:text-3xl mt-24 md:mt-0 hover:text-zinc-700 text-zinc-500 pr-2 items-center justify-center flex-row "
        >
          <HiMail className="text-2xl md:text-5xl  text-purple-400 mr-4" />
          doga.suzer@hotmail.com
        </div>
      </div>
      <div className="w-screen h-screen flex justify-center">
        <div
          style={{ width: '100rem', height: '100rem', bottom: '-40rem' }}
          className="rounded-full border-purple-300 border-4  absolute "
        ></div>{' '}
        <div
          style={{ width: '110rem', height: '110rem', bottom: '30rem' }}
          className="rounded-full border-purple-400 border-4 -bottom-96 absolute "
        ></div>{' '}
        <div
          style={{ width: '70rem', height: '70rem', bottom: '30rem' }}
          className="rounded-full border-purple-300 border-4 -bottom-96 absolute "
        ></div>{' '}
        <div
          style={{ width: '70rem', height: '70rem', bottom: '-50rem' }}
          className="rounded-full bg-purple-200 -bottom-48 absolute "
        ></div>
      </div>
      <Image
        className="absolute bottom-10 invisible md:visible w-72 md:w-96"
        src="/dino.png"
        alt="cutedino"
        width={400}
        height={400}
      />
    </div>
  );
}

export default ContactPage;
