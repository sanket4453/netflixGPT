import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 px-2'>
        <img alt='img-icon' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard