import React from 'react';
import ButtonPad from './Row';
class DisplayScreen extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			buttonValue : ""
		};
	}

	handleChange = event => {
		this.setState({
			buttonValue: event.target
		});
		console.log(this.state);
	};

	render(){
	return(
		
           <ButtonPad  />

		)
}
}

export default DisplayScreen