import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API_KEY = "31ea6e90"

export default function DiscoverPage(){

  const [ movies, setMovies ] = useState()

  //holds what the user types
  const [ searchText, setSearchText ] = useState("")

  const getMovies = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`)
    console.log("response", response.data.Search)
    setMovies(response.data.Search)
  }

  return(
    <div>
      <h1>Discover Movies</h1>
      {/* we save what the user types in the the state */}
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      {/* we call the function in the button, instead of useEffect */}
      <button onClick={getMovies}>Search</button>
      <p>Searchin movies with the word <b>{searchText}</b></p>
      {!movies 
        ? "Loading" 
        : movies.map(movie => {
          return (
            <div key={movie.imdbID}>
              {/* we link to the component path + the id */}
              <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title}, {movie.Year}</h3></Link>
              <img src={movie.Poster}/>
            </div>
          )
        })}
    </div>
  )
}