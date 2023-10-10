import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addTopRatedMovies } from "../utils/redux/movieSlice";



const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store) => store.movie.topRatedMovies)

    const getTopRatedMovies = async () => {
      const responce = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const data = await responce.json();
    
      dispatch(addTopRatedMovies(data?.results));
    };
  
    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;