import { createSlice } from "@reduxjs/toolkit";


const moveiSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        recommondationMovies:null,
        trailerVideo: null,
        clipVideo:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addRecommondationMovies : (state,action) => {
            state.recommondationMovies = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },
        addClipVideo: (state,action) => {
            state.clipVideo = action.payload;
        }

    }
})

export const {addNowPlayingMovies,addTrailerVideo, addPopularMovies, addTopRatedMovies,addUpcomingMovies,addClipVideo , addRecommondationMovies } = moveiSlice.actions

export default moveiSlice.reducer;