import { MY_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'

export const useMe = () => {
  const { data, loading, error } = useQuery(MY_QUERY)

  return {
    me: data?.me,
    loading,
    error
  }
}
