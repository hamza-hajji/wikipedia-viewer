import React, { Component } from 'react';

import SearchBox from './SearchBox';
import Articles from './Articles';

class App extends Component {
  constructor() {
    super();
  }

  onChange() {

  }

  getResults() {
    return [];
  }

  render() {
    return (
      <div className="container">
        <SearchBox search="" onChange={this.onChange} />
        <Articles articles={this.getResults()} />
      </div>
    );
  }
}

export default App;
