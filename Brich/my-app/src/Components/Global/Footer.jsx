import React from "react";
import { CgCardHearts } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-gray-300 max-w-[1240px] mx-auto py-16 px-4 mt-5 ">
      <div className="grid md:grid-cols-3 gap-5 ">
        <div className="mt-5">
          <div className="flex text-4xl ">
            {" "}
            <CgCardHearts className="animate-pulse text-[#247881]" />
            <p>Birdge</p>
          </div>
          <p className="mt-5  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            vitae mollitia sint quae sapiente, facilis temporibus cumque quaerat
            illo modi, neque excepturi maxime, accusamus molestiae. Quisquam,
            dolor? Perspiciatis, animi quisquam!
          </p>
          <div className="mt-5 flex md:w-[75%] justify-between ">
            <a
              href="https://i.ytimg.com/vi/qF8ZnFqEBog/hqdefault.jpg"
              target="_blank"
            >
              <FaFacebook size={30} className="hover:bg-gray-500" />
            </a>
            <a
              href="https://i.ytimg.com/vi/qF8ZnFqEBog/hqdefault.jpg"
              target="_blank"
            >
              <FaInstagram size={30} className="hover:bg-gray-500" />
            </a>
            <a
              href="https://i.ytimg.com/vi/qF8ZnFqEBog/hqdefault.jpg"
              target="_blank"
            >
              <FaTwitterSquare size={30} className="hover:bg-gray-500" />
            </a>
          </div>
        </div>
        <div className="col-span-2 flex justify-between mx-3 mt-6 ">
          <div>
            <ul className="font-medium text-gray-400 ">
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
            </ul>
          </div>
          <div>
            <ul className="font-medium text-gray-400 ">
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
            </ul>
          </div>
          <div>
            <ul className="font-medium text-gray-400 ">
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
              <li className="py-2 text-sm ">Deneme</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
