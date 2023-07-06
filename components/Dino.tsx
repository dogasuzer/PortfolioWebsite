import Image from 'next/image';
import { useState, useEffect } from 'react';

const Dino = () => {
  const DINO_FRAME_COUNT = 2;
  const FRAME_TIME = 200;

  const [dinoFrame, setDinoFrame] = useState(0);

  useEffect(() => {
    let animationInterval: NodeJS.Timeout;

    const startAnimation = () => {
      animationInterval = setInterval(() => {
        setDinoFrame(prevFrame => (prevFrame + 1) % DINO_FRAME_COUNT);
      }, FRAME_TIME);
    };

    const stopAnimation = () => {
      clearInterval(animationInterval);
    };

    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <div className="w-auto">
      <Image
        src={`/dino-run-${dinoFrame}.svg`}
        alt="Dinosaur"
        width={300}
        height={300}
        style={{ filter: 'drop-shadow(-8px 0 0px yellow)' }}
      />
    </div>
  );
};

export default Dino;
