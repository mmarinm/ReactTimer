import React from 'react';

import {Clock} from 'Clock';
import {Controls} from "Controls";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.timerStatus !== this.state.timerStatus) {
      switch (this.state.timerStatus) {
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

  componentWillUnmount() {
    clearInterval(this.timerID)
    this.timerID = undefined;
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      timerStatus: newStatus,
    })
  }

  tick = () => {
    console.log('tick fireeeed');
    const newMoment = this.state.count + 1;
    this.setState(() => {
        return {
          count: newMoment >= 0 ? newMoment : 0
        }
    })
  }



  render() {
    const count =  this.state.count
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={this.state.timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
}
