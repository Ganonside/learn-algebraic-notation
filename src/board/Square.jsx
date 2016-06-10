import React, { PropTypes } from 'react';
import BaseComponent from '../BaseComponent.jsx';
import { King } from '../pieces/pieces.js';

const { number } = PropTypes;

export default class Square extends BaseComponent {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div class="square">
        <King isWhite={true} />
      </div>
    )
  }
}

Square.propTypes = {
  rank: number.isRequired,
  file: number.isRequired,
};
