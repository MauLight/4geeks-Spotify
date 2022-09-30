import React, { useState, useEffect } from 'react';

function Playlist() {

    const [songs, setSongs] = useState([]);

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
        <ul className='audio-player'>
            {
                !!songs && songs.length > 0 && songs.map((song, i) => {
                    return (
                        <li type='button' onClick={console.log(song.url)}
                            key={i}>
                            {song.name}
                        </li>

                    )
                })
            }
        </ul>
    )
}


export default Playlist;

