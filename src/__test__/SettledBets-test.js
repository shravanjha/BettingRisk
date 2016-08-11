var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); 
var expect = require('expect');
var Header = require('../js/components/Header').default; 

describe('SettledBets', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Header />);
    expect(root).toExist();
  });
});