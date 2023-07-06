import React from 'react';

interface BouncyLettersProps {
  initialColor: string;
  onHoverColor: string;
  text: string;
}

const BouncyLetters: React.FC<BouncyLettersProps> = ({
  initialColor,
  onHoverColor,
  text
}) => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const letterElement = event.currentTarget;
    letterElement.style.transform = 'scale(1.2)';
    letterElement.style.color = onHoverColor;
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
    const letterElement = event.currentTarget;
    letterElement.style.transform = 'scale(1)';
    letterElement.style.color = initialColor;
  };

  return (
    <span>
      {Array.from(text).map((character, index) => (
        <span
          key={index}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'inline-block',
            transition: 'transform 0.3s, color 0.3s'
          }}
        >
          {character === ' ' ? '\u00A0' : character}
        </span>
      ))}
    </span>
  );
};

export default BouncyLetters;
