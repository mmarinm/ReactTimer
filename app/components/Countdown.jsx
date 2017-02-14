import React from 'react';

import {Clock} from 'Clock';

export class Countdown extends React.Component {
  render() {
    return (
      <Clock totalSeconds={30}/>
    );
  }
}
