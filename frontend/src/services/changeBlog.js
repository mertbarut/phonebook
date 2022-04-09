import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
	//console.log(token)
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
    //console.log(config)

    const response = await axios.post(baseUrl, newObject, config)
    //console.log(response)
    return response
}

const update = async (id, newObject) => {
	const config = {
        headers: { Authorization: token },
    }

    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
	return response
}

const remove = async (id) => {
	const config = {
        headers: { Authorization: token },
    }

    const response = await axios.delete(`${baseUrl}/${id}`, config)
	return response
}

const exportedObjects = { getAll, create, update, remove, setToken }

export default exportedObjects