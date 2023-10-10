import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addRecommondationMovies } from "../utils/redux/movieSlice";
import { useEffect } from "react";


const useRecommondationMovies = (movie_id) => {
    const dispatch = useDispatch();
    console.log(movie_id)

    const recommondationMovies = useSelector((store) => store.movie.recommondationMovies)

    const getRecommondationMovies = async () => {
     
          const responce = await fetch(
            "https://api.themoviedb.org/3/movie/"+movie_id+"/recommendations",
            API_OPTIONS
          );
          const data = await responce.json();
          console.log(data,'recommondation')
        
          dispatch(addRecommondationMovies(data?.results));
    
    }


        useEffect(() => {
           getRecommondationMovies();
        }, []);
    
    

}

export default useRecommondationMovies;