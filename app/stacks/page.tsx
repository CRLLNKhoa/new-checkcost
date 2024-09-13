"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function t1h1(B5: number, B11: number, B4: boolean): any {
    const logBase2 = Math.log2(1 + (B5 * B11)) * 11;
    const floorLog = B4 ? Math.floor(Math.log(B11)) * 11 : 1;
  
    return `${Math.floor(logBase2)} + ${floorLog}`;
  }
  

function StacksPage() {
  const [searchTerm, setSearchTerm] = useState<number>(0);
  const [results, setResults] = useState<string>("Chưa tìm kiếm.");
  const [heroes_team1,setHeroes_team1] = useState({
    "1": 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  })
  const [heroes_team2,setHeroes_team2] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  })

  const [setting,setSetting] = useState({
    "hw%": 0,
    "hrtopnode": false,
    "opheliabottomnode": false,
    "ophelia%": 5,
    "oster%": 0,
    "joan%": 0,
  })

  return (
    <div className="flex flex-col items-center min-h-screen px-4 pb-12">
      <h1
        className="text-xl uppercase font-bold text-center
        bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
        bg-clip-text text-transparent mt-6"
      >
        So sánh các kĩ nâng stacks
      </h1>
      <p className="text-center">Nhớ cài đặt lại các thông số chung.</p>
      <div className="w-full max-w-lg border rounded-lg mt-8 flex flex-col items-center p-4">
        <h2 className="border-b w-full text-center pb-2 font-bold">
          Cài đặt tổng quát
        </h2>
        <div className="flex flex-col gap-4 my-4">
          <div className="grid grid-cols-3 items-center">
            <h1 className="col-span-2 text-start">Harrow % per Stack</h1>
            <input value={setting["hw%"]} onChange={(e) => setSetting({...setting, "hw%": Number(e.target.value)})}
              type="number"
              className="bg-sky-400/20 px-4 py-1 rounded-md outline-none"
            />
          </div>
          <div className="grid grid-cols-3 items-center">
            <h1 className="col-span-2 text-start">Harrow Top node</h1>
            <input checked={setting["hrtopnode"]} onChange={(e) => setSetting({...setting, "hrtopnode": e.target.checked})} type="checkbox" className="size-5 cursor-pointer" />
          </div>
          <div className="grid grid-cols-3 items-center">
            <h1 className="col-span-2 text-start">Ophelia Bottom node</h1>
            <input checked={setting["opheliabottomnode"]} onChange={(e) => setSetting({...setting, "opheliabottomnode": e.target.checked})} type="checkbox" className="size-5 cursor-pointer" />
          </div>
          <div className="grid grid-cols-3 items-center">
            <h1 className="col-span-2 text-start">Ophelia % per Stack</h1>
            <input value={setting["ophelia%"]} onChange={(e) => setSetting({...setting, "ophelia%": Number(e.target.value)})}
              type="string"
              className="bg-sky-400/20 px-4 py-1 rounded-md outline-none"
            />
          </div>
          <div className="grid grid-cols-3 items-center">
            <h1 className="col-span-2 text-start">Orsted % per stack</h1>
            <input value={setting["oster%"]} onChange={(e) => setSetting({...setting, "oster%": Number(e.target.value)})}
              type="number"
              className="bg-sky-400/20 px-4 py-1 rounded-md outline-none"
            />
          </div>
          <div className="grid grid-cols-3 items-center">
            <h1 className="col-span-2 text-start">Joan % per Stack</h1>
            <input value={setting["joan%"]} onChange={(e) => setSetting({...setting, "joan%": Number(e.target.value)})}
              type="number"
              className="bg-sky-400/20 px-4 py-1 rounded-md outline-none"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg flex flex-col gap-4 border p-4 rounded-md mt-4">
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-2 text-center">
            <p>Team 1</p>
          </div>
          <div className="col-span-2 text-center">
            <p>Team 2</p>
          </div>
          <div className="col-span-5 border-t pt-2 text-center">
            <div className="grid grid-cols-5">
              <div className="flex flex-col gap-4">
                <h1>Hero</h1>
                <p>Ophelia</p>
                <p>Joan</p>
                <p>Sieg</p>
                <p>Abel</p>
                <p>Orsted</p>
                <p>Zeus</p>
                <p>griflet</p>
                <p>Harrow</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Stacks</h1>
                <input value={heroes_team1[1]} onChange={(e) => setHeroes_team1({...heroes_team1, 1: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team1[2]} onChange={(e) => setHeroes_team1({...heroes_team1, 2: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team1[3]} onChange={(e) => setHeroes_team1({...heroes_team1, 3: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team1[4]} onChange={(e) => setHeroes_team1({...heroes_team1, 4: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team1[5]} onChange={(e) => setHeroes_team1({...heroes_team1, 5: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team1[6]} onChange={(e) => setHeroes_team1({...heroes_team1, 6: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team1[7]} onChange={(e) => setHeroes_team1({...heroes_team1, 7: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team1[8]} onChange={(e) => setHeroes_team1({...heroes_team1, 8: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1>Days</h1>
                <p>{t1h1(setting["ophelia%"]/100,heroes_team1["1"],setting["opheliabottomnode"])}</p>
                <p>Joan</p>
                <p>Sieg</p>
                <p>Abel</p>
                <p>Orsted</p>
                <p>Zeus</p>
                <p>griflet</p>
                <p>Harrow</p>
              </div>

              <div className="flex flex-col gap-4">
                <h1>Days</h1>
                <p>Ophelia</p>
                <p>Joan</p>
                <p>Sieg</p>
                <p>Abel</p>
                <p>Orsted</p>
                <p>Zeus</p>
                <p>griflet</p>
                <p>Harrow</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Stacks</h1>
                <input value={heroes_team2[1]} onChange={(e) => setHeroes_team2({...heroes_team2, 1: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team2[2]} onChange={(e) => setHeroes_team2({...heroes_team2, 2: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team2[3]} onChange={(e) => setHeroes_team2({...heroes_team2, 3: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team2[4]} onChange={(e) => setHeroes_team2({...heroes_team2, 4: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team2[5]} onChange={(e) => setHeroes_team2({...heroes_team2, 5: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team2[6]} onChange={(e) => setHeroes_team2({...heroes_team2, 6: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team2[7]} onChange={(e) => setHeroes_team2({...heroes_team2, 7: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
                <input value={heroes_team2[8]} onChange={(e) => setHeroes_team2({...heroes_team2, 8: Number(e.target.value)})}
                  type="number"
                  className="bg-sky-400/20 rounded-md outline-none text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border p-4 w-full max-w-lg mt-4 rounded-lg text-center font-bold text-lg">
        <p>Day: 123</p>
        <p>Diff: 123</p>
        <p>Day: 123</p>
      </div>
    </div>
  );
}

export default StacksPage;
