import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  movieList: []
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

    return(
        <GlobalContext.Provider value={{
            movieList:state.movieList,
            addNewMovie
            }}>
            {children}
        </GlobalContext.Provider>
    )
}