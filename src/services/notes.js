import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = 'https://kmylo-midudev-notes-app-full-stack-bootcamp-wrv79g46cvqg5-3001.githubpreview.dev/notes'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const create = async (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.post(baseUrl, newObject, config)
  const response = await request
  return response.data
}

const update = async (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(`${baseUrl}/${id}`, newObject, config)
  const response = await request
  return response.data
}

export default { getAll, create, update, setToken }