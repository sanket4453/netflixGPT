import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/redux/movieSlice";



const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
      const responce = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await responce.json();
    
      dispatch(addNowPlayingMovies(data?.results));
    };
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;