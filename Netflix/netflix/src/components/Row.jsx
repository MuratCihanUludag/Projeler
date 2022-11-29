import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "../components/Movie";

function Row({ title, fetchURL, RowID }) {
  const [movies, setMovies] = useState([]);

  const sliderLeft = () => {
    let slider = document.getElementById("slider" + RowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider" + RowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((responsive) => setMovies(responsive.data.results));
  }, [fetchURL]);
  console.log(movies);
  return (
    <div>
      <h2 className="text-white font-bold md:tet-xl p-4"> {title} </h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white size rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + RowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative left-0"
        >
          {movies.map((item, id) => (
            <Movie key={id} id={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0 "
        />
      </div>
    </div>
  );
}

export default Row;
