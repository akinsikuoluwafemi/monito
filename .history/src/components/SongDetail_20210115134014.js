import React, { Component } from 'react'
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
      console.log(this.props.selectedSong)
       const {selectedSong} = this.props
        return (
          <div>
            {selectedSong ? (
                <div>
            {/* <p>{selectedSong.title}</p> */}
            {/* <p>{selectedSong.duration}</p> */}

                </div>   

                ) : (
                    <p>Kindly select a song</p>
            )}
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