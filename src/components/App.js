import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

import Header from './Header';
import SearchBox from './SearchBox';
import Articles from './Articles';
import RandButton from './RandButton';
import {debounceEventHandler} from '../helpers.js';

class App extends Component {
  constructor() {
    super();

    this.getResults = this.getResults.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
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

  toggleInput() {
    this.setState({inputShown: !this.state.inputShown});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <SearchBox
            toggleInput={this.toggleInput}
            inputShown={this.state.inputShown}
            getResults={debounceEventHandler(this.getResults, 500)} />
        </div>
        <div className="row">
            <RandButton />
        </div>
        <div className="row">
          <Articles articles={this.state.articles} />
        </div>
      </div>
    );
  }
}

export default App;
