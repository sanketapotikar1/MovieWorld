import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';


export function Add_Movie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const Navigate = useNavigate();

  const addmovie = (newMovie) => {
    // Add new movie object to existing Movie list
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    //   // name : "THOR",
    // poster : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHXV5at6mvLIF852fvIA5jeUi6bVYs8swuCPUCRWdRxWp0sr5Q",
    // rating : 8.8,
    // summary : "Love and Thunder posits that Thor would make a great dad and becoming one would grant Thor the purpose and love that he had looked for in his years of fighting for unconditional love.",
    //};
    // copy the movie list and add movie to it.
    //setMovieList([newMovie, ...movieList]);

    // POST Method
    //1. Method - POST
    //2. Body - data and JSON
    //3. Header - JSON
    fetch(`https://639c7e0a42e3ad6927338190.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => Navigate("/movieList"));
  };

  const MovieValidationSchema = yup.object({
    name: yup.string().required("why not fill this name 😉 ").min(3," Please give bigger movie name"),
    poster: yup
      .string()
      .required("why not fill this poster 😉")
      .min(6, "need bigger poster"),
    rating: yup
      .number()
      .required("why not fill this rating 😉")
      .min(1, "need bigger rating")
      .max(10, "rating is too much"),
    summary: yup
      .string()
      .required("why not fill this summary 😉")
      .min(15, "need bigger summary for movie"),
    trailer: yup
      .string()
      .required("why not fill this trailer 😉")
      .min(10, "need bigger trailer link for movie"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: MovieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("onSubmit", newMovie);
        addmovie(newMovie);
      },
    });

  return (
    <form onSubmit={handleSubmit} className="Add-movie-form">
      <TextField
        label="name"
        variant="standard"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.name && errors.name ? errors.name : ""}
        error = {touched.name && errors.name ? true : false}
      />

      <TextField
        label="poster"
        variant="standard"
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.poster && errors.poster ? errors.poster : ""}
        error = {touched.poster && errors.poster ? true : false}
      />

      <TextField
        label="rating"
        variant="standard"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.rating && errors.rating ? errors.rating : ""}
        error = {touched.rating && errors.rating ? true : false}
      />

      <TextField
        label="summary"
        variant="standard"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.summary && errors.summary ? errors.summary : ""}
        error = {touched.summary && errors.summary ? true : false}
      />

      <TextField
        label="trailer"
        variant="standard"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
        error = {touched.trailer && errors.trailer ? true : false}
      />

      <Button type="submit" variant="outlined">
        Add Movie
      </Button>
    </form>
  );
};
