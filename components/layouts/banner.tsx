import React from "react";

function Banner() {
  return (
    <div className="flex flex-col justify-center items-center px-4 lg:px-8 py-12">
      <h2 className="font-bold text-xl text-[#3B5695]">GIẢI PHÁP HỮU ÍCH</h2>
      <h1 className="uppercase mt-2 text-xs">Tiện ích Check cost</h1>
      <p className="text-center mt-5 max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde magnam temporibus nulla reprehenderit esse animi, ipsum, nemo eius sequi veniam enim. Modi voluptates in voluptatem quam error hic ab!.
      </p>
      <a href="#menu" className="bg-[#3B5695] text-white px-8 py-3 mt-8 rounded-md transition-all duration-300 hover:scale-105">BẤT ĐẦU</a>
    </div>
  );
}

export default Banner;
