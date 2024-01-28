import { React, useState, useEffect } from "react";
import "./styles.css";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(movies);
  });

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const renderMovies = movies.length
    ? movies.map((movie) => (
        <Movie key={movie.id} movie={movie} removeMovie={removeMovie} />
      ))
    : "No movies added";

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}
