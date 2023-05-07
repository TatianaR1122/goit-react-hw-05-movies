import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/Api';
import {
  LinkFilm,
  Main,
  MoviesItem,
  MoviesList,
  MovieTitle,
  Title,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <>
      <Main>
        <Title>Trending today</Title>
        <MoviesList>
          {movies.map(movie => (
            <MoviesItem key={movie.id}>
              <LinkFilm to={`movies/${movie.id}`} state={{ from: location }}>
                <MovieTitle>{movie.title}</MovieTitle>
              </LinkFilm>
            </MoviesItem>
          ))}
        </MoviesList>
      </Main>
    </>
  );
};
export default Home;
