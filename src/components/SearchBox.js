import React from 'react';

export default ({
  getResults
}) => {
  return (
    <div>
    <input
      placeholder="Search"
      onChange={getResults} />
    </div>
  );
};
