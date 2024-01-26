import { React } from "react";
import PropTypes from "prop-types";

export default function Movie(props) {
  return (
    <div className="movie">
      <div className="movie-title">{props.movie.title}</div>
      <div className="movie-year">{props.movie.year}</div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};
