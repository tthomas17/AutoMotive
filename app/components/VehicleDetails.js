var React = require ('react');

var Link = require('react-router-dom').Link;
var Redirect = require('react-router-dom').Redirect;

class VehicleDetails extends React.Component {
 render() {
    return (
    	<div>
	    	<header className='header'>
					<div className='header__title'>
						<Link to="/">
							<h1 className='heading--primary'>AutoMotive</h1>
						</Link>
					</div>
				</header>
					<main>
						{!this.props.vehicle 
					 	? <div className='page-not-found'>
									<Redirect to='/'/>
							</div>
					 	: 
						<div className='card'>
							<img 
								className='card__img'
								src={this.props.vehicle.image_url}
								alt={'Image for ' + this.props.vehicle.year + " " + this.props.vehicle.make + " " + this.props.vehicle.model} />
							<div className='card__text-box'>
								<h3 className='card__title'>
									{this.props.vehicle.year} {this.props.vehicle.make} {this.props.vehicle.model}
								</h3>
								<p className='card__info'>
									{this.props.vehicle.mileage} Miles
								</p>
								<p className='card__info'>
								{this.props.vehicle.drivetrain}
								</p>
								<p className='card__info'> 
									{this.props.vehicle.bodytype} 
								</p>
							</div>
					</div>
					}
    		</main>
    	</div>
    );
  }
}

module.exports = VehicleDetails;