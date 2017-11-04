import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import {CSSTransitionGroup} from 'react-transition-group';

export default ({
  articles
}) => {
  const renderArticles = (article, idx) => {
    return (
      <ListGroupItem key={idx} style={{transitionDelay: `${idx * 50}ms`}}>
        <ListGroupItemHeading>
          <a target="_blank" href={`https://wikipedia.org/wiki/${article.title}`}>
            {article.title}
          </a>
        </ListGroupItemHeading>
        <ListGroupItemText dangerouslySetInnerHTML={{__html: article.snippet}}>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
  return (
    <div className="col-md-8 col-10 mx-auto">
      <ListGroup className="results">
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {articles.map(renderArticles)}
      </CSSTransitionGroup>
      </ListGroup>
    </div>
  );
};
