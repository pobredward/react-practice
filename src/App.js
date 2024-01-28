import { React, useState, useEffect } from "react";
import "./styles.css";
import Movie from "./components/Movie";

export default function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");

  const [movies, setMovies] = useState([
    { title: "Kossie1", year: 2020 },
    { title: "Kossie2", year: 2021 },
    { title: "Kossie3", year: 2022 },
  ]);

  useEffect(() => {
    console.log(movies);
  });

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, { titie: movieTitle, year: movieYear }]);
    setMovieTitle("");
    setMovieYear("");
  };

  const renderMovies = movies.map((movie) => (
    <Movie key={movie.title} movie={movie} />
  ));

  return (
    <div className="App">
      <h1>Movie List</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="movie title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="movie year"
          value={movieYear}
          onChange={(e) => setMovieYear(e.target.value)}
        />
        <br />
        <button type="submit">Add Movie</button>
      </form>
      {renderMovies}
    </div>
  );
}
