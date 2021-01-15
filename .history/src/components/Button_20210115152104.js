import React from 'react';
import { connect } from 'react-redux';


 function Button() {
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


export default connect(mapStateToProps, {
  increamentButton,
  decreamentButton,
})(Button);
