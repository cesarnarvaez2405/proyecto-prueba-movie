import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../utilities/httpClient'
import styles from '../styles/moviesDetalles.module.css'

export const MovieDetalles = () => {
    const { movieId } = useParams()
    const [movie, setMovies] = useState(null)

    useEffect(() => {
        get("/movie/" + movieId).then(data => {
            setMovies(data)
        })
    }, [movieId])

    if (!movie) {
        return null
    }

    console.log(movie)

    const image = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <>


            <div className= {styles.detalles}>
                <img src={image} alt={movie.title} className={styles.image} />
                <div className= {styles.textMovie}>
                    <p ><strong>Title: </strong> {movie.title}</p>
                    <p><strong>Descripcion: </strong> {movie.overview}</p>
                    <p>
                        <strong>Generos: </strong>
                        {movie.genres.map(generos => generos.name).join(", ")}
                    </p>
                    <p><strong>Fecha de lanzamiento: </strong>{movie.release_date}</p>
                    
                    <p><strong>Lenguaje original: </strong>{movie.original_language}</p>
                </div>

            </div>




        </>
    )
}
