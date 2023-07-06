import { motion, useAnimation, TargetAndTransition } from 'framer-motion';
import Dino from '@/components/Dino';
import Image from 'next/image';

interface GameProps {
  isJumping: boolean;
  isRunning?: boolean;
}

const DinosaurGame: React.FC<GameProps> = ({ isJumping, isRunning }) => {
  const bounceAnimation: TargetAndTransition = {
    y: [0, -50, 0], // Keyframes for vertical movement
    transition: {
      duration: 0.6,
      repeat: Infinity, // Infinite animation
      repeatType: 'reverse' // Reverse the animation on each repeat
    }
  };

  const jumpAnimation: TargetAndTransition = {
    y: [0, -300, -200, -100, 0], // Keyframes for vertical movement
    transition: {
      duration: 1,
      repeat: 1, // Infinite animation
      repeatType: 'reverse' // Reverse the animation on each repeat
    }
  };

  return (
    <div className=" ml-10 flex items-center	">
      <motion.div
        initial={{ y: 0 }} // Initial position
        animate={isJumping ? jumpAnimation : bounceAnimation} // Animation configuration
        className="w-100 h-100"
      >
        {isRunning ? (
          <Dino />
        ) : (
          <Image
            src={'/dino.svg'}
            width={300}
            height={300}
            alt={'logo'}
            style={{ filter: 'drop-shadow(-8px 0 0px yellow)' }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default DinosaurGame;
