import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";
import Movie from "./Movie";

function Main() {
    const [moviesToDisplay, setmoviesToDisplay] = useState(movies)

    const deleteMovie = (movieId) => {
        console.log("deleteing movie...", movieId);
        const newList = moviesToDisplay.filter((e) => {
            return e.id !== movieId
        })
        setmoviesToDisplay(newList)    

}

    let message;
    if(moviesToDisplay.length > 0) {
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>

    } else {
        message = <h1>Sorry, no movies to display</h1>
    }


  return (
    <div className="Main">
            {message}
      {moviesToDisplay.map((movieObj) => {
        return (
          <Movie movieDetails={movieObj} delete={deleteMovie}/>
  
        );
      })}

    </div>
  );
}

export default Main


