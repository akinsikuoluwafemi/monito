import React from 'react';
import { connect } from 'react-redux';
import {increamentButton, decreamentButton} from '../actions'

 const Button = (props) =>  {
       console.log(props)
         return (
      <div style={{display: 'flex'}}>
        <button onClick={() => increamentButton(props.count)}>Increament</button>
            <button onClick={() => decreamentButton()}>Decreament</button>
            <p>Current Count:  0</p>
      </div>
        );
  
 }
 

 const mapStateToProps = (state) => {
    console.log(state)
     return {
        count: state.count
     }
 }


export default connect(mapStateToProps, {increamentButton, decreamentButton})(Button);
