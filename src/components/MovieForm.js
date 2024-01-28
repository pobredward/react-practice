import { React, useState } from "react";
import PropTypes from "prop-types";

export default function MovieForm({ addMovie }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addMovie({ id: Date.now(), title: movieTitle, year: movieYear });
    resetForm();
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
}

MovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
