import React,{useState,useEffect} from 'react';
function UseEffect() {
        const [count, setCount] = useState(0);
        const [color,setColor]=useState("red");
        useEffect(()=>{
            document.title=`Count: ${count} ${color}`;
        },[count,color]);
     function handleIncrement(){
        setCount(c=>c+1);
     }
     function handleDecrement(){
        setCount(c=>c-1);
     }
     function handleChangeColor(){
        setColor(c=>(c==="yellow") ? "red" : "yellow");
     }
    return(
    <div>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={handleIncrement}>Increment</button><br/>
            <button onClick={handleDecrement}>Decrement</button><br/>
            <button onClick={handleChangeColor}>Change Color</button>
    </div>
    );
}
export default UseEffect;