import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="title-movie-card">Movie Card Library CRUD</h1>
          <Link to="/movies/new" className="link">
            <button type="button" className="bt-add-new">
                <img src="/images/plus-icon.png" alt="" />
                <span className="text-bt">Add new card</span>
            </button>
          </Link>
      </header>
    );

  }
};

export default Header; 