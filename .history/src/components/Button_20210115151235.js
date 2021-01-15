import React from 'react';
import { connect } from 'react-redux';


export default function Button() {
    return (
      <div style={{display: 'flex'}}>
        <button>Increament</button>
            <button>Decreament</button>
            <p>Current Count:  0</p>
      </div>
    );
}


