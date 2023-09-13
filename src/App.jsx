// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import movies from "./data/movies.json";

// import Header from './components/Header'
// import Footer from './components/Footer'
// import Main from './components/Main'
// import AddMovie from './components/AddMovie';
// import './App.css'

// function App() {
//   const [moviesToDisplay, setmoviesToDisplay] = useState(movies)
  

//   const deleteMovie = (movieTitle) => {
//     const newList = moviesToDisplay.filter((e) => {
//         return e.title !== movieTitle
//     })
//     setmoviesToDisplay(newList)    

// }

// const addNewMovie = (newMovie) => {
// const newList = [newMovie, ...moviesToDisplay] //push> push a state 
// setmoviesToDisplay(newList)

// }

//   return (
//     <>
//       <Header numberOfMovies={moviesToDisplay.length}/>
      
//       <Main movies={moviesToDisplay} callbackToDelete={deleteMovie}/> 
//       <AddMovie callbackToAddMovie={addNewMovie}/>
//       <Footer />

//     </>   
//   )
// }

// export default App

//props is to render object component






import { useState } from "react";

import movies from "./data/movies.json";

import Header from './components/Header'
import AddMovie from "./components/AddMovie";
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((element) => {
      return element.title !== movieTitle;
    });
    setMoviesToDisplay(newList);
  }



  const addNewMovie = (newMovie) => {
    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToAddMovie={addNewMovie} />
      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
