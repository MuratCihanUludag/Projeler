import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContex";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai"
import { async } from "@firebase/util";

const SaveShows = () => {
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth();

  const sliderLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);
  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
    try{
        const result = movies.filter((item) => item.id !== passedID )
        await updateDoc(movieRef,{
            savedShows: result
        })
        
    }catch (error){
        console.log(error)

    }
  }

  return (
    <>
      <h2 className="text-white font-bold md:tet-xl p-4"> My Shows </h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white size rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative left-0"
        >
          <div>
            {movies.map((item, id) => (
              <div
                key={id}
                className="w-[160px] sm:w-[200px] md:2-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-md text-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                  <p onClick={() => deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4">  <AiOutlineClose/></p>  
                </div>
              </div>
            ))}
          </div>
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0 "
        />
      </div>
    </>
  );
};

export default SaveShows;
