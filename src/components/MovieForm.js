import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title">Title</label>
        <input
          placeholder="Insert the title"
          id="movie_title"
          type="text"
          className="validate"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle">Subtitle</label>
        <input
          placeholder="Insert the subtitle"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image">Poster</label>
        <input
          placeholder="Insert the image path"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
      <label htmlFor="movie_storyline">Story Line</label>
      <textarea
        id="movie_storyline"
        value={storyline}
        onChange={(event) => this.updateMovie('storyline', event.target.value)}
      />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div>
        <label htmlFor="movie_genre">Genre</label>
        <select
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="thriller">Thriller</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    
    return (
      <div>
        <label htmlFor="movie_rating">Rating</label>
        <input
          placeholder="Rate the movie"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          className="bt center green"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="form-content">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.defaultProps = { movie: PropTypes.objectOf() };

MovieForm.propTypes = {
  movie: PropTypes.shape({
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    storyLine: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
