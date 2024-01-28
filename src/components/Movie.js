import { React } from "react";
import PropTypes from "prop-types";

export default function Movie({ movie, removeMovie }) {
  return (
    <div className="movie">
      <div className="movie-title">
        {movie.title}
        <span className="movie-year">{movie.year}</span>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={() => removeMovie(movie.id)}>Delete</button>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  removeMovie: PropTypes.func.isRequired,
};
