import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 px-2 relative  overflow-hidden bg-cover bg-no-repeat '>
        <img className=' transition duration-300 ease-in-out hover:scale-110' alt='img-icon' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard
