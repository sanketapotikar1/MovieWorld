import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { Movie } from "./Movie";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://639c7e0a42e3ad6927338190.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    fetch(`https://639c7e0a42e3ad6927338190.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => {
      getMovies();   // This Avoids the Race Condition.
    });

    //getMovies() -- This Create Race Condition
  };

  
  const Navigate = useNavigate();

  const editMovie = (id) =>{
    Navigate(`/movieList/edit/${id}`);
  }

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteBtn={
              <button onClick={() => deleteMovie(mv.id)}>Delete me</button>
            }
            editBtn={
              <button onClick={() => editMovie(mv.id)}>Edit</button>
            }
          />
        ))}
      </div>
    </div>
  );
}
