import React, {useEffect, useState} from 'react';
import AudioPlayer from './components/audioplayer';
import Playlist from './components/playlist';
//import tracks from "./components/tracks";

function App() {

  const [songs, setSongs] = useState([{
    id: '',
    category: '',
    name: '',
    url: ''
  }]);

    useEffect(() => {

        getSongsAsync();
    }, [])

    const getSongsAsync = async () => {

        let url = "https://assets.breatheco.de/apis/sound/songs"
        let options_get = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            console.log(data);

            setSongs(data);

        } catch (error) {
            console.log(error);
        }
    }



  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className='col-12'>
          <AudioPlayer songs={songs} />

        </div>
        <div className='col-12 d-flex justify-content-center'>
          <Playlist />
        </div>
      </div>

    </div>
  );
}

export default App;


