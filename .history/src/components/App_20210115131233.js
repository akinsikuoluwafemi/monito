import React from 'react';
import './App.css';
import SongList from './SongList';
import SongDetail from './SongDetail';



function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'space'}} >
      <SongList />
      <SongDetail/>
    </div>
  );
}

export default App;
