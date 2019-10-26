import React, { Component } from 'react';
import './App.css';

import { Intent, Navbar, Alignment, ProgressBar, Tag, Card, Elevation, Switch } from "@blueprintjs/core";

import ThreeWorkspace from './ThreeWorkspace';

class App extends Component {
  state = {
    loadProgress: 0,
    rendering: false,
    animating: false,
  };

  render() {

    const { loadProgress, rendering, animating } = this.state;

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

        <div className='container'>
          <div className='protein'>
            <ThreeWorkspace onProgress={this.handleProgress} onRendering={this.handleRendering} />
          </div>
          <div className='side'>

            <Card interactive={false} elevation={Elevation.FOUR}>
              <h5>Instruções</h5>
              <p className="instrucoes">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium blandit dui eu efficitur. Aliquam sit amet urna et nisl blandit tincidunt. Ut odio eros, molestie ac hendrerit ut, rhoncus sed lacus.
              </p>
            </Card>

            <Card interactive={false} elevation={Elevation.FOUR}>
              <h5>Selecione</h5>
              <div className="bp3-select bp3-fill">
                  <select defaultValue={"0"}>
                    <option value="0">Domain Native</option>
                    <option value="1">Two</option>
                    <option value="2">Three</option>
                    <option value="3">Four</option>
                  </select>
              </div>
              <div className="animate"><Switch checked={animating} label="Animar modelo" onChange={this.handleAnimating} /></div>
            </Card>

          <Card interactive={false} elevation={Elevation.FOUR}>
            <h5>Legenda</h5>

            <div>
              <div className="item_legenda clearfix">
                <div className="simbolo_legenda" style={{ backgroundColor: '#fe7575' }}></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda" style={{ backgroundColor: '#65f3f3' }}></div>
                <div className="texto_legenda">Monomer II</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda" style={{ backgroundColor: '#00ff02' }}></div>
                <div className="texto_legenda">N-terminal alpha-helix</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda" style={{ backgroundColor: '#ff2c7e' }}></div>
                <div className="texto_legenda">Active site vinicity</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda" style={{ backgroundColor: '#b64494' }}></div>
                <div className="texto_legenda">Calcium binding domain</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda" style={{ backgroundColor: '#0905c5' }}></div>
                <div className="texto_legenda">Crown Domain</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda" style={{ backgroundColor: '#023462' }}></div>
                <div className="texto_legenda">Collagem binding domain</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda circle" style={{ backgroundColor: '#f60204' }}></div>
                <div className="texto_legenda">Mg ion</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda circle" style={{ backgroundColor: '#fffe00' }}></div>
                <div className="texto_legenda">Zn ion</div>
              </div>
            </div>
          </Card>

        </div>
      </div>


      </>
    );
  }

  handleRendering = (rendering) => {
    this.setState({ rendering });
  }

  handleProgress = (loadProgress) => {
    this.setState({ loadProgress });
  }

  handleAnimating = () => {
    this.setState({ animating: !this.state.animating });
  }
}

export default App;
