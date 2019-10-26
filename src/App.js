import React, { Component } from 'react';
import './App.css';

import { Intent, Navbar, Alignment, ProgressBar, Tag } from "@blueprintjs/core";

import ThreeWorkspace from './ThreeWorkspace';

class App extends Component {
  state = {
    loadProgress: 0,
    rendering: false,
  };

  render() {

    const { loadProgress, rendering } = this.state;

    return (
      <>
        <Navbar className="bp3-dark">
          <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading><span className="app_title">Protein Viewer</span>&nbsp; by <a href="mailto:lumazylber@gmail.com">Luciane Martins</a></Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            {rendering && <Tag intent={Intent.WARNING}>Renderizando...</Tag>}
          </Navbar.Group>
        </Navbar>

        {loadProgress !== 100 && !rendering && <ProgressBar value={loadProgress} />}

        <ThreeWorkspace onProgress={this.handleProgress} onRendering={this.handleRendering} />
      </>
    );
  }

  handleRendering = (rendering) => {
    this.setState({rendering});
  }

  handleProgress = (loadProgress) => {
    this.setState({ loadProgress });
  }
}

export default App;
