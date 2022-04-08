import axios from 'axios'
const baseUrl = '/api/persons'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const request = axios.get(baseUrl)
	const response = await request
	return response.data
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    console.log(config)

    const response = await axios.post(baseUrl, newObject, config)
    console.log(response)
    return response
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, remove, setToken }