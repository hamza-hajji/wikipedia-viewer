import React from 'react';

export default ({
  articles
}) => {
  return (
    <ul>
      {articles.map((article, idx) => {
        return <li key={idx}>{article.title}</li>;
      })}
    </ul>
  );
};
