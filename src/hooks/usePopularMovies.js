import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addPopularMovies } from "../utils/redux/movieSlice";



const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector((store) => store.movie.popularMovies)

    const getPopularMovies = async () => {
      const responce = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const data = await responce.json();
    
      dispatch(addPopularMovies(data?.results));
    };
  
    useEffect(() => {
     !popularMovies &&  getPopularMovies();
    }, []);
}

export default usePopularMovies;