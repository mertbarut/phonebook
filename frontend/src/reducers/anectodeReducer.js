import { createSlice } from '@reduxjs/toolkit'

const anectodesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anectodesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  //console.log('state now: ', state)
  //console.log('action', action)

  switch(action.type) {
    case 'NEW_ANECTODE':
      return [...state, action.data]
    case 'CAST_VOTE':
      const id = action.data.id
      const anectodeToVote = state.find(anecdote => anecdote.id === id)
      const votedAnectode = {
        ...anectodeToVote,
        votes: anectodeToVote.votes + 1
      }
      return state.map(a =>
        a.id !== id ? a : votedAnectode
      )
    default:
      return state
  }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const anectodeSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnectode(state, action) {
      const content = action.payload
      state.push({
        content,
        votes: 0,
        id: generateId()
      })
    },
    castVote(state, action) {
      const id = action.payload
      const anectodeToVote = state.find(anecdote => anecdote.id === id)
      const votedAnectode = {
        ...anectodeToVote,
        votes: anectodeToVote.votes + 1
      }
      return state.map(a =>
        a.id !== id ? a : votedAnectode
      )
    }
  }
})

export const { createAnectode, castVote } = anectodeSlice.actions
export default anectodeSlice.reducer