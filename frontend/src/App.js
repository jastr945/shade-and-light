import React, { Component } from 'react';
import './App.css';
import Project from './components/Project.js';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import {projects} from './content.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects,
      visibility: null
    }
  }

  setButtonHovered(value) {
    // console.log(this);
  }

  handleIntersection(event) {
      this.setState({
        visibility: event.isIntersecting ? 'inview' : ''
      });
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
              <a href="https://www.linkedin.com/in/polinajastrzebska/" rel="noopener noreferrer" target="_blank">
                <img className="icon" src={require('./static/linkedin-icon.png')} width={50} alt="LinkedIn"/>
              </a>
              <a href="https://github.com/jastr945" rel="noopener noreferrer" target="_blank">
                <img className="icon" src={require('./static/iconfinder_GITHUB_1217178.png')} width={50} alt="GitHub"/>
              </a>
              <img className="icon" src={require('./static/gmail.png')} width={50} alt="E-mail"/>
            </div>
          </div>
          {
            this.state.projects.map((project, i) => {
              let coordinates;
              if ((i % 2) > 0) {
                coordinates = [25, 0];
              } else {
                coordinates = [-25, 0];
              }
              return (
                <Parallax key={i} className="custom-class" x={coordinates} tagOuter="figure">
                  <Project project={project} index={i} />
                </Parallax>
              )
            })
          }
          <p className="stayTuned">More is always coming...</p>
          <p>Stay tuned!</p>
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
