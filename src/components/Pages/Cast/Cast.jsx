import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchCast } from "../../../api/apiservice";
import s from './Cast.module.scss'

export default function Cast() {
    const [credits, setCredits] = useState([])
    const { movieId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        fetchCast(movieId).then(credits => setCredits(credits.cast))
    }, [movieId]);
    return (
        <>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            {credits && <ul>
                {credits.map(credit => <li
                    className={s.cardSetItem}
                    key={credit.id}>
                    <img className={s.cardImg} src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                        alt={`${credit.name}`}
                    />
                    <p>{credit.name}</p>
                    <p>Caracter: {credit.character}</p>
                </li>)}
            </ul>}
        </>
    );
};