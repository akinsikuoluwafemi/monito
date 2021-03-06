import React, { Component } from 'react'
import { connect } from 'react-redux';


 class SongList extends Component {
    renderList () {
        return this.props.songs.map((song) => {
            return (
                <div style={} key={song.title}>
                    <div>{song.title}</div>
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