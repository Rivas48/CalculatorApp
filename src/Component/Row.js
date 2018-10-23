import React from 'react';
import Buttons from './Button';
import EnterButton from './EnterButton';
import PropTypes from 'prop-types';



class ButtonPads extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
				displayAnswer:0,
				displayEquation:"0"
		};
	}

	handleChange = event => {
		if(event.target.name === "Enter"){
			var answer = eval(this.state.displayEquation) ;
			this.setState({
				displayAnswer:answer
			})
		}else if(event.target.name === "CE"){
			this.setState({
				displayAnswer:0,
				displayEquation:"0"
			})
			
		}else if(event.target.name === "del"){
			if(this.state.displayEquation.length > 1){
				var newAnswer = (this.state.displayEquation.slice(0, -1));
				this.setState({
					displayEquation: newAnswer
				})
			}else{
				this.setState({
					displayEquation: ""
				})
			}

		console.log('hello');
		}else {
			if(this.state.displayEquation === "0"){
				this.setState.displayEquation = "";
				this.setState({displayEquation:this.setState.displayEquation  += event.target.name});	
			}else{
				this.setState({displayEquation:this.setState.displayEquation  += event.target.name});	
			}
		}
	}



  render() {
  return (
  	<div className='button-screen-container'>
  		<div className="calculator-display-screen">
				<p id='operations' className="operations">{this.state.displayEquation}</p>
			    <p id='results' className="results">{this.state.displayAnswer}</p>
    	</div>
		<div className='button-container'>
			<div id='row0' onClick={this.handleChange} className='row'>
				<Buttons title="7" className={this.props.grayButtonClass} />
				<Buttons title="8" className={this.props.grayButtonClass} />
				<Buttons title="9" className={this.props.grayButtonClass} />
				<Buttons onClick={this.handleChange} title="/" className={this.props.greenButtonClass} />
			</div>
			<div id='row0' onClick={this.handleChange} className='row'>
				<Buttons title="4" className={this.props.grayButtonClass} />
				<Buttons title="5" className={this.props.grayButtonClass} />
				<Buttons title="6" className={this.props.grayButtonClass} />
				<Buttons title="*" className={this.props.greenButtonClass} />
			</div>
			<div id='row0' onClick={this.handleChange} className='row'>
				<Buttons title="1" className={this.props.grayButtonClass} />
				<Buttons title="2" className={this.props.grayButtonClass} />
				<Buttons title="3" className={this.props.grayButtonClass} />
				<Buttons title="-" className={this.props.greenButtonClass} />
			</div>
			<div id='row0'  onClick={this.handleChange}  className='row'>
				<Buttons title="del"  className={this.props.whiteButtonClass} />
				<Buttons title="0"  className={this.props.whiteButtonClass} />
				<Buttons title="CE" className={this.props.whiteButtonClass} />
				<Buttons title="+" className={this.props.greenButtonClass} />
			</div>
			<div id="row0" onClick={this.handleChange} className="row">
				<EnterButton title="Enter"  className={this.props.specialGreenButtonClass} />
           </div>
		</div>
	</div>
		)
}
}
	 ButtonPads.defaultProps = {
		grayButtonClass : "calculator-button gray",
		greenButtonClass : "calculator-button calc-green",
		whiteButtonClass : "calculator-button white",
		specialGreenButtonClass : "calculator-enter-button special-green"
	}

	ButtonPads.propTypes = {
		title: PropTypes.string,
	}

export default ButtonPads