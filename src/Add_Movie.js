import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Add_Movie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addmovie = () => {
    // Add new movie object to existing Movie list
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      // name : "THOR",
      // poster : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHXV5at6mvLIF852fvIA5jeUi6bVYs8swuCPUCRWdRxWp0sr5Q",
      // rating : 8.8,
      // summary : "Love and Thunder posits that Thor would make a great dad and becoming one would grant Thor the purpose and love that he had looked for in his years of fighting for unconditional love.",
    };

    setMovieList([newMovie, ...movieList]);
  };
  return (
    <div className="Add-movie-form">
      <TextField
        label="Name"
        variant="standard"
        onChange={(event) => setName(event.target.value)} />

      <TextField
        label="Poster"
        variant="standard"
        onChange={(event) => setPoster(event.target.value)} />

      <TextField
        label="Rating"
        variant="standard"
        onChange={(event) => setRating(event.target.value)} />

      <TextField
        label="Summary"
        variant="standard"
        onChange={(event) => setSummary(event.target.value)} />

      <Button onClick={addmovie} variant="outlined">
        Add Movie
      </Button>
    </div>
  );
}
;
