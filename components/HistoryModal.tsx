import React from 'react';
import { SceneId, TextLine } from '../types';

interface HistoryEntry {
  sceneId: SceneId;
  lineIndex: number;
  textLine: TextLine;
  points: number;
}

interface HistoryModalProps {
  history: HistoryEntry[];
  onClose: () => void;
  onJumpTo: (index: number) => void;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ history, onClose, onJumpTo }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-3xl font-bold text-white">セリフ履歴</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-200"
            title="閉じる"
          >
            ×
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto p-6">
          {history.length === 0 ? (
            <p className="text-gray-400 text-center py-8">まだセリフがありません</p>
          ) : (
            <div className="space-y-3">
              {history.map((entry, index) => (
                <div
                  key={index}
                  onClick={() => onJumpTo(index)}
                  className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 cursor-pointer transition-colors duration-200 border border-gray-700 hover:border-purple-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm font-mono">#{index + 1}</span>
                      {entry.textLine.speaker && (
                        <span className="text-yellow-300 font-bold text-lg">
                          {entry.textLine.speaker}
                        </span>
                      )}
                    </div>
                    <span className="text-purple-400 text-sm">
                      ポイント: {entry.points}
                    </span>
                  </div>
                  <p className="text-white text-base leading-relaxed whitespace-pre-wrap">
                    {entry.textLine.dialogue}
                  </p>
                  {index === history.length - 1 && (
                    <div className="mt-2 text-green-400 text-sm font-bold">
                      ← 現在のセリフ
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 bg-gray-800">
          <p className="text-gray-400 text-sm text-center">
            セリフをクリックすると、その時点に戻ることができます
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
