import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
  const [ resources, setResources ] = useState([])

  useEffect(
    () => {
    // must be a function that is defined somewhere else, and called from within useEffect
    // (e.g. => fetchResource(resource)

    // alternatively, can also be a wrapped IIFE
      (async (resource) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        )

        setResources(response.data)
      })(resource)
    },
    [resource]
  )

  return resources
}

export default useResources
