import React, { Component } from 'react';
import axios from 'axios';

import SearchBox from './SearchBox';
import Articles from './Articles';

class App extends Component {
  constructor() {
    super();

    this.getResults = this.getResults.bind(this);
    this.state = {
      articles: []
    };
  }

  getResults(e) {
    const URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${e.target.value}&origin=*`;
    axios
      .get(URL)
      .then((res) => {
        if (typeof res.data.error !== 'undefined') {
          return this.setState({articles: []});
        }
        this.setState({articles: res.data.query.search});
      });
  }

  render() {
    return (
      <div className="container">
        <SearchBox getResults={this.getResults} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
