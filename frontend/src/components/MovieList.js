import React, {useState, useContext} from 'react'
import { MovieProvider, MovieContext } from './MovieContext'

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <h3>Movie List</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  )
}

const AddMovie = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (event) => {
    setName(event.target.value)
  }

  const updatePrice = (event) => {
    setPrice(event.target.value)
  }

  const addMovie = (event) => {
    event.preventDefault()
    setMovies(prevMovies => [...prevMovies, {
      name: name,
      price: price,
    }])
  }

  return(
    <form onSubmit={addMovie}>
      <p><strong>Add a new movie!</strong></p>
      name: <input type='text' name='name' onChange={updateName}/>
      <br/>
      price: <input type='text' name='price' onChange={updatePrice}/>
      <br/>
      <button>Submit</button>
    </form>
  )
}

const Movie = ({name, price}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext)

  return(
    <div>
      {movies.map(movie => (
        <Movie
          name={movie.name}
          price={movie.price}
          key={movie.id} />
      ))}
    </div>
  )
}

const MoviesApp = () => {
  return(
    <MovieProvider>
      <div className='MoviesApp'>
        <Nav />
        <AddMovie />
        <MovieList />      
      </div>
    </MovieProvider>
  )
}

export default MoviesApp