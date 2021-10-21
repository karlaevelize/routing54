import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const API_KEY = "31ea6e90"

export default function DetailsPage(){

  const [ movie, setMovie ] = useState({})

  //it goes to the url and get us the value for the params
  //it's an object like { movieId: blabla }
  const params = useParams()
  console.log("params", params.movieId)

  const fetchData = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?i=${params.movieId}&apikey=${API_KEY}`)
    // console.log("one movie:", response)
    //putting the data in the state
    setMovie(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div>
      <h1>Movie Details Page</h1>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster}/>
      <p>{movie.Plot}</p>
    </div>
  )
}