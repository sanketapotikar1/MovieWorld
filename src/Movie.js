import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export function Movie({ movie, id }) {
  // mUse hooks for Navigate function otherwisw it throw an error.

  const Navigate = useNavigate();

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [toggle, setToggle] = useState(true);

  const parastyles = {
    display: toggle ? "block" : "none",
  };

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
      <div className="movie-space">
        <h3 className="movie-name">{movie.name}</h3>

        <IconButton onClick={() => setToggle(!toggle)} aria-label="delete">
          {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>

        <IconButton
          color="primary"
          onClick={() => Navigate(`/movieList/${id}`)}
          aria-label="Movie-info"
        >
          <InfoIcon />
        </IconButton>

        <p style={styles} className="movie-rating">
          {movie.rating}⭐
        </p>
      </div>

      {/* conditional styling */}
      {/* <p style = {parastyles} className = "movie-summary">{movie.summary}</p> */}

      {/* condtional rendering  */}
      {toggle ? (
        <p style={parastyles} className="movie-summary">
          {movie.summary}
        </p>
      ) : null}

      <Counter />
    </div>
  );
}
