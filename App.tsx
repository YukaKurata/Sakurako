import React, { useState, useEffect, useCallback } from 'react';
import { GameState, SceneId, TextLine } from './types';
import { storyData } from './constants/storyData';
import GameContainer from './components/GameContainer';
import TextBox from './components/TextBox';
import ChoiceBox from './components/ChoiceBox';
import HistoryModal from './components/HistoryModal';

interface HistoryEntry {
  sceneId: SceneId;
  lineIndex: number;
  textLine: TextLine;
  points: number;
}

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    sceneId: 'START',
    points: 0,
  });
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnding, setIsEnding] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoading(false);
    });
  }, []);

  const currentScene = storyData[gameState.sceneId];

  // Add current line to history when it changes
  useEffect(() => {
    if (!isLoading && currentScene && currentScene.text[currentLineIndex]) {
      const newEntry: HistoryEntry = {
        sceneId: gameState.sceneId,
        lineIndex: currentLineIndex,
        textLine: currentScene.text[currentLineIndex],
        points: gameState.points,
      };
      setHistory(prev => [...prev, newEntry]);
    }
  }, [gameState.sceneId, currentLineIndex, isLoading]);

  const advanceStory = useCallback(() => {
    if (currentLineIndex < currentScene.text.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
    } else {
      if (currentScene.choices && currentScene.choices.length > 0) {
        setShowChoices(true);
      } else if (currentScene.nextScene) {
        setGameState(prev => ({ ...prev, sceneId: currentScene.nextScene! }));
        setCurrentLineIndex(0);
      } else {
        // Ending logic
        setIsEnding(true);
      }
    }
  }, [currentLineIndex, currentScene]);

  const handleChoice = (points: number, nextScene: SceneId) => {
    setShowChoices(false);
    setGameState(prev => ({
      ...prev,
      points: prev.points + points,
      sceneId: nextScene
    }));
    setCurrentLineIndex(0);
  };

  const restartGame = () => {
    setGameState({ sceneId: 'START', points: 0 });
    setCurrentLineIndex(0);
    setShowChoices(false);
    setIsEnding(false);
    setHistory([]);
  };

  const goBackToPreviousLine = () => {
    if (history.length > 1) {
      // Remove current entry and go to previous
      const newHistory = history.slice(0, -1);
      const previousEntry = newHistory[newHistory.length - 1];
      
      setHistory(newHistory);
      setGameState(prev => ({
        ...prev,
        sceneId: previousEntry.sceneId,
        points: previousEntry.points,
      }));
      setCurrentLineIndex(previousEntry.lineIndex);
      setShowChoices(false);
    }
  };

  const jumpToHistoryEntry = (index: number) => {
    if (index >= 0 && index < history.length) {
      const targetEntry = history[index];
      const newHistory = history.slice(0, index + 1);
      
      setHistory(newHistory);
      setGameState(prev => ({
        ...prev,
        sceneId: targetEntry.sceneId,
        points: targetEntry.points,
      }));
      setCurrentLineIndex(targetEntry.lineIndex);
      setShowChoices(false);
      setShowHistory(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-900 text-white text-2xl">
        <p>読み込み中...</p>
      </div>
    );
  }
  
  const textToShow = currentScene.text[currentLineIndex];

  return (
    <GameContainer backgroundImage={currentScene.backgroundImage}>
      <div className="absolute inset-0 flex flex-col justify-end">
        {/* Control buttons */}
        {!isEnding && (
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={goBackToPreviousLine}
              disabled={history.length <= 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
              title="一つ前のセリフに戻る"
            >
              ← 戻る
            </button>
            <button
              onClick={() => setShowHistory(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
              title="セリフ履歴を表示"
            >
              履歴
            </button>
          </div>
        )}

        {isEnding ? (
           <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center text-white p-8">
             <h2 className="text-4xl font-bold mb-4">{currentScene.title}</h2>
             {/* FIX: The `currentScene.text` is an array of TextLine objects. Mapped over it to extract the `dialogue` string for display, preventing a runtime error where objects would be rendered as "[object Object]". */}
             <p className="text-xl mb-8 whitespace-pre-wrap">{currentScene.text.map(line => line.dialogue).join('\n')}</p>
             <p className="text-lg mb-8">最終ポイント: {gameState.points}</p>
             <button
               onClick={restartGame}
               className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300"
             >
               タイトルへ
             </button>
           </div>
        ) : (
          <>
            <TextBox
              speaker={textToShow.speaker}
              dialogue={textToShow.dialogue}
              onFinished={advanceStory}
            />
            {showChoices && currentScene.choices && (
              <ChoiceBox choices={currentScene.choices} onChoice={handleChoice} />
            )}
          </>
        )}

        {/* History Modal */}
        {showHistory && (
          <HistoryModal
            history={history}
            onClose={() => setShowHistory(false)}
            onJumpTo={jumpToHistoryEntry}
          />
        )}
      </div>
    </GameContainer>
  );
};

export default App;
