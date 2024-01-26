import React from "react";
import "./styles.css";

export default function App() {
  const movies = [
    { title: "Kossie1", year: 2020 },
    { title: "Kossie2", year: 2021 },
    { title: "Kossie3", year: 2022 },
  ];

  const renderMovies = movies.map((movie) => (
    <div className="movie" key={movie.title}>
      <div className="movie-title">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
    </div>
  ));

  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
    </div>
  );
}
