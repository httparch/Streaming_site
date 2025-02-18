export default function MovieCard({ movie }) {
  function onFavoriteClick() {}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            heart
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.movie.title}</h3>
        <p>{movie.movie.release_date}</p>
      </div>
    </div>
  );
}
