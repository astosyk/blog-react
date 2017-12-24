import React from 'react';
import radium from 'radium';
import marked from 'marked';
import renderer from '../../../js/marked/renderer';

import Title from '../../../js/components/Partials/Simple/Title';
import Summary from '../../../js/components/Partials/Simple/Summary';

import {
  projectWrapper as wrapperStyle,
  projectWrapperLink as linkStyle,
  imgWrapper as imgWrapperStyle,
  img as imgStyle,
} from '../../../js/styles/projects';

class Project extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={wrapperStyle()}>
        <a target="_blank" href={this.props.project.url} style={linkStyle()}>
          <Title text={this.props.project.title}/>
          <div style={imgWrapperStyle()}>
            <img style={imgStyle()} src={this.props.project.img_src}/>
          </div>
          <Summary text={this.props.project.description}/>
        </a>
      </div>
    );
  }
}

export default radium(Project);
