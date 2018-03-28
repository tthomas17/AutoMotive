var React = require ('react');

class Sort extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
	    return (
	    	<select defaultValue="" name="sorting" onChange={ event => {
	    		if (event.target.value === "year-new-old" ){
					this.props.onUpdateSort(function(a,b){return b.year - a.year})
	    		} 
	    		else if  ( event.target.value === "year-old-new" ){
	    			this.props.onUpdateSort(function(a,b){return a.year - b.year})
	    		}
	    		else if  ( event.target.value === "mileage-low-high" ){
	    			this.props.onUpdateSort(function(a,b){return a.mileage - b.mileage})
	    		}
	    		else if  ( event.target.value === "mileage-high-low" ){
	    			this.props.onUpdateSort(function(a,b){return b.mileage - a.mileage})
	    		}
	    		else if  ( event.target.value === "listdate-new-old" ){
	    			this.props.onUpdateSort(function(a,b){return a.created_at - b.created_at})
	    		}
	    		else if  ( event.target.value === "listdate-old-new" ){
	    			this.props.onUpdateSort(function(a,b){return b.created_at - a.created_at})
	    		}
	    		else {
	    			this.props.onUpdateSort(function(a,b){return 0.5 - Math.random()})
	    		}

	    		}}>
	    		<option value=""> No Sorting </option>
	    		<option value="year-new-old">Year: New to Old</option> 
	  			<option value="year-old-new">Year: Old to New</option> 
	  			<option value="mileage-low-high">Mileage: Low to High</option>
	  			<option value="mileage-high-low">Mileage: High to Low</option>
	  			<option value="listdate-new-old">Listing Date: New to Old</option>
	  			<option value="listdate-old-new">Listing Date: Old to New</option>
			</select>
	    );
	}
}

module.exports = Sort;