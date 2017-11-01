import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

export default ({
  getResults
}) => {
  return (
    <div className="row">
      <InputGroup size="lg">
        <Input
          className="search-input"
          placeholder="Search"
          onChange={getResults} />
      </InputGroup>
    </div>
  );
};
