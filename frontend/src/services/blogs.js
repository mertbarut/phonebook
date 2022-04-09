import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const exportedObjects = {
  getAll
}

export default exportedObjects