import { useState } from "react";
import Moviecard from "./Moviecard";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();

    const apiKey = import.meta.env.VITE_MY_VARIABLE;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="container">
        <h1>React Movie Search 🔥</h1>
        <section>
          <form onSubmit={searchMovies}>
            <input
              type="text"
              id="movie"
              name="query"
              placeholder="Search Movie..."
              size={40}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </section>
      </div>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default App;
