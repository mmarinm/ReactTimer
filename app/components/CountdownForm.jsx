import React from 'react';

export class CountdownForm extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();

    const strSeconds = this.refs.seconds.value;

    if(strSeconds.length > 0 && strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}
