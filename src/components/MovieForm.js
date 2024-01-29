import { React, useState } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

export default function MovieForm({ addMovie }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };

  const resetErrors = () => {
    setTitleError("");
    setYearError("");
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!movieTitle) {
      setTitleError("Title is required");
      validated = false;
    }
    if (!movieYear) {
      setYearError("Year is required");
      validated = false;
    }
    return validated;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addMovie({ id: Date.now(), title: movieTitle, year: movieYear });
      resetForm();
    } else {
      console.log(titleError, yearError);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputField
        type="text"
        placeholder="movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        errorMessage={titleError}
      />
      <InputField
        type="text"
        placeholder="movie year"
        value={movieYear}
        onChange={(e) => setMovieYear(e.target.value)}
        errorMessage={yearError}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

MovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
