var React = require('react');
var OfferTableRow = require('./OfferTableRow');

var OfferTable = React.createClass({
	getInitialState: function(){
		return {
			title: this.props.title,
			data: [{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			},
			{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			},
			{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			},
			{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			},
			{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			},
			{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			},
			{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			},
			{
				offer: "Column 1",
				url: "Column 2",
				actions: "Column 3"
			}]
		}
	},
	handleClick: function(event){
		event.preventDefault();
		this.setState({title: "Aldo"});
	},
	render: function(){
		return (
			<div className="table-responsive">
          		<table className="table table-striped">
					<tbody>
						{
							this.state.data.map(function(item, key){
								return <OfferTableRow key={key} offer={item.offer} url={item.url} actions={item.actions} />
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = OfferTable;
