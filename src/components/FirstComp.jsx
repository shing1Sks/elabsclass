import React from "react";

function FirstComp() {
  return (
    <div className=" bg-[#d0e2ff]">
      <button className="w-full relative pt-4">
        <img
          className="w-[50px] absolute right-[10px] sm:right-[50px] h-[50px]"
          src="./Menu.png"
          alt=""
        />
      </button>
      <div className="flex flex-xol items-center justify-center pt-[150px] pb-[170px]">
        <div>
          <p className="text-[40px] sm:text-[81px] text-center">
            Hello, my name is
          </p>
          <p className="font-bold text-center text-[40px] sm:text-[100px]">
            Jane Doe
          </p>
          <p className="italic text-[40px] sm:text-[70px] font-thin text-center">
            A full stack developer
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src="./frame.png" alt="" />
      </div>
    </div>
  );
}

export default FirstComp;
