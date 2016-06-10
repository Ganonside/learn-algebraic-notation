import React from 'react';
import BaseComponent from '../BaseComponent.jsx';
import Square from './Square.jsx';

export default class Board extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div classname="board">
        <Square rank={1} file={1} />
      </div>
    );
  }
}
