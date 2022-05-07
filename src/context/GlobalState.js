import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  movieList: [],
  dupeMovieList: []
};

// create Context
export const GlobalContext = createContext(initialState);

// Context provider Component
export const GlobalProvider = ({children})=>{
    const [state, disptach] = useReducer(AppReducer,initialState)

    function addNewMovie(movie){
        disptach({
            type:'ADD_NEW_MOVIE',
            payload: movie
        })
    }
    function setMovieList(movies){
        disptach({
            type:'SET_MOVIE',
            payload: movies
        })
    }
    function setDupeMovieList(movies){
        disptach({
            type:'SET_DUPE_MOVIE_LIST',
            payload: movies
        })
    }

    return(
        <GlobalContext.Provider value={{
            movieList: state.movieList,
            dupeMovieList: state.dupeMovieList,
            addNewMovie,
            setMovieList,
            setDupeMovieList
            }}>
            {children}
        </GlobalContext.Provider>
    )
}