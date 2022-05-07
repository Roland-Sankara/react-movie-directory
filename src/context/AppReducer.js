const appReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_NEW_MOVIE':
            return { ...state,movieList:[...state.movieList,action.payload]}
        default:
            return state;
    }
}

export default appReducer;