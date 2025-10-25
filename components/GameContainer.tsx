
import React from 'react';

interface GameContainerProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const GameContainer: React.FC<GameContainerProps> = ({ backgroundImage, children }) => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative w-full h-full bg-black bg-opacity-10">
        {children}
      </div>
    </div>
  );
};

export default GameContainer;
