import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle } } = this.props;
    const pathMovieDetails = `/movies/${id}`;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <h5>{storyline}</h5>
        <h1>{id}</h1>
        <Link to={pathMovieDetails} >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
