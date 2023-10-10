import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {   addUpcomingMovies } from "../utils/redux/movieSlice";



const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upCommingMovies = useSelector((store) => store.movie.upcomingMovies)

    const getUpcomingMovies = async () => {
      const responce = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const data = await responce.json();
       
      dispatch(addUpcomingMovies(data?.results));
    };
  
    useEffect(() => {
     !upCommingMovies && getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;