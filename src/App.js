import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const App = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=67f4558524838becc5a7b8a3850969c4";
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovies = async (value) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=67f4558524838becc5a7b8a3850969c4&query=${value}`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=67f4558524838becc5a7b8a3850969c4`
      );
      const data = await response.json();
      if (data.imdb_id) {
        window.open(`https://www.imdb.com/title/${data.imdb_id}`, "_blank");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h1>MoviesHub</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div onClick={() => handleClick(movie.id)} className="cursor">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
