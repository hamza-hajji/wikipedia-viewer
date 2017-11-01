import debounce from 'lodash/debounce';

const debounceEventHandler = (...args) => {
  const debounced = debounce(...args);
  return (e) => {
    e.persist();
    return debounced(e);
  }
}

export {debounceEventHandler};
