import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default ({
  articles
}) => {
  return (
    <div className="col-md-8 col-10 mx-auto">
      <ListGroup className="results">
        {articles.map((article, idx) => {
          return (
            <ListGroupItem>
              <ListGroupItemHeading>
                <a target="_blank" href={`https://wikipedia.org/wiki/${article.title}`}>
                  {article.title}
                </a>
                </ListGroupItemHeading>
                <ListGroupItemText dangerouslySetInnerHTML={{__html: article.snippet}}>
                </ListGroupItemText>
              </ListGroupItem>
            );
          })}
        </ListGroup>
    </div>
  );
};
