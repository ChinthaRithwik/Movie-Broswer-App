import React,{useState,useEffect,useRef} from 'react';
function Reference(){
     const Ref=useRef(0);
     useEffect(()=>{
      console.log("Number Changed");
     })
       function handleClick(){
         Ref.current.focus();
         Ref.current.style.backgroundColor="#ccc";
       }
      return(
        <div>
            <button onClick={handleClick}>Click me!</button><br/>
            <input type="text" ref={Ref}></input>
        </div>
      );
}
export default Reference;