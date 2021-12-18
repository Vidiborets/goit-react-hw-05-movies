import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchRewiews } from "../../../api/apiservice";
import s from './Reviews.module.scss'

export default function Cast() {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        fetchRewiews(movieId).then(reviews => setReviews(reviews.results))
    }, [movieId]);
    return (
    <>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        {reviews.length >= 1 ? <ul className={s.list}>
            {reviews.map(review => <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
            </li>)}
        </ul> : <p>Do not have reviews</p>}
    </>
    )
};