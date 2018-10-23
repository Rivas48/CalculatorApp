import React from 'react';

function Nav (props){
  return(
    <div className="calculator-top-menu">
            <button id="close" className="top-button red"/>
            <button id="minimize" className="top-button yellow"/>
            <button id="enlarge" className="top-button green"/>
        </div>
    )
};



export default Nav;