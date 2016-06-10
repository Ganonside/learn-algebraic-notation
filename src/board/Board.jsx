import React from 'react';
import BaseComponent from '../BaseComponent.jsx';
import Rank from './Rank.jsx';

export default class Board extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    let ranks = [];

    for (let rank = 1; rank <= 8; ++rank) {
      ranks.push(<Rank key={`rank${rank}`} rank={rank} />);
    }

    return (
      <div classname="board">
        {ranks.map((rank) => rank)}
      </div>
    );
  }
}
