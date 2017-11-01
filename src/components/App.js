import React, { Component } from 'react';
import axios from 'axios';

import SearchBox from './SearchBox';
import Articles from './Articles';
import {debounceEventHandler} from '../helpers.js';

class App extends Component {
  constructor() {
    super();

    this.getResults = this.getResults.bind(this);
    this.state = {
      articles: []
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

  render() {
    return (
      <div className="container">
        <SearchBox getResults={debounceEventHandler(this.getResults, 1000)} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
