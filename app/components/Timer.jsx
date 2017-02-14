import React from 'react';

import {Clock} from 'Clock';
import {CountdownForm} from "CountdownForm";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
   clearInterval(this.timerID);
 }

  tick() {
    let newMoment = this.state.count +=1;
    this.setState({
      count: newMoment
    })
  }


  render() {
    return (
      <div>
        <Clock totalSeconds={this.state.count}/>
        <CountdownForm />
      </div>
    );
  }
}
