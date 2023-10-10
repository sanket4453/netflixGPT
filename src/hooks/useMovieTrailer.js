import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const responce = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const data = await responce.json();

      
    
        const filteredData = data.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filteredData.length ? filteredData[0] : data.results[0];
      
        dispatch(addTrailerVideo(trailer))
        
    
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);
}

export default useMovieTrailer;