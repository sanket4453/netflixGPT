import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt);
  
  return (
    <>
    {movieNames &&
    <div className='p-4 m-4 bg-black bg-opacity-90 text-white'>
      <div>
        {movieNames?.map((movieName,index) =>(
          <MovieList 
          key={movieName}
          title={movieName}
          movies={movieResults[index].results}
          />
        ))}

      </div>
    </div>
 } </>
  )
}

export default GptMovieSuggestions