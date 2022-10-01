import React, { useEffect, useState, useRef } from 'react';
import AudioControls from './audiocontrols';
import '../../src/App.css';

const AudioPlayer = ({ songs }) => {

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { id, category, name, url } = songs[trackIndex];

  const audioRef = new Audio(`https://assets.breatheco.de/apis/sound/${url}`); //audio element created via audio constructor (new Audio).
  const intervalRef = useRef(); //reference to a setInterval timer.
  const isReady = useRef(false); //boolean to determine when certain actions are ready to be run.

  console.log(url);

  const toPrevTrack = () => { 
    if(trackIndex - 1 < 0) {
      setTrackIndex(songs.length - 1);
    }
    else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => { 
    if(trackIndex < songs.length - 1) {
      setTrackIndex(trackIndex + 1);
    }
    else {
      setTrackIndex(0);
    }
  }
  
  useEffect(() => {
    if (isPlaying) {
      audioRef.play();
    } else {
      audioRef.pause();
    }
  }, [isPlaying]);


  useEffect(() => {
    return () => {
      audioRef.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    audioRef.pause();
  
    audioRef.current = new Audio(url);
    setTrackProgress(audioRef.current.currentTime);
  
    if (isReady.current) {
      audioRef.play();
      setIsPlaying(true);
      //startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);



  return (
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3524ba70148279.5e9e1a288e349.png'}
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