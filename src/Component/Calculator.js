import React, { Component } from 'react';
import Nav from './Nav';
import DisplayScreen from './Display'


class Calculator extends Component {
  render() {
    
    return (
    <div id="App-Calculator" className="App-Calculator">
          <Nav />
          <DisplayScreen />
    </div>     
   
  )
}


}
    export default Calculator;





