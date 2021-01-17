import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUser } from '../actions';


 class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    
    render() {
        const user = this.props.users.find(user => user.id === this.props.userId)

        return (
            <div>
                {user ? user.name : null}
            </div>
        )
    }
}

const mapStateToProps = (state, wnProps) => {
    return {
      users: state.users.find((user) => user.id === this.ownProps.userId),
    };
}

export default connect(mapStateToProps, {fetchUser}) (UserHeader);