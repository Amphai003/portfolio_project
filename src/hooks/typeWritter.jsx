import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 100, loopDelay = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    let timer;

    if (currentIndex < text.length) {
      // lerm phim 
      timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    } else {
      // tha lw phim mai
      timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsLooping(prev => !prev); // pien kha phuea trigger effect mai
      }, loopDelay);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, loopDelay, isLooping]); // sai isLooping nai dependencies

  return displayText;
};