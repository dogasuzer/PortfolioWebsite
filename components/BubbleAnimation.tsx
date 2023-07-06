import React, { useState, useEffect } from 'react';
import useBubbleStore, { Bubble } from '../hooks/useBubbleStore';

interface BubbleAnimationProps {
  bubbleId: string;
  radius: number;
  borderColor: string;
  image: string;
}

const BubbleAnimation: React.FC<BubbleAnimationProps> = ({
  bubbleId,
  radius,
  borderColor,
  image
}) => {
  const [clicked, setClicked] = useState(false);
  const bubbleStore = useBubbleStore();

  useEffect(() => {
    const bubble = bubbleStore.bubbles.find(
      (bubble: Bubble) => bubble.id === bubbleId
    );
    if (bubble) {
      setClicked(true);
      setTimeout(() => {
        bubbleStore.removeBubble(bubbleId);
      }, 1000); // Adjust the duration as needed
    }
  }, [bubbleId, bubbleStore.bubbles]);

  return (
    <div className="relative">
      {clicked && (
        <div
          className={`bubble-animation absolute w-${radius} h-${radius} bg-blue-500 rounded-full animate-bubble-scale`}
          style={{ borderColor }}
        >
          <img
            src={image}
            alt="Bubble"
            className="w-full h-full rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default BubbleAnimation;
