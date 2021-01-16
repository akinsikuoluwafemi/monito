import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions'


 class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts()
        alert("oo") 
    }
    
     
    render() {
        return (
            <div>
                Postlist yes
            </div>
        )
    }
 }

     



export default connect(null, {fetchPosts}) (PostList);