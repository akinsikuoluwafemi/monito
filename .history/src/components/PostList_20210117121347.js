import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions'


 class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts() 
    }
    
     renderList () {
         return this.props.posts.map(post => {
             return (
                 <div className="item" key={post.id}>
                     <i />
                 </div>
             )
         })
     }
     
    render() {
        console.log(this.props.posts)
        return (
            <div>
                Postlist
            </div>
        )
    }
 }

     
 const mapStateToProps = (state) => {
     return {
         posts: state.posts
     }
 }



export default connect(mapStateToProps, {fetchPosts}) (PostList);