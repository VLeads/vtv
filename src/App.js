import React, { useEffect, useState } from "react";

import Movie from './components/Movie';

const FEATURED_API =  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a00888b1&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a00888b1&query=";

function App() {
  const [ movies, setMovies ] = useState([]);
 
  useEffect(async() => {
    const movieResp = await fetch(FEATURED_API);
    const movieJson = await movieResp.json();
    console.log(movieJson);
    setMovies(movieJson);
  },[])


  return (
    <div className="App">
      {movies.length > 0 && movies.map((movie) => (
        <Movie />
      )
      )
      }
    </div>
  );
}

export default App;
