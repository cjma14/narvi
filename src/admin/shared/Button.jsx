import { useState } from 'react';

/**
 * Button Component - Interactive React button with click counter
 * Tests React state management and event handling in Astro
 */
export default function Button({ text = "Click me", variant = "primary" }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    console.log('Button clicked! Count:', count + 1);
  };

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleClick}
        className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${variants[variant] || variants.primary}`}
      >
        {text}
      </button>
      <p className="text-sm text-gray-600">
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </p>
    </div>
  );
}
