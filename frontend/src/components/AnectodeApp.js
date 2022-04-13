import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, castVote, setAnecdotes, removeAnecdote } from '../reducers/anectodeReducer'
import anecdoteService from '../services/anecdotes'
import { initializeAnecdotes, castVoteForAnecdote } from '../reducers/anectodeReducer'
import '../css/Anecdote.css'

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

  const remove = async (id) => {
    dispatch(removeAnecdote(id))
  }

  return (
    <div>
      <h2 className='title'>Anecdotes </h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id} className='anecdote'>
          <div className='content'>
            {anecdote.content}
          </div>
          <div className='votes'>
            {anecdote.votes} votes
            <div>
              <button name='vote' id='vote' onClick={() => vote(anecdote.id)}>vote</button>
              <button name='delete' id='delete' onClick={() => remove(anecdote.id)}>delete</button>
            </div>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnectode} className='creator'>
        <div><textarea name="anectode" /></div>
        <button type="submit" id='create'>create</button>
      </form>
    </div>
  )
}

export default App