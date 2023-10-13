import React, { useEffect } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addGptMovieResult } from '../utils/redux/gptSlice'

const GptSearch = () => {

  
 
  return (
    <>
     <div className="fixed -z-10 md:w-full">
        <img className='h-screen object-cover md:w-full'
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <div className=''>
      
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
   
  )
}

export default GptSearch