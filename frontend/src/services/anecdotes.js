import axios from 'axios'

const baseUrl = 'http://localhost:3000/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const changeVotesById = async (id, count) => {
  const anectodeToChange = await getById(id)
  const changedAnecdote = {...anectodeToChange, votes: anectodeToChange.votes + count}
  const response = await axios.put(`${baseUrl}/${id}`, changedAnecdote)
  return response.data
}

const deleteAnecdote = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default { 
  getAll,
  createNew,
  getById,
  changeVotesById,
  deleteAnecdote
}