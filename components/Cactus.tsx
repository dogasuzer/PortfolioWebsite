import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSwitchStore from '@/hooks/useSwitchStore';

const Cactus = () => {
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
        }, 3000);
      };

      timer = setTimeout(addCactus, getRandomTime());

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  return (
    <div className="mt-12 w-full h-96 relative overflow-hidden">
      {showCactus && (
        <div
          className="absolute bottom-0 right-full"
          style={{
            animation: 'slide 3s linear',
            animationFillMode: 'forwards',
            animationIterationCount: 'infinite'
          }}
        >
          <Image src="/cactus.png" width={100} height={200} alt="cloud" />
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

export default Cactus;
