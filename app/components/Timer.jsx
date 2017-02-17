import React from 'react';

import {Clock} from 'Clock';
import {CountdownForm} from "CountdownForm";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }
  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds
    })
  }

  render() {
    const count =  this.state.count
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
}
