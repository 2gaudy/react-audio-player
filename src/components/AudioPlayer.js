
import {tracks} from '../data/tracks'

import { useRef, useState } from 'react';
import "../styles/AudioPlayer.css"

import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';


const AudioPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0])

    const[timeProgress, setTimeProgress] = useState(0);
    const[duration, setDuration] = useState(0);


    const audioRef = useRef();
    console.log(audioRef)

    const progressBarRef = useRef();

    return(
        <div className="audio-player">
            <div className="inner">
                <DisplayTrack {...{currentTrack, audioRef, setDuration, progressBarRef}}/>
                <Controls audioRef={audioRef}/>
                <ProgressBar {...{progressBarRef, audioRef, timeProgress, duration}}/>
            </div>
        </div>
    );
};

export default AudioPlayer;