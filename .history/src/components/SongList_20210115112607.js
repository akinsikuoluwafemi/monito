import React, { Component } from 'react'
import { connect } from 'react-redux';


 class SongList extends Component {
    renderList () {
        return
    }
     
    render() {
        return (
            <div>
                Songlist
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    
    return {
        songs: state.songs
    }
}


export default connect(mapStateToProps)(SongList);