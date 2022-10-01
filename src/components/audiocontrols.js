import React from 'react';

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick
}) => (
    <div className='audio-controls mt-3'>
        <button
            type='button'
            className='prev'
            onClick={onPrevClick}
        >
            <i className="fa-solid fa-backward"></i>
        </button>
        {isPlaying ? (
            <button
                type='button'
                className='pause'
                onClick={() => onPlayPauseClick(false)}
            >
                <i className="fa-solid fa-pause"></i>
            </button>) : (
            <button
                type='button'
                className='play'
                onClick={() => onPlayPauseClick(true)}
            >
                <i className="fa-solid fa-play"></i>
            </button>
        )}
        <button
            type="button"
            className="next"
            onClick={onNextClick}
        >
            <i className="fa-solid fa-forward"></i>
        </button>
    </div>
)

export default AudioControls;