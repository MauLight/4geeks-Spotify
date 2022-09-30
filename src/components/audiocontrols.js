import React from 'react';

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick
}) => (
    <div className='audio-controls'>
        <button
            type='button'
            className='prev btn btn-dark'
            onClick={onPrevClick}
        >
            <i class="fa-solid fa-backward"></i>
        </button>
        {isPlaying ? (
            <button
                type='button'
                className='pause btn btn-dark'
                onClick={() => onPlayPauseClick(false)}
            >
                <i class="fa-solid fa-pause"></i>
            </button>) : (
            <button
                type='button'
                className='play btn btn-dark'
                onClick={() => onPlayPauseClick(true)}
            >
                <i class="fa-solid fa-play"></i>
            </button>
        )}
        <button
            type="button"
            className="next btn btn-dark"
            onClick={onNextClick}
        >
            <i class="fa-solid fa-forward"></i>
        </button>
    </div>
)

export default AudioControls;