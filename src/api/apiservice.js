import axios from 'axios';
import propTypes from 'prop-types'

const URL = "https://api.themoviedb.org/3/";
const API_KEY = "048e8c089b7a464bfd04ecdb925bf7b7";

export async function fetchImages() {
     const r = await axios
     .get(`${URL}trending/all/week?api_key=${API_KEY}`);
   return r.data;
}

export async function fetchMoviesId(movieId) {
  const { data } = await axios(`${URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return (data);
}
export async function fetchMoviesQuery(query) {
  const { data } = await axios(`${URL}search/movie?&query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
    return (data.results);
};

export async function fetchCast(movieId) {
  const { data } = await axios(`${URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
  return (data)
}
export async function fetchRewiews(movieId) {
  const { data } = await axios(`${URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
  return (data)
}
fetchMoviesQuery.propTypes = {
  query: propTypes.string.isRequired
}

fetchMoviesId.propTypes={
    movieId: propTypes.number.isRequired
}
fetchCast.propTypes={
    movieId: propTypes.number.isRequired
}
fetchRewiews.propTypes={
    movieId: propTypes.number.isRequired
}

