import React from 'react';
import { string } from 'prop-types';

function ListItem(props) {
  const { item } = props;
  return <li className="item">{item}</li>;
}

ListItem.propTypes = {
  item: string,
};

ListItem.defaultProps = {
  item: '',
};

export default ListItem;
