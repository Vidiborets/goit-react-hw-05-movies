import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {fetchImages} from '../../../api/apiservice'
import s from './HomePages.module.scss'

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchImages()
        .then((data) => setMovies(data.results))
    }, [])
   
    return (
        <>
            <h1>Tranding</h1>
            <ul className={s.cardSet}>
                {movies &&
                    movies.map((movie) => (
                        <li className={s.cardSetItem} key={movie.id}>
                            <Link style={{ textDecoration: 'none' }} to={`/movies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} />
                                <p className={s.titleMovie}>{movie.title || movie.original_name}</p>
                            </Link>
                            <p>{movie.release_date || movie.first_air_date}</p>
                        </li>
                    ))}
            </ul>
        </>
    );
};