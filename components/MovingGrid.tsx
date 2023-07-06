import React, { useEffect, useRef } from 'react';
interface NeonGridFloorProps {
  gridColor: string;
  backgroundColor: string;
}

const NeonGridFloor: React.FC<NeonGridFloorProps> = ({
  gridColor,
  backgroundColor
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const gridSize = 30;

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    let offset = -1;
    let requestId: number;

    const draw = () => {
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, canvasWidth, canvasHeight);

      context.strokeStyle = gridColor;
      context.lineWidth = 10;

      for (let x = -gridSize + offset; x < canvasWidth; x += gridSize) {
        for (let y = -gridSize; y < canvasHeight; y += gridSize) {
          context.beginPath();
          context.moveTo(x, y + gridSize);
          context.lineTo(x + gridSize, y);
          context.closePath();
          context.stroke();
        }
      }

      offset -= 0.5;

      requestId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-screen absolute " />;
};

export default NeonGridFloor;
