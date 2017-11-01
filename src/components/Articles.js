import React from 'react';

export default ({
  articles
}) => {
  return (
    <ul>
      {articles.map((article) => {
        return <li>{article.title}</li>;
      })}
    </ul>
  );
};
