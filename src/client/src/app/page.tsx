"use client";

import React, { useState, useRef } from "react";
import GrowingInput from "@/components/growing-input";
import { RequestSolution } from "@/services/api";

export default function Home() {
  const [puzzleCharacters, setPuzzleCharacters] = useState(Array(48).fill(""));
  const [totalWords, setTotalWords] = useState("");
  const [solutionResponse, setSolutionResponse] =
    useState<SolutionResponse | null>(null);
  const themeInputRef: any = useRef(null);

  const handleInputChange = (index: number, value: any) => {
    const newThemeWords = [...puzzleCharacters];
    newThemeWords[index] = value.toUpperCase();
    setPuzzleCharacters(newThemeWords);
  };

  const handleSubmit = async (hints: boolean) => {
    const themeValue = themeInputRef.current ? themeInputRef.current.value : "";

    const data: SolutionRequest = {
      puzzle: puzzleCharacters,
      words: totalWords as unknown as number,
      theme: themeValue,
      hints,
    };

    try {
      const response = await RequestSolution(data);
      setSolutionResponse(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <div className="p-8">
        <div className="font-serif text-3xl font-black">
          Strands <span className="font-extralight italic">Untangled</span>
        </div>
      </div>
      <div className="my-2 w-full border-t border-gray-300"></div>
      <div className="mr-8 flex justify-end">
        <div className="text-xl font-black">?</div>
      </div>
      <div className="my-2 w-full border-t border-gray-300"></div>
      <div className="p-4">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-1 justify-center md:mr-16 md:justify-end">
            <div className="flex min-w-96 flex-col">
              <div className="max-w-96 items-center overflow-hidden rounded-lg border border-gray-300">
                <div className="flex h-1/3 w-full items-center justify-center bg-sky-200 font-bold">
                  TODAY'S THEME
                </div>
                <div className="flex w-full items-center justify-center p-2 text-2xl font-bold">
                  <span>"</span>
                  <GrowingInput ref={themeInputRef} />
                  <span>"</span>
                </div>
              </div>
              <div className="flex max-w-96 flex-col items-center">
                <div className="flex items-center">
                  <input
                    placeholder="0"
                    maxLength={1}
                    className="w-4 rounded font-bold focus:outline-none"
                    value={totalWords}
                    onChange={(e) => setTotalWords(e.target.value)}
                  />
                  <span className="">total theme words.</span>
                </div>
              </div>
              <div className="mt-6 flex max-w-96 justify-center space-x-2">
                <button
                  onClick={() => handleSubmit(false)}
                  className="rounded-full border-2 border-gray-400 px-8 py-2 text-gray-500 hover:border-black hover:bg-black hover:text-white"
                >
                  Solve
                </button>
                <button
                  onClick={() => handleSubmit(true)}
                  className="rounded-full border-2 border-gray-400 px-8 py-2 text-gray-500 hover:border-black hover:bg-black hover:text-white"
                >
                  Hints
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 md:ml-16">
            <div className="grid h-96 w-80 grid-cols-6 grid-rows-8">
              {Array.from({ length: 48 }).map((_, index) => (
                <input
                  key={index}
                  className="w-8 rounded text-center text-2xl font-medium focus:outline-none"
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
      <div>
        {solutionResponse && (
          <div className="mx-auto max-w-7xl px-4 lg:px-0">
            {solutionResponse.hints && solutionResponse.hints.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold">Hints</h2>
                <div className="mt-4">
                  {solutionResponse.hints.map((hint, index) => (
                    <div key={index} className="relative my-1 ml-1 py-2 pl-1">
                      <div
                        className="absolute inset-0 cursor-pointer backdrop-blur-sm"
                        onClick={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      ></div>
                      <pre className="overflow-x-scroll rounded">{hint}</pre>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <h2 className="mt-4 text-2xl font-bold">Strand Words</h2>

            <div className="my-6 ml-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              {solutionResponse.words.map((word, index) => (
                <div key={index} className="relative my-1 ml-1 pl-1">
                  <div
                    className="absolute inset-0 cursor-pointer backdrop-blur-sm"
                    onClick={(e) => (e.currentTarget.style.display = "none")}
                  ></div>
                  {word}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
