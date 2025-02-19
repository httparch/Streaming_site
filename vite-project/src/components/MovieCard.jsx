import "../css/Moviecard.css";

export default function MovieCard({ movie }) {
  function onFavoriteClick() {}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            heart
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.movie.title}</h3>
        <p>{movie.movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
