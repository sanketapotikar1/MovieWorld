import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Add_Movie } from "./Add_Movie";
import { MovieList } from "./MovieList";
import { PageNotFound } from "./PageNotFound";
import { Home } from "./Home";
import { MovieDetails } from "./MovieDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { EditMovie } from "./EditMovie";
import { Basicform } from "./Basicform";

function App() {
  const names = ["sanket", "vaibhav", "swapnil", "balaji"];

  const students = [
    {
      name: "sanket Apotikar",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAGiDm31RNHpy_DyTnsEPKpL6TUKiFCOpVQ&usqp=CAU",
    },

    {
      name: "vaibhav Bundile",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUmE6FMTWUnXwdX_vkq9XMe_6AIFuuBY_lQ&usqp=CAU",
    },

    {
      name: "swapnil Bhosale",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL60p-Cv5yRHtLK2z80SyuAFy8Qskexvs0AQ&usqp=CAU",
    },

    {
      name: "balaji Devkar",
      profile_pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREM6bfyb4UfMog4UyqobM0i5yetcxurdOFPc5qNoKiRL6RYGGgzVv7qVhG9mUm27VD1GM&usqp=CAU",
    },
  ];

  const Intial_MovieList = [
    {
      id: "100",
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      id: "101",
      name: "Avatar: The Way of Water",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
      rating: 9.3,
      summary:
        "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
      trailer: "https://www.youtube.com/embed/o5F8MOz_IDw",
    },
    {
      id: "102",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      id: "103",
      name: "The Shawshank Redemption",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8W10Lh_o-ZAEMnELvM_a5txQINdiU7vaat2IsjanUi5nOvFD5e7lzUhm32RRq-Gijcw&usqp=CAU",
      rating: 9.3,
      summary:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
    },
    {
      id: "104",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      id: "105",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      id: "106",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      id: "107",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: "108",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      id: "109",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
  ];

  const [movieList, setMovieList] = useState(Intial_MovieList);

  const Navigate = useNavigate();

  const [mode, setMode] = useState("dark");

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <Paper elevation={5} style={{ minHeight: "100vh" }}>
        <div className="App">
          <header className="App-header">
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" onClick={() => Navigate("/")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => Navigate("/movieList")}>
                  Movie-app
                </Button>
                <Button color="inherit" onClick={() => Navigate("/movieList/basic-form")}>
                  Basic Form
                </Button>
                <Button
                  color="inherit"
                  onClick={() => Navigate("/movieList/addmovie")}
                >
                  Add Movie
                </Button>

                <Button
                  className="Mode-setting"
                  color="inherit"
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  startIcon={
                    mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />
                  }
                >
                  {mode === "light" ? "dark" : "light"} mode
                </Button>
              </Toolbar>
            </AppBar>

            {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movieList">Movie-app</Link>
            </li>
            <li>
              <Link to="/movieList/id">Movie-details</Link>
            </li>
          </ul>
        </nav> */}

            <section className="section-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movieList/:id" element={<MovieDetails />} />
                <Route path="/movieList/basic-form" element={<Basicform />} />
                <Route path="/movieList/edit/:id" element={<EditMovie/>} />
                <Route path="/TicTacToe" element={<TicTacToe />} />

                <Route path="/movieList/addmovie" element={<Add_Movie />} />
                <Route path="/404" element={<PageNotFound />} />
                {/* <Route path = "*" element = {<Navigate replace to="/404"/>}/> */}
                <Route path="/movieList" element={<MovieList />} />
              </Routes>
              {/* <MovieList movieList={movieList} setMovieList={setMovieList} /> */}
            </section>
          </header>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function TicTacToe() {
  return <h1>Fun Game </h1>;
}

export default App;
