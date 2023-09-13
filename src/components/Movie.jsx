import { useState } from "react";
import movies from "../data/movies.json";
import Main from "./Main";
import "./Main.css";

function Movie (props) {

    // const handleDeleteClick = () => {
    //     props.delete(props.movieDetails.id);
    //   };
      
     return (
        <section key={props.movieDetails.id} className="card">
            <h2>{props.movieDetails.title}</h2>

            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }

            <h3>Rating: {props.movieDetails.rating}</h3>
            {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

            <button onClick={() => { props.callbackToDelete(props.movieDetails.title) }}>Delete</button>
        </section>
    )
}

export default Movie