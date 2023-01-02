import {
  useNavigate,
  useParams
} from "react-router-dom";

export function MovieDetails({ movieList }) {
  const { id } = useParams();

  const Navigate = useNavigate();

  const movie = movieList[id];

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  return (
    <div className="Movie-details-container">
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="Pushpa Russian Trailer | Allu Arjun | Rashmika | Fahadh Faasil | Sukumar | DSP | Mythri Movie Makers"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-space">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating">
          {movie.rating}⭐
        </p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <button
        onClick={() => {
          Navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}
