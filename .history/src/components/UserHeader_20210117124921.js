import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUser } from '../actions';


 class UserHeader extends Component {
    componentDidMount() {
        this.pro
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchUser}) (UserHeader);