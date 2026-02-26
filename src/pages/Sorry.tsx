import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FunnySorry() {
  const [text, setText] = useState("Sorry 😔");

  const messages = [
    "Sorry 😔",
    "Bahut Badi Galti Ho Gayi 😭",
    "Main Sudhar Jaunga Pakka 😅",
    "Last Time Hai Promise 🤞😂",
    "Meri jaban tut gyi bhaiya 😭🙏",
  ];

  const changeText = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setText(random);
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 text-center px-4">
      <h1
        key={text}
        className="text-5xl md:text-7xl font-black text-red-600 drop-shadow-lg"
      >
        {text}
      </h1>

      <div className="text-6xl mt-6">🥺👉👈</div>

      <button
        onClick={changeText}
        className="mt-8 px-6 py-3 bg-black cursor-pointer text-white rounded-full text-lg hover:scale-110 transition-transform shadow-xl"
      >
        Ek Baar Aur Sorry Bolu? 😂
      </button>
      <button
        onClick={() => navigate("/sorry")}
        className="mt-8 px-6 py-3 bg-black cursor-pointer text-white rounded-full text-lg hover:scale-110 transition-transform shadow-xl"
      >
        Go Back
      </button>
    </div>
  );
}
