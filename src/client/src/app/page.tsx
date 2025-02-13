"use client";

import React, { useState, useRef } from "react";
import GrowingInput from "@/components/growing-input";

export default function Home() {
  const [puzzleCharacters, setPuzzleCharacters] = useState(Array(48).fill(""));
  const [totalWords, setTotalWords] = useState("");
  const themeInputRef: any = useRef(null);

  const handleInputChange = (index: number, value: any) => {
    const newThemeWords = [...puzzleCharacters];
    newThemeWords[index] = value.toUpperCase();
    setPuzzleCharacters(newThemeWords);
  };

  const handleSubmit = async (hints: boolean) => {
    const themeValue = themeInputRef.current ? themeInputRef.current.value : "";

    const data = {
      puzzle: puzzleCharacters,
      words: totalWords,
      theme: themeValue,
      hints,
    };

    try {
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <div className="p-8">
        <div className="font-serif text-3xl font-black">
          Strands <span className="italic font-extralight">Untangled</span>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 my-2"></div>
      <div className="flex justify-end mr-8">
        <div className="font-black text-xl">?</div>
      </div>
      <div className="w-full border-t border-gray-300 my-2"></div>
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex-1 flex justify-center md:justify-end md:mr-16">
            <div className="flex flex-col min-w-96">
              <div className="border border-gray-300 rounded-lg overflow-hidden items-center max-w-96">
                <div className="bg-sky-200 h-1/3 font-bold flex justify-center items-center w-full">
                  TODAY'S THEME
                </div>
                <div className="p-2 flex justify-center items-center w-full font-bold text-2xl">
                  <span>"</span>
                  <GrowingInput ref={themeInputRef} />
                  <span>"</span>
                </div>
              </div>
              <div className="flex flex-col items-center max-w-96">
                <div className="flex items-center">
                  <input
                    placeholder="0"
                    maxLength={1}
                    className="rounded focus:outline-none w-4 font-bold"
                    value={totalWords}
                    onChange={(e) => setTotalWords(e.target.value)}
                  />
                  <span className="">total theme words.</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-6 justify-center max-w-96">
                <button
                  onClick={() => handleSubmit(false)}
                  className="border-2 border-gray-400 text-gray-500 rounded-full px-8 py-2 hover:bg-black hover:text-white hover:border-black"
                >
                  Solve
                </button>
                <button
                  onClick={() => handleSubmit(true)}
                  className="border-2 border-gray-400 text-gray-500 rounded-full px-8 py-2 hover:bg-black hover:text-white hover:border-black"
                >
                  Hints
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 md:ml-16">
            <div className="grid grid-cols-6 grid-rows-8 w-80 h-96">
              {Array.from({ length: 48 }).map((_, index) => (
                <input
                  key={index}
                  className="rounded focus:outline-none w-8 text-center text-2xl"
                  placeholder={`_`}
                  maxLength={1}
                  value={puzzleCharacters[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
