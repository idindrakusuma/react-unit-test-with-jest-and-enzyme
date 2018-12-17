import React from 'react'
import { array } from 'prop-types';

import ListItem from './ListItem';

function List(props) {
  const { items } = props;

  if (!items.length) {
    return <span className="empty-message">No item found in list</span>
  }

  return (
    <ul className="list-items">
      {items.map(item => <ListItem key={item} item={item} />)}
    </ul>
  );
}

List.propTypes = {
  items: array,
};

List.defaultProps = {
  items: [],
};

export default List;