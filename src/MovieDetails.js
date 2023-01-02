import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {useEffect,useState} from "react";

export function MovieDetails() {
  const { id } = useParams();

  // const movie = movieList[id];
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch(`https://639c7e0a42e3ad6927338190.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(() => {
    getMovie();
  }, []);


  const Navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  return (
    <Card>
      <div className="Movie-details-container">
        <iframe
          width="70%"
          height="415px"
          src={movie.trailer}
          title="Pushpa Russian Trailer | Allu Arjun | Rashmika | Fahadh Faasil | Sukumar | DSP | Mythri Movie Makers"
          frameborder="0"
          allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <CardContent>
          <div className="movie-space">
            <h2 className="movie-name">{movie.name}</h2>
            <p style={styles} className="movie-rating">
              {movie.rating}⭐
            </p>
          </div>
          <p className="movie-summary">{movie.summary}</p>
        </CardContent>

        {/* <button
        onClick={() => {
          Navigate(-1);
        }}
      >
        Back
      </button> */}

        <CardActions>
          <Button
            onClick={() => {
              Navigate(-1);
            }}
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

function example(){
 const example = {
    name: "Avatar: The Way of Water",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    rating: 9.3,
    summary:
      "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    trailer: "https://www.youtube.com/embed/o5F8MOz_IDw" ,
  }
}

