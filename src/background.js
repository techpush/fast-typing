/**
 * FastTyping
 * @ndaidong
 */

/* global chrome */
/* eslint no-console: 0*/

chrome.app.runtime.onLaunched.addListener(function _onLaunched() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 600,
      'height': 400
    }
  });
});
