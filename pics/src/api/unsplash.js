import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 18812fa7b070745656e03a3c5cd1db5f0937b92bf36362ef1dbb81f58b27f39c'
  }
})
