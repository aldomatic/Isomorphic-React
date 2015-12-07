/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var OfferTable = require('./components/OfferTable');

ReactDOM.render(<OfferTable title = {window.INITIAL_PROPS['title']} />, document.getElementById('react-main-mount'));
