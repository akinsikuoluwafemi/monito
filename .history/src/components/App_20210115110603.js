import React from 'react';
import './App.css';
import { selectSong } from '../actions';
import SongList from './SongList';



function App() {
  return (
    <div >
     <SongList/>
    </div>
  );
}

export default App;
