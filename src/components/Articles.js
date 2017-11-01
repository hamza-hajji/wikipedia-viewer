import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default ({
  articles
}) => {
  return (
    <ListGroup className="results">
      {articles.map((article, idx) => {
        return (
          <ListGroupItem>
            <ListGroupItemHeading>
              {article.title}&nbsp;
              <a target="_blank" href={`https://wikipedia.org/wiki/${article.title}`}>
                <i className="text-dark fa fa-external-link"></i></a>
              </ListGroupItemHeading>
            <ListGroupItemText dangerouslySetInnerHTML={{__html: article.snippet}}>
            </ListGroupItemText>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};
