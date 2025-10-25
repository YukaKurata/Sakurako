
import React, { useState, useEffect } from 'react';

interface TextBoxProps {
  speaker?: string;
  dialogue: string;
  onFinished: () => void;
}

const TYPEWRITER_SPEED = 50; // ms per character

const TextBox: React.FC<TextBoxProps> = ({ speaker, dialogue, onFinished }) => {
  const [displayedText, setDisplayedText] = useState('');
  const isTyping = displayedText.length < dialogue.length;

  useEffect(() => {
    setDisplayedText('');
  }, [dialogue]);

  useEffect(() => {
    if (isTyping) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(dialogue.slice(0, displayedText.length + 1));
      }, TYPEWRITER_SPEED);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, dialogue, isTyping]);

  const handleClick = () => {
    if (isTyping) {
      setDisplayedText(dialogue);
    } else {
      onFinished();
    }
  };

  return (
    <div
      className="w-full bottom-0 left-0 p-5 cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-black bg-opacity-70 text-white rounded-lg p-6 shadow-lg backdrop-blur-sm">
        {speaker && <h3 className="text-2xl font-bold mb-2 text-yellow-300">{speaker}</h3>}
        <p className="text-xl h-24 whitespace-pre-wrap">{displayedText}</p>
        {!isTyping && <div className="text-right animate-pulse">▼</div>}
      </div>
    </div>
  );
};

export default TextBox;
