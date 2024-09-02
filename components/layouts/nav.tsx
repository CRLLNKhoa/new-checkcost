"use client";
import Link from "next/link";
import React, { useState } from "react";

function Nav() {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav
      className="bg-white shadow-[0px_0px_80px_rgba(61,68,81,0.1)] 
    rounded-xl m-4 p-4 relative z-[101]"
    >
      {isShow && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-[100] overflow-hidden">
          <div
            className="bg-white shadow-[0px_0px_80px_rgba(61,68,81,0.1)] 
     rounded-xl m-4 p-4 relative z-[101]"
          >
            <div className="flex justify-between items-center">
              <img src="/logo.svg" alt="logo_svg" className="size-10" />
              <div className="hidden lg:flex items-center gap-12 font-[500]">
                <Link href="/home">Trang chủ</Link>
                <Link href="/home">Cài đặt</Link>
                <Link href="/home">Giới thiệu</Link>
              </div>
              <button onClick={() => setIsShow(false)}>
                <img src={"/close.svg"} alt="icon_btn" className="size-10" />
              </button>
            </div>
          </div>
          <div
            className="bg-white shadow-[0px_0px_80px_rgba(61,68,81,0.1)] 
            rounded-xl m-4 p-4 flex flex-col gap-4"
          >
            <Link className="hover:text-[#3B5695] hover:font-bold" href="/">Trang chủ</Link>
            <Link className="hover:text-[#3B5695] hover:font-bold" href="/single-rewind">Single Rewind</Link>
            <Link className="hover:text-[#3B5695] hover:font-bold" href="/double-rewind">Double Rewind</Link>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="logo_svg" className="size-10" />
        <div className="hidden lg:flex items-center gap-12 font-[500]">
          <Link href="/">Trang chủ</Link>
          <Link href="/single-rewind">Single Rewind</Link>
          <Link href="/double-rewind">Double Rewind</Link>
        </div>
        <button className="lg:hidden" onClick={() => setIsShow(!isShow)}>
          <img
            src={isShow ? "/close.svg" : "/menu.svg"}
            alt="icon_btn"
            className="size-10"
          />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
