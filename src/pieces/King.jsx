import React, { PropTypes } from 'react';
import Piece from './Piece.jsx';

// import Sprites from '../../sprites/sprites.js';
import WhiteKingSprite from '../../sprites/whiteKing.svg';
import BlackKingSprite from '../../sprites/blackKing.svg';

const { bool } = PropTypes;

export default class King extends Piece {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div classname="piece king">
        {this.props.isWhite ? <WhiteKingSprite /> : <BlackKingSprite />}
      </div>
    )
  }
}
