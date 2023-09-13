import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import movies from "./data/movies.json";

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'

function App() {
  const [moviesToDisplay, setmoviesToDisplay] = useState(movies)

  const deleteMovie = (movieId) => {
    console.log("deleteing movie...", movieId);
    const newList = moviesToDisplay.filter((e) => {
        return e.id !== movieId
    })
    setmoviesToDisplay(newList)    

}
  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length}/>
      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie}/> 
      <Footer />

    </>   
  )
}

export default App

//props is to render object component