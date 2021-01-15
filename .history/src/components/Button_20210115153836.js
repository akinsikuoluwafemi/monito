import React, { compo } from 'react';
import { connect } from 'react-redux';


 class Button  {
     render(){
       
         return (
      <div style={{display: 'flex'}}>
        <button>Increament</button>
            <button>Decreament</button>
            <p>Current Count:  0</p>
      </div>
        );
    }
  
 }
 

 const mapStateToProps = (state) => {
    console.log(state)
     return {
        count: state.count
     }
 }


export default connect(mapStateToProps, {  })(
  Button
);
