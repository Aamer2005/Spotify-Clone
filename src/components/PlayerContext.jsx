import {createContext , useEffect, useRef, useState} from 'react'
import { songsData } from '../assets/assets';

//creating createContext API
export const PlayerContext = createContext();


const PlayerContextProvider = (props)=>{

    // # Playing audio track logic
    const audioRef = useRef(); //refernce variable
    const seekBg = useRef();
    const seekBar = useRef();

    const [track , setTrack] = useState(songsData[0]);
    const [playStatus , setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime : {
            second : 0,
            minute : 0
        },
        totalTime : {
            second : 0,
            minute : 0
        }
    });

    const play = async () => {
    await audioRef.current.play();
    setPlayStatus(true);
    };

    const pause = async () => {
    audioRef.current.pause();
    setPlayStatus(false);
    };

    useEffect(()=>{
        setTimeout(() => {
            
            audioRef.current.ontimeupdate = () =>{
                setTime({
        currentTime : {
            second : Math.floor(audioRef.current.currentTime % 60),
            minute :  Math.floor(audioRef.current.currentTime / 60)
        },
        totalTime : {
            
            second : Math.floor(audioRef.current.duration % 60),
            minute :  Math.floor(audioRef.current.duration / 60)
        }
    })
            }

        }, 1000);
    },[audioRef])


    //this is variable of object
    const contextValue = {
        audioRef,
        seekBar , 
        seekBg ,
        track , setTrack,
        playStatus , setPlayStatus,
        time , setTime ,
        play , pause,

    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;