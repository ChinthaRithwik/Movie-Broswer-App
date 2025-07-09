 import React,{useState,useEffect,useRef} from 'react';
 function StopWatch(){
     const [isRunning, setIsRunning] = useState(false);
     const [time, setTime] = useState(0);
     const IntervalIdRef=useRef(null);
     const StartTimeRef=useRef(0);
     useEffect(()=>{
        if(isRunning){
           IntervalIdRef.current= setInterval(()=>{
                setTime(Date.now()-StartTimeRef.current);
            },10);
            return()=>{
                clearInterval(IntervalIdRef.current);
            }
        }
     }
    )
     function handleStart(){
          setIsRunning(true);
          StartTimeRef.current=Date.now()-time;
     }
     function handleStop(){
           setIsRunning(false);
     }
     function handleReset(){
           setIsRunning(false);
           setTime(0);
     }
     function formatTime(){
        let hours=Math.floor(time/(1000*60*60));
        let minutes=Math.floor(time/(1000*60)%60);
        let seconds=Math.floor(time/(1000)%60);
        let milliseconds=Math.floor((time%(1000))/10);

        hours=String(hours).padStart(2,'0');
        minutes=String(minutes).padStart(2,'0');
        seconds=String(seconds).padStart(2,'0');
        milliseconds=String(milliseconds).padStart(2,'0');
         if(hours>0){
            return `${hours}:${minutes}:${seconds}`;
         }
        return `${minutes}:${seconds}:${milliseconds}`;
     }
   return(
        <div className='container'>
                <h1 className="timer">{formatTime()}</h1>
                <div className="controls">
                    <button className="start-button" onClick={handleStart}>Start</button>
                    <button className="stop-button" onClick={handleStop}>Stop</button>
                    <button className="reset-button" onClick={handleReset}>Reset</button>
                </div>
        </div>
   );
 }
 export default StopWatch;