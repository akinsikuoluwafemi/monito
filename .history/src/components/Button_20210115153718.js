import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';


 class Button(props) {
     render(){
            return (
      <div style={{display: 'flex'}}>
        <button>Increament</button>
            <button>Decreament</button>
            <p>Current Count:  0</p>
      </div>
    );
    }
     console.log(this.props)
  
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
