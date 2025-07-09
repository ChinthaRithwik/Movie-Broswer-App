import React,{useState,useEffect} from 'react';
function Window(){
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
     // without useEffect
     useEffect(()=>{
           window.addEventListener("resize",Resize);
           console.log("Resized");
           return()=>{
           window.removeEventListener("resize",Resize);
           console.log("Resized removed");
           }
     },[]);
    
    function Resize(){
          setWidth(window.innerWidth);
            setHeight(window.innerHeight);
           
    }
    
    return(
       <div>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
       </div>
    );
}
export default Window;