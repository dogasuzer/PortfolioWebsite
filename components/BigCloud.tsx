import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSwitchStore from '@/hooks/useSwitchStore';

const BigCloud = () => {
  const [showCactus, setShowCactus] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useSwitchStore();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      const getRandomTime = () => {
        const timeFrames = [1000, 2000, 3000];
        const randomIndex = Math.floor(Math.random() * timeFrames.length);
        return timeFrames[randomIndex];
      };

      const addCactus = () => {
        setShowCactus(true);
        setTimeout(() => {
          setShowCactus(false);
          timer = setTimeout(addCactus, getRandomTime());
        }, 5000); // Display the cactus for 5 seconds
      };

      timer = setTimeout(addCactus, getRandomTime());

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  return (
    <div className="w-full h-96 relative overflow-hidden">
      {showCactus && (
        <div
          className="absolute bottom-0 right-full"
          style={{
            animation: 'slide 5s linear',
            animationFillMode: 'forwards',
            animationIterationCount: 'infinite'
          }}
        >
          <Image src="/bigcloud.png" width={140} height={140} alt="cloud" />
        </div>
      )}
      <style jsx>{`
        @keyframes slide {
          0% {
            right: 0;
          }
          100% {
            right: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BigCloud;
