const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

interface KeyboardProps {
  selectedLetters: string[];
  onSelectLetter: (letter: string) => void;
  disabled: boolean;
}

function Keyboard({ selectedLetters, onSelectLetter, disabled }: KeyboardProps) {
  return (
    <section className='flex flex-wrap w-140 gap-2'>
      {KEYS.map((letter, index) => {
        return (
          <button
            key={index}
            type='button'
            disabled={disabled || selectedLetters.includes(letter.toLowerCase())}
            onClick={() => onSelectLetter(letter.toLowerCase())}
            className='border-2 font-semibold p-5 disabled:opacity-50'>
            {letter}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;
