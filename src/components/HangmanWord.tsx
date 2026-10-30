interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
  isWon: boolean;
  isLost: boolean;
}

function HangmanWord({ word, selectedLetters, isWon, isLost }: HangmanWordProps) {
  return (
    <section className='flex gap-6'>
      {word.split('').map((letter, index) => {
        const isRevealed = selectedLetters.includes(letter) || isLost;
        const color = isWon
          ? 'text-green-600'
          : isLost && !selectedLetters.includes(letter)
            ? 'text-red-600'
            : 'text-black';

        return (
          <span
            key={index}
            className={`uppercase font-semibold text-5xl border-b-6 pb-2 border-black ${color}`}>
            <span
              style={{
                visibility: isRevealed ? 'visible' : 'hidden',
              }}>
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;
