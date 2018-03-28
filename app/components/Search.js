var React = require ('react');

class Search extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
    return (
    	<input
    		type='text' 
    		placeholder='Search Cars'
    		onChange={event => this.props.onUpdateSearch(event.target.value)}
    	/>
    );
	}
}

module.exports = Search;