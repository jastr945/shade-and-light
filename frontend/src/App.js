import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <div className="header">
            <h3>Polina Jastrzebska</h3>
            <p>Full-Stack Software Developer</p>
            <div className="social">
              icon1
              icon2
              icon3
            </div>
          </div>
          <div className="projects">
            <div className="project">
              <img className="projectPic"
              src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
              <p>A short description of a project featuring some of the technologies and tools...</p>
              eye-icon
              git-icon-grey
            </div>
          </div>
          <div className="projects">
            <div className="project">
              <img className="projectPic"
              src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
              <p>A short description of a project featuring some of the technologies and tools...</p>
              eye-icon
              git-icon-grey
            </div>
          </div>
          <div className="projects">
            <div className="project">
              <img className="projectPic"
              src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
              <p>A short description of a project featuring some of the technologies and tools...</p>
              eye-icon
              git-icon-grey
            </div>
          </div>
          <footer>
            <small>&copy;
              {(new Date().getFullYear())}
              &nbsp;Polina Jastrzebska</small>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
