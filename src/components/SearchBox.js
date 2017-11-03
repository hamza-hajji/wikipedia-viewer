import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

export default ({
  getResults,
  inputShown,
  iconShown,
  showInput,
  showIcon
}) => {
  let search;

  return (
    <div className="col-md-4 col-10 mx-auto">
      <div
        style={{display: iconShown ? 'block' : 'none'}}
        className="searchIcon text-center">
        <i onClick={showInput} className="fa fa-2x fa-search"></i>
      </div>
      <InputGroup size="lg">
        <Input
          type="text"
          ref={(node) => search = node}
          style={{display: inputShown ? 'block' : 'none'}}
          onBlur={showIcon}
          className="search-input"
          placeholder="Search"
          onChange={getResults} />
      </InputGroup>
    </div>
  );
};
