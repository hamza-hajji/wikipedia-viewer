import React, { Component } from 'react';
import axios from 'axios';

import SearchBox from './SearchBox';
import Articles from './Articles';

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    this.getResults();
  }

  onChange() {

  }

  getResults() {
    const URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=physics&origin=*';
    axios
      .get(URL)
      .then((res) => {
        this.setState({articles: res.data.query.search})
        console.log(res);
      });
  }

  render() {
    return (
      <div className="container">
        <SearchBox search="" onChange={this.onChange} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
