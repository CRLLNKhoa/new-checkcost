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
        <Link href={"/single-rewind"} className="border-2 hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
            <h2 className="text-md text-[#3B5695] font-semibold">Single Rewind</h2>
        </Link>
        <Link href={"/double-rewind"} className="border-2 hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
          <h2 className="text-md text-[#3B5695] font-semibold">Double Rewind</h2>
        </Link>
        <Link href={"/time-rewind"} className="border-2 hover:border-[#3B5695] cursor-pointer flex items-center justify-center p-4 rounded-md">
            <h2 className="text-md text-[#3B5695] font-semibold">Time Rewind</h2>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
