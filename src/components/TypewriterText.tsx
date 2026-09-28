import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseTime = 1800,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
          if (currentText.length + 1 === fullWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
          if (currentText.length - 1 === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 font-extrabold">
      <span>{currentText}</span>
      <span className="w-[3px] h-[1em] bg-amber-400 inline-block ml-1 animate-pulse rounded-full" />
    </span>
  );
};
