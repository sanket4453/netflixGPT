import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieClip from "../hooks/useMovieClip";
import { useSearchParams } from "react-router-dom";
import MovieList from "./MovieList";
import useRecommondationMovies from "../hooks/useRecommondationMovies";

const MovieShow = () => {
  const [searchParam, seSearchParam] = useSearchParams();
  const id = searchParam.get("v");
  const [movieId, setMovieId] = useState(null);
  const movies = useSelector((store) => store.movie);

  useEffect(() => {
    setMovieId(id);
  }, [id]);

  const clipVideo = useSelector((store) => store.movie?.clipVideo);
  useMovieClip(id);
  useRecommondationMovies(id);

  return (
    <div className="scroll-smooth bg-black">
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${clipVideo?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div>
        <MovieList title={"Recommondation"} movies={movies.recommondationMovies} />
        {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
         <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default MovieShow;
