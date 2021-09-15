import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://mytodolist-frontend.herokuapp.com',
})

export default Api;