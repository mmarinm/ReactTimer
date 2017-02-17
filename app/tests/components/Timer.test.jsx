import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import { Timer } from "Timer";

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start the timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);

    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    }, 1001)
  });

  it('should pause the timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({
      count: 3,
      timerStatus:'started'
    })
    timer.handleStatusChange('paused');
    expect(timer.state.count).toBe(3);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(3);
      done();
    }, 1001)
  });

  it('should clear count on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({
      count: 3,
      timerStatus:'started'
    })
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001)
  });

});
