import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUser } from '../actions';


 class UserHeader extends Component {
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchUser}) (UserHeader);