import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card() {
  const [isFlipped, setisFlipped] = useState(false);
  const handleClick = (e) => {
    setisFlipped(!isFlipped);
  };
  return (
    <div className="  w-full py-16 bg-slate-100 px-4 ">
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto"
            src="https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D139673935W7664H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/pik-card-sticker.jpg"
            alt=""
          />
          <p className="text-center">PİK (Maça, ingilizcesi: Spades)</p>
        </div>

        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-[100px] mx-auto"
            src="https://www.clipartmax.com/png/middle/195-1956192_heart-symbol-clip-art-clipart-best-dbhixh-clipart-heart-from-deck-of.png"
            alt=""
          />
          <p className="text-center">KÖR (Kupa, ingilizcesi: Hearts)</p>
        </div>
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto"
            src="https://image.emojipng.com/359/13624359.jpg"
            alt=""
          />
          <p className="text-center"> KARO (Karo, ingilizcesi: Diamonds)</p>
        </div>
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto"
            src="https://e7.pngegg.com/pngimages/797/521/png-clipart-suit-hearts-clubs-playing-card-card-game-suit-logo-hearts.png"
            alt=""
          />
          <p className="text-center">TREFL (Sinek, ingilizcesi: Clubs)</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
