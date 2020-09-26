import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src="/images/loader.gif" width="300px" alt="Loading"/>
      </div>
    );
  }
}

export default Loading;
