import React from 'react';

const Controls = (props) => {
  const  renderStartStopButton = () => {
    if(props.countdownStatus === 'started') {
      return <button className="button secondary" onClick={() => props.onStatusChange('paused')}>Pause</button>
    }
    else if (props.countdownStatus === 'paused'){
      return <button className="button primary" onClick={() => props.onStatusChange('started')}>Start</button>
    }
  }

  return (
    <div className="controls">
      {renderStartStopButton()}
      <button className="button alert hollow" onClick={() => props.onStatusChange('stopped')}>Clear</button>
    </div>
  )
}

export {Controls}


// export class Controls extends React.Component {
//   onStatusChange (newStatus) {
//     return () => this.props.onStatusChange(newStatus)
//   }
//
//   render() {
//     const renderStartStopButton = () => {
//       if (this.props.countdownStatus === 'started') {
//         return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
//       } else if (this.props.countdownStatus === 'paused') {
//         return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
//       }
//     };
//
//     return (
//       <div className="controls">
//         {/* {renderStartStopButton()} */}
//         <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
//       </div>
//     )
//   }
// }
