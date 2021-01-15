import React, { Component } from 'react'
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        return (
            <div>
                {}
            </div>
        )
    }
}

const mapStateToProps =(state) => {
  console.log(state)
    return {
      selectedSong: state.selectedSong,
    };
}




export default connect(mapStateToProps) (SongDetail);