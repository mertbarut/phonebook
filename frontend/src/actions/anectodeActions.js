const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const createAnectode = (content) => {
  return {
    type: 'NEW_ANECTODE',
    data: asObject(content)
  }
}

export const castVote = (id) => {
  return {
    type: 'CAST_VOTE',
    data: { id }
  }
}