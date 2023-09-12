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

    let message;
    if(moviesToDisplay.length > 0) {
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>

    } else {
        message = <h1>Sorry, no movies to display</h1>
    }


  return (
    <div className="Main">
            {message}
      {moviesToDisplay.map((e) => {
        return (
          <section key={e.id} className="card">
            <h2>{e.title}</h2>

            { e.imgURL 
            ? <img src={e.imgURL}/>
            :  <img src="https://dummyimage.com/182x268/ffffff/000000" /> 
            }

            <h3>Rating: {e.rating}</h3>
            {e.rating >= 8 && <p>RECOMMENDED</p>}  
            {/* if the 1st part is true, && > apply this/render this */}

            <button onClick={() => {deleteMovie(e.id)}}>Delete</button>
          </section>
        );
      })}

    </div>
  );
}

export default Main;


