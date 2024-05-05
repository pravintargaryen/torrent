export default function Moviecard({ movie }) {
  let badgeText;
  const year = 2023;

  const newDate = new Date(movie.release_date);
  const newYear = newDate.getFullYear();
  if (newYear >= year) {
    badgeText = "NEW";
  } else {
    badgeText = "";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + "Poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <small>{movie.release_date}</small>
        </p>
        <p>
          <small>{movie.vote_average}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}
