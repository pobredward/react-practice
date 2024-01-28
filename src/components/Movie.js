import { React } from "react";
import PropTypes from "prop-types";

export default function Movie({ movie }) {
  return (
    <div className="movie">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};
