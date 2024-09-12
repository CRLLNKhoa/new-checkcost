"use client"
// components/HorizontalSpin.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const prizes: string[] = ['🍎', '🍌', '🍇', '🍒', '🍓', '🍍', '🍉'];

const HorizontalSpin: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [selectedPrize, setSelectedPrize] = useState<string | null>(null);

  const spin = (): void => {
    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * prizes.length);
    setTimeout(() => {
      setSelectedPrize(prizes[randomIndex]);
      setIsSpinning(false);
    }, 3000); // Quay trong 3 giây
  };

  return (
    <div className="text-center mt-12 ">
      <motion.div
        className="flex overflow-hidden w-[300px] mx-auto border-2 border-black"
        animate={{ x: isSpinning ? -5000 : 0 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[100px] h-[100px] flex justify-center items-center text-3xl bg-gray-100 border-r-2 border-gray-300"
          >
            {prize}
          </div>
        ))}
      </motion.div>

      <button
        onClick={spin}
        disabled={isSpinning}
        className={`mt-6 px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded ${
          isSpinning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
        }`}
      >
        {isSpinning ? 'Đang quay...' : 'Quay quà'}
      </button>

      {selectedPrize && (
        <h2 className="mt-6 text-2xl font-bold">Phần thưởng của bạn: {selectedPrize}</h2>
      )}
    </div>
  );
};

export default HorizontalSpin;
