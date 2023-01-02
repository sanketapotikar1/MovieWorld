import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GradeIcon from '@mui/icons-material/Grade';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarSharpIcon from '@mui/icons-material/StarSharp';

export function Movie({ movie, id, deleteBtn, editBtn}) {
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
    <Card>
      <div className="movie-container" style={{height : "min-content"}}>
        <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
        <CardContent>
          <div className="movie-space">
            <h4 className="movie-name">{movie.name}</h4>

            <IconButton className = "summary-toggle" onClick={() => setToggle(!toggle)} aria-label="delete">
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

            <IconButton
              color="primary"
              onClick={() => Navigate(`/movieList/${id}`)}
              aria-label="Movie-info"
            >
              <InfoIcon />
            </IconButton>
            <div>
            <p style={styles} className="movie-rating">
              ⭐{movie.rating}
            </p>
            </div>
            
          </div>

          {/* conditional styling */}
          {/* <p style = {parastyles} className = "movie-summary">{movie.summary}</p> */}

          {/* condtional rendering  */}
          {toggle ? (
            <p style={parastyles} className="movie-summary">
              {movie.summary}
            </p>
          ) : null}
        </CardContent>
        <CardActions>
          <Counter />{deleteBtn} {editBtn}
        </CardActions>
      </div>
    </Card>
  );
}
