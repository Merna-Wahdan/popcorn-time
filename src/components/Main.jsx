import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";
import Movie from "./Movie";
import Header from "./Header";

function Main(props) {
    const [moviesToDisplay, setmoviesToDisplay] = useState(movies)



   

  return (
    <div className="Main">
      {props.movies.map((movieObj, index) => {
        return (
          <>
          <Movie key={index} movieDetails={movieObj} callbackToDelete={props.callbackToDelete} />
          </>
        );
      })}

    </div>
  );
}

export default Main


