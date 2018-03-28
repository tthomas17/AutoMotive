var React = require ('react');

var VehicleList = require ('./VehicleList');
var VehicleDetails = require ('./VehicleDetails');
var Search = require ('./Search');
var Sort = require ('./Sort');

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			query: '',
			sortType: function(a,b){return},
		};
	}

	render () {
	    return (
	    	<div>
	    		<header className='header'>
						<div className='header__title'>
							<h1 className='heading--primary'>AutoMotive</h1>
						</div>
						<div className='header__filters'>
							<Search onUpdateSearch={queryString => 
								this.setState({query: queryString})}/>
							<Sort onUpdateSort={sortType =>
								this.setState({sortType: sortType})}/>
						</div>
					</header>
					<main>
						<VehicleList query={this.state.query} sortType={this.state.sortType} selectVehicle={this.props.selectVehicle} />
					</main>
				</div>
	    );
	}
}

module.exports = Home;