import { React, useState, useEffect } from "react";
import "./styles.css";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

export default function App() {
  const [movies, setMovies] = useState([
    { title: "Kossie1", year: 2020 },
    { title: "Kossie2", year: 2021 },
    { title: "Kossie3", year: 2022 },
  ]);

  useEffect(() => {
    console.log(movies);
  });

  const renderMovies = movies.map((movie) => (
    <Movie key={movie.title} movie={movie} />
  ));

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
