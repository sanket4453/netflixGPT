import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="py-3 text-lg md:text-3xl text-white ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies && movies?.length>0 &&
            movies.map((movie) => (
             <Link  key={movie.id} to={"/movieClip/watch?v="+movie.id}> <MovieCard  posterPath={movie.poster_path} /> </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
