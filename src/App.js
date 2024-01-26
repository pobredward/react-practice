import React from "react";
import "./styles.css";
import Movie from "./components/Movie";

export default function App() {
  const movies = [
    { title: "Kossie1", year: 2020 },
    { title: "Kossie2", year: 2021 },
    { title: "Kossie3", year: 2022 },
  ];

  const renderMovies = movies.map((movie) => (
    <Movie key={movie.title} movie={movie} />
  ));

  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
    </div>
  );
}
