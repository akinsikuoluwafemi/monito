import React, { Component } from 'react'
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        return (
            <div>
                SongDetail
            </div>
        )
    }
}

const mapStateToProps =(state) => {
  console.log(state)
    return {

    }
}




export default connect() (SongDetail);