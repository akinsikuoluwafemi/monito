import React, { Component } from 'react';
import { connect } from 'react-redux';


 const extends Component  {
       console.log(this.props)
         return (
      <div style={{display: 'flex'}}>
        <button>Increament</button>
            <button>Decreament</button>
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


export default connect(mapStateToProps)(Button);
