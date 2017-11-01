import React from 'react';

export default ({
  getResults
}) => {
  return (
    <input type="text" placeholder="Search" onChange={getResults} />
  );
};
