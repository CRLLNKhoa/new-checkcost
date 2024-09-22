"use client"
import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div id="menu" className="flex flex-col w-full p-4 gap-12 mt-20">
      <h1
        className="text-xl uppercase font-bold text-center
          bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
          bg-clip-text text-transparent"
      >
        Các tiện ích đã được phát triển
      </h1>
      <div className="grid lg:grid-cols-3 gap-4">
        <Link href={"/single-rewind"} className="border-2 bg-[#3B5695] hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
            <h2 className="text-md text-white font-semibold">Single Rewind</h2>
        </Link>
        <Link href={"/double-rewind"} className="border-2 bg-[#3B5695] hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
          <h2 className="text-md text-white font-semibold">Double Rewind</h2>
        </Link>
        <Link href={"/time-rewind"} className="border-2 bg-[#3B5695] hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
            <h2 className="text-md text-white font-semibold">Time Rewind</h2>
        </Link>
        <Link href={"/year-100"} className="border-2 bg-[#3B5695] hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
            <h2 className="text-md text-white font-semibold">Câu trả lời year 100</h2>
        </Link>
        <Link href={"/time-nm"} className="border-2 bg-[#3B5695] hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
            <h2 className="text-md text-white font-semibold">Thời gian Nightmare</h2>
        </Link>
        <a href={"#banner"} className="border-2 bg-[#3B5695] hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
            <h2 className="text-md text-white font-semibold">Banner</h2>
        </a>
      </div>
    </div>
  );
}

export default Menu;
