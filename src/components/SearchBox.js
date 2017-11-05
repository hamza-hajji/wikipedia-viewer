import React from 'react';
import {findDOMNode} from 'react-dom';
import { Input, InputGroup } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import {CSSTransitionGroup} from 'react-transition-group';

export default class SearchBox extends React.Component {
  componentDidUpdate() {
    findDOMNode(this.search).focus();
  }

  render() {
    const {
      getResults,
      inputShown,
      toggleInput,
    } = this.props;
    return (
      <div className="col-md-4 col-10 mx-auto">
        <div className="searchIcon text-center">
          <i onClick={toggleInput} className="fa fa-2x fa-search"></i>
        </div>

        <CSSTransitionGroup
          transitionName="input"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {
            inputShown ?
            (<InputGroup size="lg">
            <Input
              type="text"
              ref={(node) => {this.search = node}}
              className="search-input"
              placeholder="Search"
              onChange={getResults} />
            </InputGroup>) : null
          }
        </CSSTransitionGroup>
      </div>
    );
  }
}
