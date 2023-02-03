import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/moviesCard.module.css'

export const MovieCard = ({ movie }) => {
    const image = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <>



            <li className={styles.movieCard}>

                <Link to={"/movies/" + movie.id}>

                    <img className={styles.movieImage} src={image} alt={movie.title} />

                    <div className={styles.title}>
                        {movie.title}
                    </div>

                </Link>

            </li>




        </>
    )
}
