import React, { PropTypes } from 'react';
import BaseComponent from '../BaseComponent.jsx';

const { bool } = PropTypes;

export default class Piece extends BaseComponent {
  constructor(props) {
    super(props);
  }
}

Piece.propTypes = {
  isWhite: bool,
};

Piece.defaultProps = {
  isWhite: true,
};
