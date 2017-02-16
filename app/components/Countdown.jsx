import React from 'react';

import {Clock} from 'Clock';
import {CountdownForm} from "CountdownForm";
import {Controls} from "Controls";

export class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'paused'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.countdownStatus !== this.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.timerID = setInterval(
            () => this.tick(),
          1000
          );
          break;
        case 'paused':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;

      }
    }
  }


  handleSetCountdown (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });

  }

  tick() {
    let newMoment = this.state.count - 1;
    this.setState({
      count: newMoment >= 0 ? newMoment : 0,
    })
  }

  render() {
    clearInterval(this.timerID);
    return (
      <div>
        <Clock totalSeconds={this.state.count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
        <Controls countdownStatus={this.state.countdownStatus}/>
      </div>
    );
  }
}
