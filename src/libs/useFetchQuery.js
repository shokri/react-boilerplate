import { useQueryClient } from 'react-query'

const useFetchQuery = name => {
  const queryClient = useQueryClient()

  return queryClient.getQueryState(name) || {}
}

export default useFetchQuery
