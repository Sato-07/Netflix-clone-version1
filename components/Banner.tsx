import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Movie } from '../typing'
import { baseUrl } from '../constants /movie'
import {FaPlay} from "react-icons/fa"
import { InformationCircleIcon } from '@heroicons/react/solid'
 

interface Props {
    netflixOriginals : Movie[]
}


function Banner({netflixOriginals}: Props) {

    const [movie, setMovie] = useState< Movie | null >(null)

    useEffect(() =>{
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    },[netflixOriginals]
    )
    console.log(movie)

  return (
    <div className=' flex flex-col space-y-2 py-24 md:py-40 md:space-y-4 lg:h[65vh] lg:justify-end lg:pb-12 '>
        <div className='absolute top-0 left-0 -z-10 h-[100vh] md:h-[95vh] w-screen'>
            <Image

                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                alt="dddddd"
                layout='fill'
                objectFit="cover"
            />
        </div>
        <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl '>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className=' max-w-sm text-xs h-20 md:h-40 text-shadow-md md:max-w-lg md:text-md lg:max-w-2xl lg:text-xl'>{movie?.overview}</p>
        <div className='flex py-5 md:py-0 space-x-3 '>
            <button className="bannerButton bg-white text-black">
                <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7 '/>
                Play
            </button>
            <button className="bannerButton bg-gray-700/70" >
                More info 
                <InformationCircleIcon className=' h-4 w-5 md:h-8 md:w-8' />
            </button>

        </div>
    </div>
  )
}

export default Banner