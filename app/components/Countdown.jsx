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
          console.log('stopped fireeed');
          this.setState({count: 0});
        case 'paused':
          console.log('paused fireeed');
          clearInterval(this.timerID)
          this.timerID = undefined;
          break;

      }
    }
  }


  handleSetCountdown =  (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });

  }

  tick = () => {
    console.log('tick fireeeed');
    let newMoment = this.state.count - 1;
    this.setState(() => {
      if (newMoment >= 0) {
        return {count: newMoment}
      } else {
        return {
          count: 0,
          countdownStatus:'stopped'
        }
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
        <Clock totalSeconds={count}/>
        {renderControlArea()}
        {/* <CountdownForm onSetCountdown={this.handleSetCountdown}/> */}
      </div>
    );
  }
}
