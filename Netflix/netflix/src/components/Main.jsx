import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Request from '../Request'
import axios from 'axios'

function Main() {
  
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(()=>{
        axios.get(Request.requestPopular).then((responsive) => {
            setMovies(responsive.data.results)
        })
    },[])
    console.log(movie)
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
            <img className='w-full h-full object-cover mt-1' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}
            />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='w-[550px] md:text-5xl my-1 font-bold'>{movie?.title}</h1>
                <div className='mx-1'>
                    <button className='border bg-gray-300 text-black border-grey-300  py-2 px-5 font-bold'>Play</button>
                    <button className='border text-white border-grey-300  py-2 px-5 font-bold ml-5'>Watch Leter</button>
                </div>
                <p className='text-gray-400 md:text-xl mx-1'>Release : {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200  my-2'>{movie?.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Main
