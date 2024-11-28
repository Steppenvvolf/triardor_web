import React from 'react';

const HexGrid = () => {
  const hexagons = [
    { id: 1, type: 'center', x: 0, y: 0 },
    { id: 2, type: 'letter', x: -1, y: -1 },
    { id: 3, type: 'letter', x: 1, y: -1 },
    { id: 4, type: 'letter', x: -2, y: 0 },
    { id: 5, type: 'letter', x: 2, y: 0 },
    { id: 6, type: 'letter', x: -1, y: 1 },
    { id: 7, type: 'letter', x: 1, y: 1 },
    { id: 8, type: 'letter', x: 0, y: -2 },
    { id: 9, type: 'letter', x: 0, y: 2 },
    { id: 10, type: 'letter', x: -2, y: -1 },
    { id: 11, type: 'letter', x: 2, y: 1 },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <svg 
        viewBox="-300 -300 600 600" 
        className="w-full h-full max-w-[500px]"
      >
        {hexagons.map(({ id, type, x, y }) => {
          const posX = x * 60 * Math.sqrt(3);
          const posY = y * 60 * 1.5;
          
          return (
            <g 
              key={id} 
              transform={`translate(${posX}, ${posY})`}
            >
              <polygon
                points="52,0 26,45 -26,45 -52,0 -26,-45 26,-45"
                fill="transparent"
                stroke={type === 'center' ? '#FBB659' : '#C38855'}
                strokeWidth="3"
                className="transition-colors duration-300 hover:stroke-[#FBB659]"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default HexGrid;