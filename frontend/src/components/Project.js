import React, { Component } from 'react';
import './Project.css';
import Observer from '@researchgate/react-intersection-observer';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
    this.setButtonHovered = this.setButtonHovered.bind(this);
  }

  setButtonHovered(value) {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  handleIntersection(event) {
      this.setState({
        visibility: event.isIntersecting ? 'inview' : ''
      });
  }

  render() {
    const hovered = this.state.hovered ? "hovered" : "";
    console.log(hovered);
    return (
      <Observer onChange={this.handleIntersection.bind(this)}>
          <div className={`projects ${this.state.visibility}`}
            onMouseEnter={this.setButtonHovered}
            onMouseLeave={this.setButtonHovered}>
            <div className="project">
                {
                  (this.props.index % 2) > 0 ?
                  <div className="projectBox">
                    <div className="projectInfo">
                      <p>{this.props.project.description}</p>
                      <img className="small-icon eye" src={require('../static/eye-2-512.gif')} alt="View Demo"/>
                      <img className="small-icon" src={require('../static/70d584e3-4eb3-4ed1-8df8-944e9b123089.svg')} alt="View on GitHub"/>
                    </div>
                    <img className="projectPic" src={this.props.project.pic} alt="project pic" />
                  </div> :
                  <div className="projectBox">
                    <img className="projectPic" src={this.props.project.pic} alt="project pic" />
                    <div className="projectInfo">
                      <p>{this.props.project.description}</p>
                      <img className="small-icon eye" src={require('../static/eye-2-512.gif')} alt="View Demo"/>
                      <img className="small-icon" src={require('../static/70d584e3-4eb3-4ed1-8df8-944e9b123089.svg')} alt="View on GitHub"/>
                    </div>
                  </div>
                }
            </div>
            <div
              className={`technologies ${hovered}`}
              style={this.props.index % 2 > 0 ? {"textAlign": "left"} : {"textAlign": "right"}}>
              - - - - - - - - - - - - - - {this.props.project.technologies}
              </div>
          </div>
      </Observer>
    );
  }
}

export default Project;
