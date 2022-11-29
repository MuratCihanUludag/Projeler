import React, { useState } from "react";
import { CarouselData } from "../../../Data/Card";
import { FcNext } from "react-icons/fc";

let count = 0;
function Index() {
  const [currentIndex, setCount] = useState(0);
  const handelNext = () => {
    count = (count + 1) % CarouselData.length;
    setCount(count);
  };
  const handelPrev = () => {
    count = (currentIndex - 1) % CarouselData.length;
    setCount(count);
  };
  return (
    <div className=" relative  bg-gradient-to-r  from-black  bg-green-900 flex justify-center mx-5 py-5  px-5  text-center  text-white select-none ">
      <div className="aspect-w-16 w-[650px]  flex aspect-h-4">
        <img
          className="w-[650px] h-[450px]"
          src={CarouselData[currentIndex].image}
          alt=""
        />
      </div>

      <div className="absolute text-3xl font-bold  flex w-full transform top-1/2 py-2 justify-between justify-items-center">
        <button onClick={handelPrev}>Previus</button>
        <button onClick={handelNext}>Next</button>
      </div>
    </div>
  );
}

export default Index;
