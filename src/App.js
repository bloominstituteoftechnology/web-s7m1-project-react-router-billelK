import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie"
import MovieList from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
          setMovies(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    const myMovies = [...movies]
    const movie = myMovies.find(movie => movie.id === id)
    if (saved.find(savedMovie => savedMovie.id === id ))return
    setSaved([...saved,movie])
  };
 
  return (
    <div>
      <SavedList list={[...saved]} />

      <Routes>Replace this Div with your Routes
        <Route path='/' element={<MovieList movies={movies}/>}/>
        <Route path='movies/:id' element={<Movie saved={saved} addToSaved={addToSavedList}/>}/>
      </Routes>
    </div>
  );
}
