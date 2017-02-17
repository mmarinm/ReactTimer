import React from 'react';

import {Clock} from 'Clock';
import {CountdownForm} from "CountdownForm";
import {Controls} from "Controls";

export class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.countdownStatus !== this.state.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.timerID = setInterval(
            this.tick,
          1000
          );
         break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timerID)
          this.timerID = undefined;
          break;

      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
    this.timerID = undefined;
  }


  handleSetCountdown =  (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });

  }

  tick = () => {
    const newMoment = this.state.count - 1;
    const newState = 'started'
    if(newMoment === 0) {
      newState = 'stopped'
    }
    this.setState(() => {
        return {
          count: newMoment >= 0 ? newMoment : 0,
          countdownStatus: newState
        }
    })
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      countdownStatus: newStatus,
    })
  }

  render() {
    const renderControlArea = () => {
      if(this.state.countdownStatus !== 'stopped') {
        return <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    }
    const count = this.state.count
    return (
      <div>
        <h1  className='page-title'>Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
}
