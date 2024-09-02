"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function CardTeam({rank="s"}: {rank?: string}) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col border-2 hover:border-[#3B5695] cursor-pointer p-4 rounded-md">
      <div className="flex flex-col items-center justify-between w-full">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex flex-col">
            <h2 className="mb-2 font-semibold">Roland và những người bạn</h2>
          </div>
          {rank === "s" && <img src="/s.svg" alt="s" />}
          {rank === "a" && <img src="/a.svg" alt="a" />}
          {rank === "b" && <img src="/b.svg" alt="b" />}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col gap-1 items-center">
            <div className="size-10 bg-black rounded-full">
              <img src="/insta.svg" alt="" />
            </div>
            <p className="text-xs">Roland</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="size-10 bg-black rounded-full">
              <img src="/insta.svg" alt="" />
            </div>
            <p className="text-xs">Roland</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="size-10 bg-black rounded-full">
              <img src="/insta.svg" alt="" />
            </div>
            <p className="text-xs">Roland</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="size-10 bg-black rounded-full">
              <img src="/insta.svg" alt="" />
            </div>
            <p className="text-xs">Roland</p>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <div className="size-10 bg-black rounded-full">
              <img src="/insta.svg" alt="" />
            </div>
            <p className="text-xs">Roland</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="size-10 bg-black rounded-full">
              <img src="/insta.svg" alt="" />
            </div>
            <p className="text-xs">Roland</p>
          </div>
        </div>
        <img
          onClick={() => setIsShow(!isShow)}
          className={cn(
            "transition-all cursor-pointer size-8",
            isShow ? "rotate-180" : ""
          )}
          src="/down.svg"
          alt=""
        />
      </div>
      <div
        className={cn(
          "transition-all overflow-hidden",
          isShow ? "h-auto " : "h-0"
        )}
      >
        <div className="flex flex-col gap-4 mt-6">
            <p className="font-semibold">Cách xếp đội hình:</p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col gap-1 items-center">
              <div className="size-10 bg-black rounded-full">
                <img src="/insta.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="size-10 bg-black rounded-full">
                <img src="/insta.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="size-10 bg-black rounded-full">
                <img src="/insta.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="size-10 bg-black rounded-full">
                <img src="/insta.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col gap-1 items-center">
              <div className="size-10 bg-black rounded-full">
                <img src="/insta.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="size-10 bg-black rounded-full">
                <img src="/insta.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Lưu ý: </p>
            <p>
              Khi dùng đội hình này yêu câu roland tối thiếu 15 sao.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTeam;
