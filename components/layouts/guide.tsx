import React from "react";

function Guide() {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <h1
        className="text-xl uppercase font-bold text-center
        bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
        bg-clip-text text-transparent"
      >
        Cách thức hoạt động
      </h1>
      <div className="flex flex-col lg:flex-row bg-white gap-4
      shadow-[0px_0px_80px_rgba(61,68,81,0.1)] p-4 rounded-md">
        <div
          className="w-full lg:w-1/2 h-[240px] rounded-md 
            flex items-center justify-center text-white"
        >
          <img src="/gifmaker_me.gif" alt="gif" className="w-full h-full" />
        </div>

        <div
          className="w-full lg:w-1/2 h-48 rounded-md pl-4
            flex flex-col items-start justify-center text-black"
        >
          <div className="flex gap-4 items-center">
            <p className="text-[#3B5695] font-bold text-lg">1.</p>
            <p>Nhập khoảng day cần tra cứu</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-[#3B5695] font-bold text-lg">2.</p>
            <p>Nhấn button tra cứu</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-[#3B5695] font-bold text-lg">3.</p>
            <p>Nhấn button sắp xếp để xem trực quan hơn</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-[#3B5695] font-bold text-lg">4.</p>
            <p>Day có giá trị cost thấp rewind sẽ nhanh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
