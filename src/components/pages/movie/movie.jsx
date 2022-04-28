import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import MovieSection from '../../organisms/movie-section/movie-section';

const Movie = () => {
  const getParams = useParams();
  const movieObj = useSelector((state) => state.movies.currentlySelectedMovie);
  const navigate = useNavigate();

  useEffect(() => {
  // If movie title not found set setNavigateToHome to true
    if (Object.entries(getParams).length === 0) {
      navigate('/');
      return;
    }

    // If there is no currentlySelectedMovie setNavigateToHome to true
    if (movieObj === '') {
      navigate('/');
      return;
    }

    // If the ID url param is not the same as the imdbID navigate to home
    const { movieID } = getParams;
    if (movieObj.imdbID !== movieID) {
      navigate('/');
    }
  }, []);

  if (movieObj !== '') {
    return (
      <MovieSection movieObj={movieObj} />
    );
  }

  return null;
};

export default Movie;
