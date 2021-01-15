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

 const mapStateToProps = () => {
     
 }


export default connect() (Button);
