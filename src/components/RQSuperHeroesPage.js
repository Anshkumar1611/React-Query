import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAddSuperHero, useSuperHeroes } from '../hooks/useSuperHeroes'

const RQSuperHeroesPage = () => {
    const [name, setName] = useState("")
    const [alterEgo, setAlterEgo] = useState("")

    const onSuccess = (data) => {
        console.log(data.data);
    }

    const onError = (error) => {
        console.log(error.message);

    }

    const { isLoading, data, isError, isFetching, error } = useSuperHeroes(onSuccess, onError)

    const { mutate: addHero } = useAddSuperHero()

    const handleAddHeroClick = () => {
        console.log(name, alterEgo);
        const hero = { name, alterEgo }
        addHero(hero)
    }

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
            <h1>SuperHeroes for you</h1>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input
                    type="text"
                    value={alterEgo}
                    onChange={(e) => setAlterEgo(e.target.value)} />
            </div>
            <button onClick={handleAddHeroClick}>Add Hero</button>
            {data?.data.map((hero, index) => {
                return (
                    <div key={index}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                    </div>
                )
            })}
        </>
    )
}

export default RQSuperHeroesPage