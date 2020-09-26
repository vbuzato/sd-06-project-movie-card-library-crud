import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline } } = this.props;
    const pathMovieDetails = `/movies/${id}`;
    return (
      <div className="movie-card">
        <h3 className="title-card">{title}</h3>
        <Link to={pathMovieDetails} className="link right-bt">
          <button type="button" className="bt-add-new">
              <img src="/images/plus-icon.png" width="16px" />
              <span className="text-bt">ver detalhes</span>
          </button>
        </Link>
        <h5>{storyline}</h5>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyLine: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
