import React, {Component} from 'react';

class EnterButton extends Component{
		

	render(){
	return(
			<button name={this.props.title} onClick={this.handleChange} className={this.props.className}>{this.props.title}</button>
		)


}
}

export default EnterButton;