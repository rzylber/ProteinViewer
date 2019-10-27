import React, { Component } from 'react';
import './App.css';

import classnames from 'classnames';

import { Intent, Navbar, Alignment, ProgressBar, Tag, Card, Elevation, Switch } from "@blueprintjs/core";

import { addUrlProps, UrlQueryParamTypes, replaceInUrlQuery, configureUrlQuery } from 'react-url-query';

// import history from './history';

import ThreeWorkspace from './ThreeWorkspace';

import { dataBase } from './models';

// configureUrlQuery({ history });

const urlPropsQueryConfig = {
  grupo: { type: UrlQueryParamTypes.string },
  option: { type: UrlQueryParamTypes.string },
};

class App extends Component {
  state = {
    loadProgress: 0,
    rendering: false,
    animating: false,
  };

  componentDidMount() {
    // force an update if the URL changes
    // history.listen(() => this.forceUpdate());
  }

  render() {

    const { loadProgress, rendering, animating } = this.state;

    let { option } = this.state;
    let { grupo } = this.props;

    // o que não vier preenchido recebe a primeira opção
    if(!grupo) grupo = Object.keys(dataBase)[0];
    if(!option) option = Object.keys(dataBase[grupo].options)[0];

    // console.log(this.props, 'QUERY: grupo/option', grupo, '/', option)

    const { options: optionsObj, legend: legendItems, description } = dataBase[grupo];

    const options = Object.keys(optionsObj).map( key => optionsObj[key] );

    return (
      <>
        <Navbar className="bp3-dark">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <span className="app_title">
                Protein Viewer</span>&nbsp;
                by <a href="mailto:lumazylber@gmail.com">Luciane Martins Zylberged</a> and <a target="_blank" rel="noopener noreferrer" href="http://www.ludolab.com.br">LudoLab.com.br</a>
            </Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            {rendering && <Tag intent={Intent.WARNING}>Renderizando...</Tag>}
          </Navbar.Group>
        </Navbar>

        {loadProgress !== 100 && !rendering && <ProgressBar value={loadProgress} />}

        <div className='container'>
          <div className='protein'>
            <ThreeWorkspace animate={animating} grupo={grupo} option={option} onProgress={this.handleProgress} onRendering={this.handleRendering} />
          </div>
          <div className='side'>

            <Card interactive={false} elevation={Elevation.FOUR}>
              <div className="title">Descrição</div>
              <p className="instrucoes">
                {description}
              </p>
            </Card>

            <Card interactive={false} elevation={Elevation.FOUR}>
              <div className="title">Selecione o modelo</div>
              <div className="bp3-select bp3-fill">
                <select defaultValue={option} onChange={this.handleModelChange}>
                  {options.map( ({ value, title }) => <option value={value}>{title}</option>)}
                </select>
              </div>
              <div className="animate"><Switch checked={animating} label="Animar modelo" onChange={this.handleAnimating} /></div>
            </Card>

            <Card interactive={false} elevation={Elevation.FOUR}>
              <div className="title">Legenda</div>

              <div>

                {legendItems.map(({color: backgroundColor, text, type}) => <div className="item_legenda clearfix">
                  <div className={classnames('simbolo_legenda', {'circle': type === 'circle'})} style={{ backgroundColor }}></div>
                  <div className="texto_legenda">{text}</div>
                </div>)}
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

  handleModelChange = (e) => {
    // console.log('option', e.target.value)
    this.setState({option: e.target.value});
  }

  handleAnimating = () => {
    this.setState({ animating: !this.state.animating });
  }
}

export default addUrlProps({ urlPropsQueryConfig })(App);
