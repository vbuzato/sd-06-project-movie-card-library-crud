import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  // async test() {
  //   const data1 = await movieAPI.getMovies;
  //   const data = await data1.JSON();
  //   return data;
  // }

  async componentDidMount() {
    const fetchData = await movieAPI.getMovies();
    this.setState({ movies: fetchData});
  }

  render() {
    const { movies } = this.state;
    
    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
