import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions'


 class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts()
        alert()
    }
    
     
    render() {
        return (
            <div>
                Postlist
            </div>
        )
    }
 }

     



export default connect(null, {fetchPosts}) (PostList);