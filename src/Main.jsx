import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import Board from './board/Board.jsx';

export default class Main extends BaseComponent {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="main">
        <h1>Learn Algebraic Notation</h1>
        <Board />
      </div>
    )
  }
}
