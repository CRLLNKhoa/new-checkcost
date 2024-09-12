"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import data from "@/jsons/new-single-rw.json";
import useLocalStorage from "@/hooks/uselocalstorage";
import Capcha from "@/components/layouts/capcha";
import useButtonClickCount from "@/hooks/useButtonClickCount";
import useButtonClickWithCustomMilestones from "@/hooks/useButtonClickWithCustomMilestones";

function SinglePage() {
  const [storedValue, setValue, hasData] = useLocalStorage("current_day", 0);
  const [currentChoice, setCurrentChoice] = useState(1);
  const [temp, setTemp] = useState<any[]>([]);
  const [current, setCurrent] = useState(storedValue);
  const [plan, setPlan] = useState(storedValue + 100);
  const [sort, setSort] = useState(false);
  const [clickCount, handleButtonClick] = useButtonClickCount();
  const [handleButtonClicks] = useButtonClickWithCustomMilestones(Number(current));

  const handleQickChoice = (value: number) => {
    setPlan(value + current);
  };

  useEffect(() => {
    setCurrent(storedValue);
  }, [storedValue]);

  useEffect(() => {
    setPlan(current + Number(currentChoice * 100));
  }, [current]);

  const handleSearch = () => {
    setTemp(
      data.filter(
        (item) => Number(item.day) >= current && Number(item.day) < plan
      )
    );
    setValue(current);
    handleButtonClick();
  };

  const handleSort = () => {
    setSort(!sort);
    if (sort) {
      setTemp(temp.sort((a, b) => Number(a.cost) - Number(b.cost)));
    } else {
      setTemp(temp.sort((a, b) => Number(b.cost) - Number(a.cost)));
    }
  };

  return (
    <>
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
                setCurrentChoice(5);
              }}
              className={cn(
                "border border-[#3B5695] px-4 py-1 rounded-md",
                currentChoice === 5 && "bg-[#3B5695] text-white"
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

        {clickCount !== 0 && (
          <p className="mt-1">Đã có {clickCount} lượt check.</p>
        )}

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
            <div
              onClick={() => handleSort()}
              className="flex items-center justify-center cursor-pointer"
            >
              <p>COST</p>
              <img
                src="/down.svg"
                alt="icon"
                className={cn("w-4 h-4", sort && "rotate-180")}
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 rounded-md border-[#3B5695] overflow-hidden">
            {temp.map((item, index) => (
              <div
                className={cn(
                  "grid grid-cols-3 lg:grid-cols-4 py-2 text-center text-black",
                  item.cost >= 161 &&
                    item.cost < 184 &&
                    "bg-[#27869F] text-black",
                  item.cost >= 184 &&
                    item.cost < 207 &&
                    "bg-[#509F9E] text-black",
                  item.cost >= 207 && item.cost < 230 && "bg-[#86B4A3]",
                  item.cost >= 230 &&
                    item.cost < 253 &&
                    "bg-[#B7C7B8] text-black",
                  item.cost >= 253 && item.cost < 276 && "bg-[#c3c9b1]",
                  item.cost >= 276 && item.cost < 299 && "bg-[#E4DCB0]",
                  item.cost >= 299 && item.cost < 322 && "bg-[#D2C08D]",
                  item.cost >= 322 && item.cost < 345 && "bg-[#C2A36C]",
                  item.cost >= 345 && item.cost < 368 && "bg-[#B2874C]",
                  item.cost >= 368 && item.cost < 385 && "bg-[#A36B2B]"
                )}
              >
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
      <Capcha />
    </>
  );
}

export default SinglePage;
