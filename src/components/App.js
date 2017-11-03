import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

import SearchBox from './SearchBox';
import Articles from './Articles';
import RandButton from './RandButton';
import {debounceEventHandler} from '../helpers.js';

class App extends Component {
  constructor() {
    super();

    this.getResults = this.getResults.bind(this);
    this.showInput = this.showInput.bind(this);
    this.state = {
      articles: [],
      inputShown: false
    };
  }

  getResults(e) {
    const val = e.target.value;
    const URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${val}&origin=*`;
    axios
      .get(URL)
      .then((res) => {
        if (typeof res.data.error !== 'undefined') {
          return this.setState({articles: []});
        }
        this.setState({articles: res.data.query.search});
        console.log(this.state.articles);
      });
  }

  showInput() {
    this.setState({inputShown: !this.state.inputShown});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <h1 className="text-center header">Wikipedia Viewer</h1><br /><br />
            <SearchBox
              showInput={this.showInput}
              inputShown={this.state.inputShown}
              getResults={debounceEventHandler(this.getResults, 1000)} />
          </div>
        </div>
        <div className="row rand-button">
          <div className="col-4 text-center mx-auto">
            <RandButton />
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto">
            <Articles articles={this.state.articles} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
