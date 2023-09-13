import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";
import Movie from "./Movie";
import Header from "./Header";

function Main(props) {
    const [moviesToDisplay, setmoviesToDisplay] = useState(movies)



   

  return (
    <div className="Main">
      {props.movies.map((movieObj) => {
        return (
          <>
          <Movie key={movieObj.id} movieDetails={movieObj} callbackToDelete={props.callbackToDelete} />
          </>
        );
      })}

    </div>
  );
}

export default Main


