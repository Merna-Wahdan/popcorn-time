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
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((e) => {
        return e.title !== movieTitle
    })
    setmoviesToDisplay(newList)    

}


const handleSubmit = (e) => {
  e.preventDefault();
  const newMovie = {
    title: title,
    rating: rating
  }
const newList = [newMovie, ...moviesToDisplay] //push> push a state 
setmoviesToDisplay(newList)

//clear form
setTitle("")
setRating("")

}

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length}/>
      <form onSubmit={handleSubmit}>
<label> 
  Title:
        <input 
        type="text" 
        name="title" 
        required
        placeholder="enter the title"
        value={title} 
        //whenever the user type, its updates here
        onChange={(e) => { setTitle(e.target.value) }}/> 

</label>

<label>
  Rating:
<input name="rating" 
type="number"
required
min={1}
max={10}
value={rating}
onChange={(e) => { setRating(e.target.value)}} />
</label>



        <button>Create</button>
      </form>
      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie}/> 
      <Footer />

    </>   
  )
}

export default App

//props is to render object component