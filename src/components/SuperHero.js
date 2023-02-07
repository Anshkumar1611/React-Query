import React from 'react'
import { useParams } from 'react-router-dom'
import useSuperHero from '../hooks/useSuperHero'

const SuperHero = () => {
    const { heroId } = useParams()

    const {data,isLoading,isError,isFetching,error} = useSuperHero(heroId)
    console.log("superhero page",data);
    if (isLoading || isFetching) {
        return <h2>Loading ...</h2>
    }

    if (isError) {
        return (
            <h2>{error.message}</h2>
        )
    }
    return (
        <>
            <h1>SuperHero for you</h1>
            <div>{data?.data.name}-{data.data.alterEgo}</div>
        </>
    )
}

export default SuperHero