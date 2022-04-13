import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, castVote, setAnecdotes } from '../reducers/anectodeReducer'
import anecdoteService from '../services/anecdotes'
import { initializeAnecdotes, castVoteForAnecdote } from '../reducers/anectodeReducer'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  //console.log(anecdotes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  const vote = async (id) => {
    dispatch(castVoteForAnecdote(id))
  }

  const addAnectode = async (event) => {
    event.preventDefault()
    const content = event.target.anectode.value
    event.target.anectode.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button name='vote' onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnectode}>
        <div><input name="anectode" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App