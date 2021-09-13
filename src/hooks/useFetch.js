import { useCallback, useEffect, useState } from 'react'

const API_URL = 'https://api.jungledevs.com/api/v1'

const useFetch = (endpoint = '', method = 'GET', ...requestParams) => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState({})
  
  const fetchData = useCallback(async asyncParams => {
    setIsLoading(true)
    setResponse({})

    const response = await fetch(
      `${API_URL}${endpoint}`,
      {
        method,
        ...requestParams,
        ...asyncParams
      }
    )

    const data = await response.json()

    setResponse({ error: response.status >= 400, data })
    setIsLoading(false)
  }, [endpoint, requestParams])
  
  useEffect(() => {
    if (method === 'GET') {
      setIsLoading(true)
      fetchData()
    }
  }, [])

  return {
    response,
    isLoading,
    request: fetchData
  }
}

export default useFetch