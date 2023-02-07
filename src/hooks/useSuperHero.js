import { useQuery, useQueryClient } from 'react-query'
import { fetchSuperHero } from '../apis/Api'

const useSuperHero = (heroId) => {

    // const queryClient = useQueryClient()
    // const superHeroesCache = queryClient.getQueriesData('super-heroes')[0][1].data
    // console.log(superHeroesCache)
    // const superHero = superHeroesCache.find(superHero => superHero.id === heroId)
    // return superHero
    return (
        useQuery("super-hero", () => fetchSuperHero(heroId)
        ))
}

export default useSuperHero