"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import data from "@/jsons/new-single-rw.json";

function SinglePage() {
  const [currentChoice, setCurrentChoice] = useState(1);
  const [temp, setTemp] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [plan, setPlan] = useState(0);
  const [sort,setSort] = useState(false)

  const handleQickChoice = (value: number) => {
    setPlan(value + current);
  };

  const handleSearch = () => {
    setTemp(
      data.filter(
        (item) => Number(item.day) >= current && Number(item.day) < plan
      )
    );
  };

  const handleSort = () => {
    setSort(!sort)
    if(sort){
        setTemp(temp.sort((a, b) => Number(a.cost) - Number(b.cost)));
    }else {
        setTemp(temp.sort((a, b) => Number(b.cost) - Number(a.cost)));
    }
  };

  return (
    <div className="flex flex-col items-center px-4 pb-12">
      <h1
        className="text-xl uppercase font-bold text-center
          bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
          bg-clip-text text-transparent mt-6"
      >
        single rewind
      </h1>
      <p>Giá trị cost càng thấp thời gian rewind càng ngắn.</p>
      <div className="flex flex-col mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-[#3B5695] rounded-md p-1 pt-4 relative">
            <p
              className="text-[#3B5695] bg-white absolute -top-3 left-4 px-2 
            uppercase text-sm font-semibold"
            >
              Day hiện tại
            </p>
            <input
              value={current}
              onChange={(e) => setCurrent(parseInt(e.target.value))}
              type="number"
              className="w-full px-4 outline-none"
            />
          </div>
          <div className="border-2 border-[#3B5695] rounded-md p-1 pt-4 relative">
            <p
              className="text-[#3B5695] bg-white absolute -top-3 right-4 px-2 
            uppercase text-sm font-semibold"
            >
              Day dự kiến
            </p>
            <input
              value={plan}
              onChange={(e) => setPlan(parseInt(e.target.value))}
              type="number"
              className="w-full px-4 outline-none text-end"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 items-center gap-1">
        <h2>Chọn nhanh:</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              handleQickChoice(100);
              setCurrentChoice(1);
            }}
            className={cn(
              "border border-[#3B5695] px-4 py-1 rounded-md",
              currentChoice === 1 && "bg-[#3B5695] text-white"
            )}
          >
            +100
          </button>
          <button
            onClick={() => {
              handleQickChoice(300);
              setCurrentChoice(2);
            }}
            className={cn(
              "border border-[#3B5695] px-4 py-1 rounded-md",
              currentChoice === 2 && "bg-[#3B5695] text-white"
            )}
          >
            +300
          </button>
          <button
            onClick={() => {
              handleQickChoice(500);
              setCurrentChoice(3);
            }}
            className={cn(
              "border border-[#3B5695] px-4 py-1 rounded-md",
              currentChoice === 3 && "bg-[#3B5695] text-white"
            )}
          >
            +500
          </button>
        </div>
      </div>
      <button
        onClick={() => handleSearch()}
        className="border bg-[#3B5695] px-4 py-3 rounded-md mt-6 text-white
            uppercase w-full max-w-[280px]"
      >
        Tra cứu
      </button>

      <div className="flex flex-col w-full mt-12">
        <div className="grid grid-cols-3 lg:grid-cols-4 border py-2 rounded-md border-[#3B5695]">
          <div className="flex items-center justify-center">
            <p>DAY</p>
          </div>
          <div className="flex items-center justify-center">
            <p>TICKETS</p>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <p>SKIP</p>
          </div>
          <div onClick={() => handleSort()} className="flex items-center justify-center cursor-pointer">
            <p>COST</p>
            <img src="/down.svg" alt="icon" className={cn("w-4 h-4", sort && "rotate-180")} />
          </div>
        </div>
        <div className="flex flex-col mt-4 rounded-md border-[#3B5695] overflow-hidden">
          {temp.map((item, index) => (
            <div className={cn("grid grid-cols-3 lg:grid-cols-4 py-2 text-center text-white",
                item.cost > 161 &&
                item.cost < 184 &&
                "bg-[#7CFC00]/70 text-black",
              item.cost > 184 &&
                item.cost < 207 &&
                "bg-[#00FF00]/70 text-black",
              item.cost > 207 && item.cost < 230 && "bg-[#008000]/70",
              item.cost >= 230 &&
                item.cost < 253 &&
                "bg-[#FFD700]/70 text-black",
              item.cost >= 253 && item.cost < 276 && "bg-[#FFA500]/70",
              item.cost >= 276 && item.cost < 299 && "bg-[#FF8C00]/70",
              item.cost >= 299 && item.cost < 322 && "bg-[#FF6347]/70",
              item.cost >= 322 && item.cost < 345 && "bg-[#FF0000]/70",
              item.cost >= 345 && item.cost < 368 && "bg-[#DC143C]/70",
              item.cost >= 368 && item.cost < 385 && "bg-[#8B0000]/70"

            )}>
              <p>{`${item.day}`}</p>
              <p>{Math.floor(item.ticket)}</p>
              <p className="hidden lg:block">{item.skipp}</p>
              <p>{Math.floor(item.cost)}</p>
            </div>
          ))}
        </div>

        {temp.length === 0 && (
          <div className="flex items-center justify-center h-24">
            <p>Nhập thông tin và tra cứu</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePage;
