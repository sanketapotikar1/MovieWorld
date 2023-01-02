import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function EditMovie() {
  const { id } = useParams();

  // const movie = movieList[id];
  const [movie, setMovie] = useState(null);

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



  return (
 <div>
  {movie ? <EditMovieForm movie={movie}/> : "Loading"}
 </div>
  );
}

function EditMovieForm({movie}){
  
 
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const Navigate = useNavigate();

  const editmovie = () => {
    // Add new movie object to existing Movie list
    const updateMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
      // name : "THOR",
      // poster : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHXV5at6mvLIF852fvIA5jeUi6bVYs8swuCPUCRWdRxWp0sr5Q",
      // rating : 8.8,
      // summary : "Love and Thunder posits that Thor would make a great dad and becoming one would grant Thor the purpose and love that he had looked for in his years of fighting for unconditional love.",
    };
    // copy the movie list and add movie to it.
    //setMovieList([newMovie, ...movieList]);

    // PUT Method
    //1. Method - PUT & Movie id
    //2. Body - data and JSON
    //3. Header - JSON
    fetch(`https://639c7e0a42e3ad6927338190.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => Navigate("/movieList"));
  };
  
  return(
    <div className="Add-movie-form">

    <TextField
      value={name}
      label="Name"
      variant="standard"
      onChange={(event) => setName(event.target.value)}
    />

    <TextField
      value={poster}
      label="Poster"
      variant="standard"
      onChange={(event) => setPoster(event.target.value)}
    />

    <TextField
      value={rating}
      label="Rating"
      variant="standard"
      onChange={(event) => setRating(event.target.value)}
    />

    <TextField
      value={summary}
      label="Summary"
      variant="standard"
      onChange={(event) => setSummary(event.target.value)}
    />

    <TextField
      value={trailer}
      label="trailer"
      variant="standard"
      onChange={(event) => setTrailer(event.target.value)}
    />

    <Button onClick={editmovie} variant="outlined" color="success">
      Save Movie
    </Button>
  </div>
  )
}
