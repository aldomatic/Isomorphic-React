var React = require('react');

var OfferTableRow = React.createClass({
	handleClick: function(event){
		event.preventDefault();
		console.log(event.target.getAttribute("data-offer"));
	},
	render: function(){
		return <tr><td>{this.props.offer}</td><td>{this.props.url}</td>
		<td>
			<button type="button" className="delete-action btn btn-danger btn-xs" data-offer={this.props.offer} onClick={this.handleClick}>Delete</button>
			<button type="button" className="edit-action btn btn-info btn-xs" data-offer={this.props.offer} onClick={this.handleClick}>Edit</button>
		</td>
		</tr>;
	}
});
module.exports = OfferTableRow;
