import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { fetchMoviesQuery } from "../../../api/apiservice";
import s from './MoviePage.module.scss'


export default function MoviePage() {    
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('')

    useEffect(() => {
        
        if (!query) {
            return;
        }
    });
    
    const handleChange = (e) => {
        setQuery(e.target.value.toLowerCase())
    };

    const onSubmit = (query) => {
        fetchMoviesQuery(query).then(setMovies)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            return <h1>Введите фильм</h1>
        }
        onSubmit(query);
       resetForm()
    };
    const resetForm = () => {
        setQuery('')
       
    }

    return (
        <>
            <form className={s.form} onSubmit={(handleSubmit)}>
                <label>
                    <input
                        className={s.input}
                        type='text'
                        name='query'
                        autoComplete='off'
                        placeholder='Введите название фильма'
                        value={query}
                        onChange={handleChange}
                    ></input>
                    <button className={s.button} type='submit'>
                        Search
                    </button>
                </label>
            </form>
            <div className={s.containerMovie}>
                <ul className={s.cardSet}>
                    {movies && movies.map((movie) => (
                        <li className={s.cardSetItem} key={movie.id}>
                            <Link style={{ textDecoration: 'none' }} to={`/movies/${movie.id}`}>
                                <img className={s.cardImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <p className={s.titleMovie}>{movie.title}</p>
                            </Link>
                            <p>{movie.release_date || movie.first_air_date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}