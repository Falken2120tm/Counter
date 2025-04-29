"use client"
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5dc]">
      <div className="w-[400px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col p-6">
        <div className="flex flex-col items-center justify-center flex-grow space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-8">Counter:</h1>
            <p className="text-[50px] font-semibold">{count}</p>
          </div>
          <div className="flex space-x-4">
            <button onClick={onClickMinus} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">- Minus</button>
            <button onClick={onClickPlus} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Plus +</button>
          </div>
        </div>
        <a
          href="https://github.com/Falken2120tm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:underline text-center mt-4"
        >
          Made by Falken2120tm
        </a>
      </div>
    </div>
  );
}
