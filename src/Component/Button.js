import React from 'react';

class Buttons extends React.Component{
		constructor(props){
		super(props);
		this.state = {
			value: "0",
		};
	}

	handleChange = event => {
		this.setState({
			value: event.target.name
		});
	};

	render(){
	return(
			<button name={this.props.title} onClick={this.handleChange} className={this.props.className}>{this.props.title}</button>
		)


}
}


export default Buttons