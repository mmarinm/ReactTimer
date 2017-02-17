import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import { Controls } from "Controls"

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist()
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      var controls = TestUtils.renderIntoDocument(Controls({countdownStatus:'started'}));
      var $el = $(ReactDOM.findDOMNode(controls));
      var $PauseBtn = $el.find('button:contains(Pause)');

      expect($PauseBtn.length).toBe(1);
    });

    it('should render start button when paused', () => {
      var controls = TestUtils.renderIntoDocument(Controls({countdownStatus:'paused'}));
      var $el = $(ReactDOM.findDOMNode(controls));
      var $StartBtn = $el.find('button:contains(Start)');

      expect($StartBtn.length).toBe(1);
    });

  });

})
