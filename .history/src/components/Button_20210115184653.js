import React from 'react';
import { connect } from 'react-redux';
import {increamentButton, decreamentButton} from '../actions'

 const Button = (props) =>  {
       console.log(props)
         return (
      <div style={{display: 'flex'}}>
        <button onClick={() => props.increamentButton()}>Increament</button>
            <button onClick={() => props.decreamentButton()}>Decreament</button>
                 <p>Current Count:  { props.count}</p>
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
