import { useState } from "react";

export default function GirlfriendSorry() {
  const [yesSize, setYesSize] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setPosition({ x: randomX, y: randomY });
    setYesSize((prev) => prev + 0.2);
  };

  if (accepted) {
    return (
      <div className="flex items-center justify-center h-screen bg-pink-200 text-center">
        <h1 className="text-5xl font-bold text-red-600">
          Yaaay 😍❤️ I Love You Jaan!!!
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-300 via-rose-200 to-yellow-200 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-black text-red-600 mb-4">
        Baby Sorry 🥺❤️
      </h1>

      <p className="text-lg mb-10">Galti ho gayi... Ab maan jao na 😭🙏</p>

      <div className="relative flex gap-6">
        <button
          onClick={() => setAccepted(true)}
          className="px-6 py-3 bg-red-500 text-white rounded-full text-lg shadow-xl"
        >
          Theek Hai ❤️
        </button>

        <button
          onMouseEnter={moveNoButton}
          className="px-6 py-3 bg-black text-white rounded-full text-lg shadow-xl"
        >
          Nahi 😤
        </button>
      </div>
    </div>
  );
}
