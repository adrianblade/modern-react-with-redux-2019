import axios from 'axios'

const KEY = 'AIzaSyBJhzIUsjB-9AOWV98CNZessGY2gjQvjOQ'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})