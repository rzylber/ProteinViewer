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
              <Switch checked={animating} label="Animar modelo" onChange={this.handleAnimating} />
            </Card>

            <Card interactive={false} elevation={Elevation.FOUR}>
              <h5>Selecione</h5>
              <div className="bp3-select bp3-fill">
                  <select defaultValue={"1"}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
              </div>
            </Card>

          <Card interactive={false} elevation={Elevation.FOUR}>
            <h5>Legenda</h5>

            <div>
              <div className="item_legenda clearfix">
                <div className="simbolo_legenda"></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda"></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda"></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda"></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda"></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda"></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda"></div>
                <div className="texto_legenda">Monomer I</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda circle" style={{ backgroundColor: '#000' }}></div>
                <div className="texto_legenda">Monomer II</div>
              </div>

              <div className="item_legenda clearfix">
                <div className="simbolo_legenda circle" style={{ backgroundColor: '#000' }}></div>
                <div className="texto_legenda">Monomer II</div>
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
