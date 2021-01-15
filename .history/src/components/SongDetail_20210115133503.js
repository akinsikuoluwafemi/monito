import React, { Component } from 'react'
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        return (
          <div>
            <p>{this.props.selectedSong.title}</p>
            <p>{this.props.selectedSong.duration}</p>
          </div>
        );
    }
}

const mapStateToProps =(state) => {
  console.log(state.selectedSong);
    return {
      selectedSong: state.selectedSong,
    };
}




export default connect(mapStateToProps) (SongDetail);