import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

class App extends Component {
  setButtonHovered(value) {
    console.log(this);
  }
  render() {
    return (
      <ParallaxProvider>
      <div className="App">
        <div className="mainContainer">
          <div className="header">
            <h3>Polina Jastrzebska</h3>
            <p>{'{'}Full-Stack Software Developer{'}'}</p>
            <div className="social">
              <img className="icon" src={require('./static/linkedin-icon.png')} width={50} alt="LinkedIn"/>
              <img className="icon" src={require('./static/iconfinder_GITHUB_1217178.png')} width={50} alt="LinkedIn"/>
              <img className="icon" src={require('./static/gmail.png')} width={50} alt="LinkedIn"/>
            </div>
          </div>
          <Parallax className="custom-class" x={[-25, 0]} tagOuter="figure">
            <div className="projects"
            onMouseEnter={this.setButtonHovered(true)}
            onMouseLeave={this.setButtonHovered(false)}>
              <div className="project">
                <div className="projectBox">
                  <img className="projectPic"
                  src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
                  <div className="projectInfo">
                    <p>A short description of a project featuring some of the technologies and tools...</p>
                    <img className="small-icon eye" src={require('./static/eye-2-512.gif')} alt="View Demo"/>
                    <img className="small-icon" src={require('./static/70d584e3-4eb3-4ed1-8df8-944e9b123089.svg')} alt="View on GitHub"/>
                  </div>
                </div>
              </div>
              <div className="technologies">- - - - - - - - - - - - - - Python, Django, Docker, React</div>
            </div>
          </Parallax>
          <Parallax className="custom-class" x={[25, 0]} tagOuter="figure">
            <div className="projects">
              <div className="project">
                <div className="projectBox">
                  <div className="projectInfo">
                    <p>A short description of a project featuring some of the technologies and tools...</p>
                    eye-icon
                    git-icon-grey
                  </div>
                  <img className="projectPic"
                  src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax className="custom-class" x={[-25, 0]} tagOuter="figure">
            <div className="projects">
              <div className="project">
                <div className="projectBox">
                  <img className="projectPic"
                  src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
                  <div className="projectInfo">
                    <p>A short description of a project featuring some of the technologies and tools...</p>
                    eye-icon
                    git-icon-grey
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax className="custom-class" x={[25, 0]} tagOuter="figure">
            <div className="projects">
              <div className="project">
                <div className="projectBox">
                  <div className="projectInfo">
                    <p>A short description of a project featuring some of the technologies and tools...</p>
                    eye-icon
                    git-icon-grey
                  </div>
                  <img className="projectPic"
                  src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax className="custom-class" x={[-25, 0]} tagOuter="figure">
            <div className="projects">
              <div className="project">
                <div className="projectBox">
                  <img className="projectPic"
                  src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
                  <div className="projectInfo">
                    <p>A short description of a project featuring some of the technologies and tools...</p>
                    eye-icon
                    git-icon-grey
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax className="custom-class" x={[10, 0]} tagOuter="figure">
            <div className="projects">
              <div className="project">
                <div className="projectBox">
                  <div className="projectInfo">
                    <p>A short description of a project featuring some of the technologies and tools...</p>
                    eye-icon
                    git-icon-grey
                  </div>
                  <img className="projectPic"
                  src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax className="custom-class" x={[-10, 0]} tagOuter="figure">
            <div className="projects">
              <div className="project">
                <div className="projectBox">
                  <img className="projectPic"
                  src="https://pbs.twimg.com/profile_images/867761095909543937/hL_NQ7AZ_400x400.jpg" alt="project pic" />
                  <div className="projectInfo">
                    <p>A short description of a project featuring some of the technologies and tools...</p>
                    eye-icon
                    git-icon-grey
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
          <footer>
            <small>&copy;
              {(new Date().getFullYear())}
              &nbsp;Polina Jastrzebska</small>
          </footer>
        </div>
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
