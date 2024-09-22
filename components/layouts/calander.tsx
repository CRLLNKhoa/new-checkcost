"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

function Calendar() {
  const [currentDefault, setCurrentDefault] = useState<number>();
  const [currentFate, setCurrentFate] = useState<number>();

  function getCurrentPosition() {
    // 1. Thời điểm bắt đầu của chu kỳ
    const startDate = new Date("2024-09-16T19:00:00"); // Ví dụ: bắt đầu vào 19h thứ 2, 23/09/2024.

    // 2. Ngày và giờ hiện tại
    const now = new Date();

    // 3. Tính số miligiây giữa thời điểm hiện tại và ngày bắt đầu
    const diffMs = now.getTime() - startDate.getTime();

    // 4. Chuyển đổi miligiây sang số tuần đã trôi qua (1 tuần = 7 ngày = 604800000 ms)
    const weeksPassed = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));

    // 5. Lấy tuần hiện tại theo chu kỳ 14 tuần
    const currentPosition = weeksPassed % 14;

    return currentPosition;
  }
  function getCurrentPosition3() {
    // 1. Thời điểm bắt đầu của chu kỳ (ví dụ: bắt đầu vào 19h thứ 2, 23/09/2024)
    const startDate = new Date("2024-09-16T19:00:00");

    // 2. Ngày và giờ hiện tại
    const now = new Date();

    // 3. Tính số miligiây giữa thời điểm hiện tại và ngày bắt đầu
    const diffMs = now.getTime() - startDate.getTime();

    // 4. Chuyển đổi miligiây sang số tuần đã trôi qua (1 tuần = 7 ngày = 604800000 ms)
    const weeksPassed = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));

    // 5. Lấy tuần hiện tại theo chu kỳ 3 tuần
    const currentPosition = weeksPassed % 3;

    return currentPosition;
  }

  useEffect(() => {
   setCurrentDefault(getCurrentPosition());
   setCurrentFate(getCurrentPosition3());
  }, [])
  

  return (
    <div  className="flex flex-col w-full p-4 gap-4 mt-12">
      <h1 id="banner"
        className="text-xl uppercase font-bold text-center
        bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
        bg-clip-text text-transparent"
      >
        Lịch banner
      </h1>

      <div className="flex items-center justify-center mt-6">
        <div className="max-w-lg relative">
          <img className="w-full h-full" src="./lc.png" alt="img" />
          <div className={cn("rounded-full border-[#3B5695] border-[8px] w-[52px] h-[52px]  lg:w-[72px] lg:h-[72px] absolute -translate-x-1/2",
            currentDefault === 0 && "top-[11%] left-[34%]" ,
            currentDefault === 1 && "top-10 left-[50%]" ,
            currentDefault === 2 && "top-[11%] left-[65%]" ,
            currentDefault === 3 && "top-[20%] left-[80%]" ,
            currentDefault === 4 && "top-[35%] left-[87%]" ,
            currentDefault === 5 && "top-[52%] left-[87%]" ,
            currentDefault === 6 && "top-[68%] left-[82%]" ,
            currentDefault === 7 && "top-[76%] left-[67%]" ,
            currentDefault === 8 && "top-[80%] left-[51%]" ,
            currentDefault === 9 && "top-[77%] left-[34%]" ,
            currentDefault === 10 && "top-[68%] left-[19%]" ,
            currentDefault === 11 && "top-[52%] left-[14%]" ,
            currentDefault === 12 && "top-[37%] left-[14%]" ,
            currentDefault === 13 && "top-[21%] left-[18%]" ,
          )}></div>
          <div className={cn("rounded-full border-[#3B5695] border-[8px] h-[42px] w-[42px] lg:w-[62px] lg:h-[62px] absolute -translate-x-1/2",
            currentFate === 0 && "top-[53%] left-[36%]" ,
            currentFate === 2 && "top-[53%] left-[63%]",
            currentFate === 1 && "top-[33%] left-[49%]"
          )}></div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
