import React, { useEffect, useState, useRef } from 'react';
import AudioControls from './audiocontrols';
import '../../src/App.css';

const AudioPlayer = ({ songs }) => {

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { id, category, name, url } = songs[trackIndex];

  const audioRef = useRef(new Audio(`https://assets.breatheco.de/apis/sound/${url}`)); //audio element created via audio constructor (new Audio).
  const intervalRef = useRef(); //reference to a setInterval timer.
  const isReady = useRef(false); //boolean to determine when certain actions are ready to be run.

  const toPrevTrack = () => { //goes to the previous track
    if(trackIndex - 1 < 0) {
      setTrackIndex(songs.length - 1);
    }
    else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => { //goes to the next track
    if(trackIndex < songs.length - 1) {
      setTrackIndex(trackIndex + 1);
    }
    else {
      setTrackIndex(0);
    }
  }

  


  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    audioRef.current.pause();
  
    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);
  
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      //startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);



  //note that the items in the destructured object are used in the rendering as information.
  return (
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={'...'}
          alt={'...'}
        />
        <h5 className="title mt-4">{name}</h5>
        <p className="artist">{category}</p>
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={setIsPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
        />
      </div>

    </div>
  )

}

export default AudioPlayer;