import { useSelector, useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anectodeReducer'

const Anectodes = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button onClick={() => createAnectode()} >create</button>
      </form>
    </div>
  )
}

export default Anectodes