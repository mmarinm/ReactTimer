import React from 'react';

import {Clock} from 'Clock';

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
      <Clock totalSeconds={this.state.count}/>
    );
  }
}
