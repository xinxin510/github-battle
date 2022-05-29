import React from 'react';
import {battle} from '../utils/api.js';

export default class Result extends React.Component {
  componentDidMount() {
    const {playerOne, playerTwo} = this.props;
    battle([playerOne, playerTwo])
    .then(players => console.log(players))
  }
  render() {

    return (
      <div>
        hello
      </div>
    )
  }
}