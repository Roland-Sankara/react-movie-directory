import React, {useContext,useState,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Search() {
  const {movieList, setMovieList, setDupeMovieList, dupeMovieList} = useContext(GlobalContext);
  let movies = dupeMovieList;

  useEffect(()=>{
    setDupeMovieList(movieList);
  },[])

  function handleSearch(e){
    e.preventDefault();

    let search = e.target.value;
    if(search.length >= 3){
      let filteredMovies = movies.filter((movie)=>new RegExp(`${search}`).test(movie.name)); 
      setMovieList(filteredMovies)
    }else{
      setMovieList(dupeMovieList);
    }
  }


  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onKeyUp={handleSearch}
      />
    </section>
  )
}

export default Search
