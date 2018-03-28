var React = require ('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

var Link = require('react-router-dom').Link;

class VehicleList extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			vehicles: null,
		};

	}
	componentDidMount () {
		api.retrieveVehicles()
			.then(function(vehicles){
				this.setState(function() {
					return {
						vehicles: vehicles
					}
				})
			}.bind(this));
	}


	render () {
		return (
			<div className='vehicle-list'>
				 {!this.state.vehicles 
				 	? <p>LOADING...</p>
				 	: 
						<ul className='vehicle-grid'>
							{this.state.vehicles.sort(this.props.sortType).filter(vehicle => 
								vehicle.make.toLowerCase().includes(this.props.query.toLowerCase()) || 
								vehicle.model.toLowerCase().includes(this.props.query.toLowerCase()) ||
								String(vehicle.year).includes(this.props.query)

							).map(function(vehicle, index){
									return (
										<li key={index} className='vehicle-grid__item'>
											<Link onClick={this.props.selectVehicle.bind(this, index, vehicle)} className='vehicle-grid__link' to={"/details"}
											>
												<div className='card'>
													<img 
														className='card__img'
														src={vehicle.image_url}
														alt={'Image for ' + vehicle.year + " " + vehicle.make + " " + vehicle.model} />
													<div className='card__text-box'>
														<h3 className='card__title'>
															{vehicle.year} {vehicle.make} {vehicle.model}
														</h3>
														<p className='card__info'>
															{vehicle.mileage} Miles
														</p>
													</div>
												</div>
											</Link>								
										</li>
									)	
								}, this)
							}
						</ul>
				 }
			</div>
		)
	}
}

module.exports = VehicleList;
