import React, { useEffect, useRef } from 'react';

const MatrixCodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'doga';
    const latin = 'doga';
    const nums = 'doga';

    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = '#ffffff6e';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#23547c';
      context.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const intervalId = setInterval(draw, 100); // Adjust the delay here (in milliseconds) to control the speed of the rain effect

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className=" h-full w-screen absolute top-0 left-0"
    />
  );
};

export default MatrixCodeRain;
