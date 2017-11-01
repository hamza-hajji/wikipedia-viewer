import React from 'react';

export default ({
  onChange,
  search
}) => {
  return (
    <input type="text" placeholder="Search" value={search} onChange={onChange} />
  );
};
