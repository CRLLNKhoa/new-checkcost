"use client";
import React, { useState } from "react";
import quizArray from "@/jsons/year100.json";
import { Button } from "@/components/ui/button";
type QuizItem = {
  question: string;
  answer: string;
};

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm.trim()) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
};

function Year100Page() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<QuizItem[]>([]);

  const handleSearch = () => {
    const filteredResults = quizArray.filter((quizItem) =>
      quizItem.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 pb-12">
      <h1
        className="text-xl uppercase font-bold text-center
        bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
        bg-clip-text text-transparent mt-6"
      >
        Answer the questions
      </h1>
      <p className="text-center">Nhập câu hỏi cán tra cứu.</p>
      <div className="w-full max-w-lg h-12 border rounded-lg mt-8 overflow-hidden">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a keyword to search..."
          type="text"
          className="w-full h-full outline-none p-2 px-4"
        />
      </div>
      <Button className="my-4 min-w-72 h-12" onClick={handleSearch}>
        Search
      </Button>
      <h1 className="font-semibold text-lg mb-6">
        Các câu liên quan: {results.length}
      </h1>
      <div className="w-full max-w-lg flex flex-col gap-4 border p-4 rounded-md">
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index}>
              <h3
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.question, searchTerm),
                }}
                className="font-semibold"
              >
               
              </h3>
              <p className="text-[#3B5695] font-semibold">
                -&gt; {item.answer}
              </p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Year100Page;
