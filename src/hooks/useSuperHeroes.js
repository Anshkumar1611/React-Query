import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addSuperHero, fetchSuperHeroes } from '../apis/Api'

export const useSuperHeroes = ({ onSuccess, onError }) => {
  return (
    useQuery("super-heroes", fetchSuperHeroes,
      {
        onSuccess,
        onError
      }))
}

export const useAddSuperHero = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries('super-heroes')
      queryClient.setQueriesData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [{ id: oldQueryData?.data?.length + 1, ...oldQueryData.data, data:data.data }]
        }
      })
    }
  })
}
