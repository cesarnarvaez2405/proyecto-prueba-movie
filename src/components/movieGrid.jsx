import React, { useEffect, useState } from 'react'
import { get } from '../utilities/httpClient'
import { MovieCard } from './movieCard'
import styles from '../styles/moviesGrid.module.css'

export const MovieGrid = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        get("/discover/movie").then(data => {
            setMovies(data.results)
        })
    }, [])
    return (

        <>
            <ul className= {styles.filitas}>
                {movies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie} />
                )}
            </ul>
        </>
    )
}
