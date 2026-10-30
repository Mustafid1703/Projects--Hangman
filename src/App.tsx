import { useState } from 'react';
import HangmanDraw from './components/HangmanDraw';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import words from '../wordList.json';

function App() {
  // mengambil satu kata random di wordList.json
  const [currentWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectLetters = selectedLetters.filter((letter) => {
    return !currentWord.includes(letter);
  });

  const isWon = currentWord.split('').every((letter) => selectedLetters.includes(letter));
  const isLost = incorrectLetters.length >= 6;

  const handleSelectLetter = (letter: string) => {
    if (isWon || isLost || selectedLetters.includes(letter)) return;
    setSelectedLetters((currentLetters) => [...currentLetters, letter]);
  };

  return (
    <section className='flex flex-col items-center gap-10'>
      <div>
        {isWon
          ? 'You win, refresh and try again!'
          : isLost
            ? 'Nice try, refresh and try again!'
            : ''}
      </div>

      <HangmanDraw attempt={incorrectLetters.length} />
      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
        isWon={isWon}
        isLost={isLost}
      />
      <Keyboard
        selectedLetters={selectedLetters}
        onSelectLetter={handleSelectLetter}
        disabled={isWon || isLost}
      />
    </section>
  );
}

export default App;
