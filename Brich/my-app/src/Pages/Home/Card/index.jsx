import React from "react";
//Data Card
import { Posts } from "../../../Data/Card";

function Card() {

  return (
    <div className="grid  gap-2 p-4 lg:grid-cols-4">
      {Posts.map((items, key) => (
        <div 
          className="w-full mt-5 p-5 bg-green-900  text-white bg-gradient-to-r from-black rounded-lg shadow-md lg:max-w-sm"
          key={key}
        >
          <img
            className="object-cover w-full h-48"
            src={items.img}
            alt="image"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold text-blue-600">
              {items.title}
            </h4>
            <p className="mb-2 leading-normal">{items.content}</p>
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;