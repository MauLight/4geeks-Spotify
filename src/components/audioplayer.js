import React, { useEffect, useState, useRef } from 'react';
import AudioControls from './audiocontrols';
import '../../src/App.css';

const AudioPlayer = ({ tracks }) => {

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc)); //audio element created via audio constructor (new Audio).
  const intervalRef = useRef(); //reference to a setInterval timer.
  const isReady = useRef(false); //boolean to determine when certain actions are ready to be run.

  const toPrevTrack = () => { //goes to the previous track
    if(trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    }
    else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => { //goes to the next track
    if(trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    }
    else {
      setTrackIndex(0);
    }
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    audioRef.current.pause();
  
    audioRef.current = new Audio(audioSrc);
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
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h5 className="title mt-4">{title}</h5>
        <p className="artist">{artist}</p>
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