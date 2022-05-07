const appReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_NEW_MOVIE':
            return { ...state,movieList:[...state.movieList,action.payload]}
        case 'SET_MOVIE':
            return {...state, movieList:action.payload}
        case 'SET_DUPE_MOVIE_LIST':
            return {...state, dupeMovieList:action.payload}
        default:
            return state;
    }
}

export default appReducer;