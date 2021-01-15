import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';


 class Button(props) {
    render(
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
