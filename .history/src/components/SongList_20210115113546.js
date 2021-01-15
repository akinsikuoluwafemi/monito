import React, { Component } from 'react'
import { connect } from 'react-redux';
import { } from '../actions';


 class SongList extends Component {
    renderList () {
        return this.props.songs.map((song) => {
            return (
                <div style={{display: 'flex', alignItems: 'center'}} key={song.title}>
                    <div style={{margin: '.5rem'}}>{song.title}</div>
                    <button>Select</button>
                </div>
            )
        })
    }
     
    render() {
        return (
            <div>
                {this.renderList()}
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