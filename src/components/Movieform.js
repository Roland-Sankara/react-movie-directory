import React,{useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function Movieform() {

  const {movieList,addNewMovie} = useContext(GlobalContext);

  const [name,setName] = useState('');
  const [ratings,setRatings] = useState('');
  const [duration,setDuration] = useState('');

  const [error,setError] = useState('');

  function validateData(name,ratings,duration){
    let updatedMovie = {};
    let validationError = '';

    name ? updatedMovie['name'] = name : validationError = 'Enter Movie name';
    +ratings > 0 && +ratings <=100 ? updatedMovie['ratings'] = +ratings : validationError = 'Movie rating should be from 0 to 100';
    duration.match(/[hm]/i) ? updatedMovie['duration'] = duration : validationError = 'Please specify time in hours or minutes (e.g. 2.5h or 150m)';
    
    setError(validationError);

    return validationError ? validationError : updatedMovie;
  }

  function submitMovie(){

    if(typeof validateData(name,ratings,duration) === 'object'){
      addNewMovie(validateData(name,ratings,duration));
      setName('')
      setRatings('')
      setDuration('')
    }
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={name}
              onChange={(e)=>{setError(''); setName(e.target.value)}}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={ratings}
              onChange={(e)=>{setError(''); setRatings(e.target.value)}}
              min="0"
              max="100"
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={duration}
              onChange={(e)=>{setError(''); setDuration(e.target.value)}}
            />
          </div>

          {
            error && (
              <div 
              className='alert error mb-30'
              data-testid='alert'
              >
              {error}
              </div> 
            )
          }
          
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={submitMovie}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
