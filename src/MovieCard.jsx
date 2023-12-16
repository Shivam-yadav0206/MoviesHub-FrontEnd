import React from "react";
const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.vote_average+"/10"}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;