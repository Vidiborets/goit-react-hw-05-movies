import { useEffect, useState } from "react";
import { NavLink ,useParams,useNavigate} from "react-router-dom";
import { fetchMoviesId } from '../../../api/apiservice'
import s from './MoviePageDetalis.module.scss'


export default function MoviePageDetalis() {
    const [movie, setMovie] = useState([])
    const { movieId } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchMoviesId(movieId).then(setMovie)
    }, [movieId]);

    return (
        <>
            <button onClick={()=>navigate(-1)}>Go back</button>
            {movie &&
                <div>
                    <div className={s.containerMovie}>
                        <img className={s.cardImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`} />
                    </div>
                    <div>
                        <h1>{`${movie.original_title}`}</h1>
                        <p>User score:{`${movie.vote_average}`}</p>
                        <h2>Overview</h2>
                        <p>{`${movie.overview}`}</p>
                        <h3>Genres</h3>
                        <ul>
                            {movie.length >= 1 && movie.genres.map(genre => <li key={genre.id}>{`${genre.name}`}</li>)}
                        </ul>
                    </div>
                </div>}
            <div>
                <p>Adidtional information</p>
                <ul>
                    <li>
                        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};