import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addClipVideo } from "../utils/redux/movieSlice";



const useMovieClip = (movieId) => {

    const dispatch = useDispatch();
   

    const getMovieClip = async () => {
        const responce = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );
          const data = await responce.json();
        
            
          const filteredData = data.results?.filter(
            (video) => video.type === "Clip"
          );
         
            
          const clip = filteredData?.length > 0 ? filteredData[0] : data?.results[0];
            // const clip = data?.results[0]
             
          dispatch(addClipVideo(clip))
    }

    useEffect(() => {
        getMovieClip();
    },[movieId])
}

export default useMovieClip;