import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

export default ({
  getResults,
  inputShown,
  showInput
}) => {
  return (
    <div
      className="col-8 mx-auto">
      <div className="searchIcon text-center">
        <i onClick={showInput} className="fa fa-2x fa-search"></i>
      </div>
      <InputGroup
        size="lg">
        <Input
          style={{display: inputShown ? 'block' : 'none'}}
          className="search-input"
          placeholder="Search"
          onChange={getResults} />
      </InputGroup>
    </div>
  );
};
