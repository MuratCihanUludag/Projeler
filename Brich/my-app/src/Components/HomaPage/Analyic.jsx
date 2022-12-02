import React from "react";

function Analyic() {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqSxFZ6uX19NXexVBVKH5ppEaZjodn8VFTA&usqp=CAU"
          alt=""
        />

        <div className=" flex flex-col justify-center">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold  text-green-800 p-3">
            Bridge Nedir?
          </h1>
          <h3></h3>
          <p className="md:text-lg sm:text-md text-sm px-3 mt-2 ">
            {" "}
            Briç 4 kişi ile oynanır. Eşli oynanan bir oyundur.
          </p>
          <p className="md:text-lg sm:text-md text-sm px-3 mt-2 ">
            Briç 52 lik 1 deste kağıt ile oynanır.
          </p>
          <p className="md:text-lg sm:text-md text-sm px-3 mt-2 " >
            Ama Briçte bunların isimleri farklıdır. 
          </p>
          <p className="md:text-lg sm:text-md text-sm px-3 mt-2 text-green-700">♠  PİK (Maça, ingilizcesi:
            Spades) {<br/>} ♥ KÖR (Kupa, ingilizcesi: Hearts){<br/>} ♦ KARO (Karo, ingilizcesi:
            Diamonds) {<br/>}♣ TREFL (Sinek, ingilizcesi: Clubs)</p>
          <button className="p-2 mt-2 border border-gray-500 w-[150px] float-right bg-green-800 text-white font-bold rounded-lg hover:bg-black ">
            Hadi Başlayalım
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analyic;
