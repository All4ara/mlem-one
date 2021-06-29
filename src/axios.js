import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mlem-one-backend.herokuapp.com'
})

export default instance;