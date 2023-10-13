import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/redux/gptSlice";

const GptSearchBar = () => {
  const serachText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
    );

    const data = await response.json()
    return data;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      serachText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example : Gadar 2, Sholey, Golmal, Koi mil gaya, Dhoom";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //Handle Errors
    }

  
    const gptMovies = gptResults.choices[0].message.content.split(",");

    //For each movies I will search TMDB Api call

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

  
    dispatch(addGptMovieResult({movieNames : gptMovies, movieResults: tmdbResults}))
    


  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={serachText}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 col-span-9 border-spacing-0"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
