
import React from 'react';
import { Choice, SceneId } from '../types';

interface ChoiceBoxProps {
  choices: Choice[];
  onChoice: (points: number, nextScene: SceneId) => void;
}

const ChoiceBox: React.FC<ChoiceBoxProps> = ({ choices, onChoice }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col space-y-4">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoice(choice.points, choice.nextScene)}
            className="px-12 py-4 bg-gray-800 text-white text-lg font-semibold rounded-lg border-2 border-transparent hover:border-yellow-300 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChoiceBox;
