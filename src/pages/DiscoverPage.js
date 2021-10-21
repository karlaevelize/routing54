import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API_KEY = "31ea6e90"

export default function DiscoverPage(){

  const [ movies, setMovies ] = useState([])

// hardcoded the search term
// in the Reader, you will use an input field to get it
  const searchText = "life"

  // 1. Write an async function
  // 2. Make a request with axios
  // 3. Console.log the response
  // 4. Call the function inside useEffect
  // 5. Check the console.log to find the data
  // 6. Put the data in the state (setState(response.blabla))

  const fetchData = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`)
    console.log("response", response.data.Search)
    setMovies(response.data.Search)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div>
      <h1>Discover Movies</h1>
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