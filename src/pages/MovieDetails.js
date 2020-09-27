import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.getMovieFunction();
  }

  async getMovieFunction() {
    const id = this.props.match.params.id;
    const fetchData = await movieAPI.getMovie(id);
    this.setState({ movie: fetchData });
  }

  async deleteMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (movie.length === 0) return <Loading />;

    return (
      <div className="content">
        <div className="movie-card card-movie-details">
          <h3 className="title-card">{title} - {subtitle}</h3>
          <img alt="Movie Cover" src={`../${imagePath}`} width="40%" />
          <div className="card-description">
            <p className="storyline">{storyline}</p>
            <p className="genre-rating">{`Genre: ${genre} | Rating: ${rating}`}</p>
            <div className="buttons">
              <Link to={`/movies/${id}/edit`}>
                <button className="bt">edit</button>
              </Link>
              <Link to="/">
                <button className="bt">home</button>
              </Link>
              <Link to="/">
                <button className="bt bt-delete"
                  type="button"
                  onClick={() => this.deleteMovie(id)}
                >
                  delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
