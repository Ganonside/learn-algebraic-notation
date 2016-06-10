import React, { PropTypes } from 'react';
import BaseComponent from '../BaseComponent.jsx';
import Square from './Square.jsx';

const { node, number } = PropTypes;

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export default class Rank extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    let squares = [];

    for (let i = 1; i <= 8; ++i) {
      squares.push(
        <Square key={`${files[i - 1]}{this.props.ranks}`} classname={`${files[i - 1]}{this.props.ranks}`} rank={this.props.rank} file={i}>

        </Square>
      );
    }

    return (
      <div classname="rank">
        {squares.map((square) => square)}
      </div>
    );
  }
}

Rank.propTypes = {
  children: node,
  rank: number.isRequired,
};
