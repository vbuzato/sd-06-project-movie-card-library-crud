import React from 'react';
import '../App.css';

const Navbar = () => {
  const urlGitHub = 'https://github.com/vbuzato/sd-06-project-movie-card-library-crud' 
  return (
    <div className="bg-navigation">
      <nav className="nav-wrap">
        <div className="github-see-code">
          <div className="bg-see-github">
            <a href={urlGitHub} className="link-nav" target="_blank">
              <img src="/images/github-logo.png" />
              <span className="see-code">See the code on github</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 