import React from "react";
import CardTeam from "./card-team";

function ListTeam() {
  return (
    <div className="flex flex-col w-full p-4 gap-12 mt-20">
      <h1
        className="text-xl uppercase font-bold text-center
          bg-gradient-to-r from-[#3B5695] to-[#779AEB] 
          bg-clip-text text-transparent"
      >
        Các đội hình gợi ý
      </h1>
      <div className="grid lg:grid-cols-1 w-full lg:w-2/3 mx-auto gap-12 lg:gap-4">
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </div>
      <button className="border border-[#3B5695] text-[#3B5695] px-4 py-2 
      mx-auto rounded-md max-w-xs">
        Xem thêm
      </button>
    </div>
  );
}

export default ListTeam;
