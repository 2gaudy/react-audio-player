import { useEffect, useState } from "react";

import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp
} from 'react-icons/io5'



const Controls = ({audioRef}) => {

    const [isPlaying , setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

    }, [isPlaying, audioRef])

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev)
    }

    
    return (
        <div className="controls-wrapper">
            <div className="controls">
                <button>
                    <IoPlaySkipBackSharp/>
                </button>
                <button>
                    <IoPlayBackSharp/>
                </button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? <IoPauseSharp/> : <IoPlaySharp/>}
                </button>
                <button>
                    <IoPlayForwardSharp/>
                </button>
                <button>
                    <IoPlaySkipForwardSharp/>
                </button>
            </div>
        </div>
    )
  };
export default Controls;