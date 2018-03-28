var React = require ('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Link = require('react-router-dom').Link;

var Home = require ('./Home');
var VehicleDetails = require ('./VehicleDetails');

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedVehicle: null,
			selectVehicle: (index, vehicle, event) => this.setState({ selectedVehicle: vehicle })							
		};
	}


	render () {
		return (
			<Router>
				<div className="App">
				<Switch>
					<Route exact path='/' render={(props)=> <Home {...props} selectVehicle={this.state.selectVehicle} />}/>
					<Route path='/details' render={(props)=> <VehicleDetails {...props} vehicle={this.state.selectedVehicle} />}/>
					<Route render={function () {
						return (
							<div className='page-not-found'>
								<Link to="/">Page Not Found... Return Home</Link>
							</div>
							)
					}}/>
				</Switch>
	      </div>
	     </Router>
		)
	}
}

module.exports = App;
