import { useEffect, useRef, useState } from 'react';

function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

interface TextAnimationProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  style,
  text,
  className,
  delay = 0
}) => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setAnimatedText(prevText => {
        if (currentIndex >= text.length) {
          clearInterval(interval);
          return prevText;
        }
        const nextChars = text
          .split('')
          .slice(0, currentIndex + 1)
          .join('');
        currentIndex++;
        return nextChars;
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  useTimeout(() => {
    setAnimatedText(text);
  }, delay);

  return (
    <span className={className} style={style}>
      {animatedText}
    </span>
  );
};

export default TextAnimation;
