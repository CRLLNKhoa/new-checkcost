"use client";
import React, { useState } from "react";

function About({visits}:{visits:number}) {
    const [year,setYear] = useState(new Date().getFullYear())
  return (
    <div className="flex flex-col w-full p-4 gap-12 mt-20">
      <h1
        className="text-xl uppercase font-bold text-center
        bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
        bg-clip-text text-transparent"
      >
        Giới thiệu về Checkcost
      </h1>
      <div className="grid lg:grid-cols-4 gap-12 lg:gap-4">
        <div className="relative border-2 rounded-lg flex items-start 
        justify-start px-4 flex-col pt-10 pb-2">
            <div className="absolute top-0 left-4 -translate-y-1/2 size-14
            shadow-lg bg-white rounded-lg flex items-center justify-center">
                <img src="/lich.svg" alt="icon" className="size-12" />
            </div>
            <h3 className="text-[#3B5695] font-bold text-3xl mb-1">{year-2023}+</h3>
            <p>Phiên bản đầu tiên từ năm 2023</p>
        </div>
        <div className="relative border-2 rounded-lg flex items-start 
        justify-start px-4 flex-col pt-10 pb-2">
             <div className="absolute top-0 left-4 -translate-y-1/2 size-14
            shadow-lg bg-white rounded-lg flex items-center justify-center">
                <img src="/gr.svg" alt="icon" className="size-13" />
            </div>
            <h3 className="text-[#3B5695] font-bold text-3xl mb-1">{visits}</h3>
            <p>Tổng số lượt truy cập</p>
        </div>
        <div className="relative border-2 rounded-lg flex items-start 
        justify-start px-4 flex-col pt-10 pb-2">
            <div className="absolute top-0 left-4 -translate-y-1/2 size-14
            shadow-lg bg-white rounded-lg flex items-center justify-center">
                <img src="/book.svg" alt="icon" className="size-10" />
            </div>
            <h3 className="text-[#3B5695] font-bold text-3xl mb-1">{year-2023}+</h3>
            <p>Tổng số bài viết được đóng góp</p>
        </div>
        <div className="relative border-2 rounded-lg flex items-start 
        justify-start px-4 flex-col pt-10 pb-2">
            <div className="absolute top-0 left-4 -translate-y-1/2 size-14
            shadow-lg bg-white rounded-lg flex items-center justify-center">
                <img src="/chat.svg" alt="icon" className="size-10" />
            </div>
            <h3 className="text-[#3B5695] font-bold text-3xl mb-1">{year-2023}+</h3>
            <p>Tổng số thảo luận của người dùng</p>
        </div>
      </div>
      
    </div>
  );
}

export default About;
