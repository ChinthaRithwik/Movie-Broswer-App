
import React,{useState,useEffect} from 'react';
function DigitalClock(){
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return()=>{
            clearInterval(interval);
        }
    },[]);
        return(
            <div className="container">
                <span className="clock">{time}</span>
            </div>
        );
}
export default DigitalClock;