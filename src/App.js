import React, { Fragment, useEffect, useState } from "react";

import Movie from './components/Movie';


const api_key = process.env.REACT_APP_API_KEY;
const FEATURED_API =  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;


const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  },[]
  );

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
  } 
  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      getMovies(SEARCH_API+ searchTerm);
      
      setSearchTerm('');
    }
    

  }

  const handleOnChange= (e) => {
    setSearchTerm(e.target.value);
  }

  return ( <React.Fragment> 
    {/* normal <> and <React.Fragment are same> */}
    <nav>
      <h1 className="brand">V tv</h1>
    </nav>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input className="search" 
        type="search" 
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
        />
      </form>
       
    </header>
    <div className="movie-container">
      {movies.length > 0 && 
      movies.map((movie) => 
        <Movie key={movie.id} 
        {...movie} />)
      }
    </div>
    </React.Fragment>
  );
}

export default App;
