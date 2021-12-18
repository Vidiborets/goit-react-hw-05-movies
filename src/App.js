import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './components/Pages/HomePages/HomePages';
import {  Route,Routes } from 'react-router-dom';
import MoviePage from './components/Pages/Movie/MoviePage';
import MoviePageDetalis from './components/Pages/MoviePageDetalis';
import Cast from './components/Pages/Cast';
import Reviews from './components/Pages/Reviews';

const App = () => {

    

    return (
        <Container>
            <AppBar />
            
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/movies' element={<MoviePage />} />
                <Route path='/movies/:movieId' element={<MoviePageDetalis />} />
                <Route path='/movies/:movieId/cast' element={<Cast />} />
                <Route path='/movies/:movieId/reviews' element={<Reviews/>}/>
                </Routes>
        </Container>
    );
};

export default App;







