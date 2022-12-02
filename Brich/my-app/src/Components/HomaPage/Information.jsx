import React from "react";
import Typed from "react-typed";

function Information() {
  return (
    <div className="text-white">
      <div className="  mt-[-96px] max-w-[1240px] h-screen mx-auto p-4  flex justify-center flex-col items-center">
        <p className="uppercase font-bold p-2">Hüseyin İçcan</p>
        <h1 className="md:text-4xl text-[#247881]  sm:text-3xl text-xl font-bold py-4">
          Bridge öğrenmeye ne dersin?
        </h1>
        <div className="md:text-4xl sm:text-3xl text-2xl flex justify-center">
          <h1 >Kartlarını hazırla :</h1>
          <Typed className=" text-gray-500 md:pl-4 pl-2 font-bold " strings={["♠ ♣", "♥ ♦"]} typeSpeed={140} backSpeed={200} loop />
        </div>
      </div>
    </div>
  );
}

export default Information;
