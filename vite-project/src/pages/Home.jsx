import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1990" },
    { id: 3, title: "The Matrix", release_date: "2002" },
  ];

  const handleSearch = () => {};

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
          />
        </form>
        <button type="submit" className="search-button">
          Search
        </button>
        <div className="movies-grid">
          {movies.map((movie) => {
            return <MovieCard movie={{ movie }} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
}
