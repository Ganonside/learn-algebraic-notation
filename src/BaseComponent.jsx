import React, { Component } from 'react';

export default class BaseComponent extends Component {
  constructor() {
    super();
  }

  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }
}
