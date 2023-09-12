import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

function Main() {
    const [moviesToDisplay, setmoviesToDisplay] = useState(movies)

    const deleteMovie = (movieId) => {
        console.log("deleteing movie...", movieId);
        const newList = moviesToDisplay.filter((e) => {
            return e.id !== movieId
        })
        setmoviesToDisplay(newList)    

}


  return (
    <div className="Main">
        <h1>Number of movies: {moviesToDisplay.length}</h1>
      {moviesToDisplay.map((e) => {
        return (
          <section key={e.id} className="card">
            <h2>{e.title}</h2>
            <h3>Rating: {e.rating}</h3>
            <button onClick={() => {deleteMovie(e.id)}}>Delete</button>
          </section>
        );
      })}

    </div>
  );
}

export default Main;


