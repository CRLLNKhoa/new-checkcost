"use client";
import React, { useState } from "react";
import quizArray from "@/jsons/year100.json";
import { Button } from "@/components/ui/button";

function convertSecondsToTime(seconds: number): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const hours = Math.floor(seconds / 3600); // Tính số giờ
  const minutes = Math.floor((seconds % 3600) / 60); // Tính số phút còn lại sau khi trừ giờ
  const remainingSeconds = seconds % 60; // Số giây còn lại

  return {
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds,
  };
}

function TimeNMPage() {
  const [searchTerm, setSearchTerm] = useState<number>(0);
  const [results, setResults] = useState<string>("Chưa tìm kiếm.");

  const handleSearch = () => {
    const q = ((searchTerm - 1) / 10) * 3 - 201;
    const format = convertSecondsToTime(q);
    const formattedTime = `${format.hours
    .toString()
    .padStart(2, "0")}:${format.minutes
    .toString()
    .padStart(2, "0")}:${Math.floor(format.seconds)
    .toString()
    .padStart(2, "0")}`;
    setResults(formattedTime);
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 pb-12">
      <h1
        className="text-xl uppercase font-bold text-center
        bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
        bg-clip-text text-transparent mt-6"
      >
        Thời gian Nightmare theo day
      </h1>
      <p className="text-center">
        Thời gian có thể chênh lệch 1 ít do sức mạnh đội hình của bạn.
      </p>
      <div className="w-full max-w-lg h-12 border rounded-lg mt-8 overflow-hidden">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(Number(e.target.value))}
          placeholder="Nhập day bạn muốn tìm..."
          type="number"
          className="w-full h-full outline-none p-2 px-4"
        />
      </div>
      <Button className="my-4 min-w-72 h-12" onClick={handleSearch}>
        Search
      </Button>
      <div className="w-full max-w-lg flex flex-col gap-4 border p-4 rounded-md">
        <p className="text-center text-3xl font-bold">{results}</p>
      </div>
    </div>
  );
}

export default TimeNMPage;
