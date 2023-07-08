import BouncyLetters from './BouncyLetters';
import Image from 'next/image';

const FirstPage: React.FC = () => {
  return (
    <div className="w-screen flex text-black flex-col sm:flex-row justify-between items-center">
      <div className="sm:pl-8 2xl:ml-24 pl-2 lg:pl-24">
        <div className="text-center text-7xl md:text-8xl font-bold gap-4 flex flex-col ">
          <div style={{ filter: 'drop-shadow(-5px 0 0px #ffd700)' }}>
            <BouncyLetters
              text="Hey! I'm"
              initialColor="#000000"
              onHoverColor="#ffd700"
            />
          </div>

          <div className="justify-center flex flex-rows w-auto text-6xl md:text-8xl xl:text-9xl text-black">
            <p className="bg-primary text-highlight ">d</p>
            <BouncyLetters
              text="oga"
              initialColor="#000000"
              onHoverColor="#ffd700"
            />
            <div className="w-4"> </div>
            <p className="bg-primary text-highlight ">s</p>
            <BouncyLetters
              text="uzer"
              initialColor="#000000"
              onHoverColor="#ffd700"
            />
          </div>

          <div
            style={{ filter: 'drop-shadow(-2px 0 0px rgb(255, 215, 0))' }}
            className=" text-center text-3xl lg:text-4xl"
          >
            <BouncyLetters
              text="SOFTWARE ENGINEER, FRONT END & MOBILE APP DEVELOPER."
              initialColor="#B76EFF"
              onHoverColor="#B76EFF"
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          className="mr-0 xl:mr-36 flex rounded-full bg-primary"
          src="/portrait1.png"
          alt="self-portrait"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default FirstPage;
