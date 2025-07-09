import React,{useState} from 'react';
function MyComponent(){
    const [name,setName]=useState("");
    const [age,setAge]=useState();
    const [isEmployed,setisEmployed]=useState(false);
    const [car,setCar]=useState({year:2004, name:"Mitsubishi", model:"Lancer-EVO"});
    const updateName=()=>{
        setName("Rithwik");
    }
    const updateAge=()=>{
        setAge(19);
    }
    const updateisEmployed=()=>{
        setisEmployed(!isEmployed);
    }
    const handleNameChange=(e)=>{
        setCar(c=>({...c, name :e.target.value}));
    }
    const handlemodelChange=(e)=>{
        setCar(c=>({...c,model :e.target.value}));
    }
     const handleyearChange=(e)=>{
        setCar(c=>({...c,year :e.target.value}));
    }
    return(
        <div>
            <p>Name :{name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age :{age}</p>
            <button onClick={updateAge}>Set Age</button>
             <p>isEmployed :{isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateisEmployed}>set isEmployed</button>
             <p>My favourite Car is {car.name} {car.model} of year {car.year}</p>
             <label>Car Name:</label>
             <input type="text" value={car.name} onChange={handleNameChange}></input><br/>
             <label>Car model:</label>
             <input type="text" value={car.model} onChange={handlemodelChange}></input><br/>
             <label>Car year:</label>
             <input type="number" value={car.year} onChange={handleyearChange}></input>
        </div>
    );
}
export default MyComponent;