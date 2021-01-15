import React from 'react';
import { connect } from 'react-redux';


 function Button(props) {
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
