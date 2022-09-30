import React from 'react';
import AudioPlayer from './components/audioplayer';
import Playlist from './components/playlist';
import tracks from "./components/tracks";

function App() {
  return (
    <div className="App">
      <AudioPlayer tracks={tracks}/>
      <Playlist />
    </div>
  );
}

export default App;
