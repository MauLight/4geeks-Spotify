import React from 'react';
import AudioPlayer from './components/audioplayer';
import Playlist from './components/playlist';
import tracks from "./components/tracks";

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className='col'>
          <AudioPlayer tracks={tracks} />
          <Playlist />
        </div>
      </div>

    </div>
  );
}

export default App;
