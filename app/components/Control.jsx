import React from 'react';

export class Controls extends React.Component {
  render() {
    const renderStartStopButton = () => {
      if (this.props.countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (this.props.countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
}
