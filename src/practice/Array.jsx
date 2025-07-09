import React, { useState } from 'react';
function Array() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carName, setCarName] = useState("");
    const [carModel, setCarModel] = useState("");
    function handleCarAdd() {
        const newCar = {
            year: carYear,
            name: carName,
            model: carModel
        }
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarName("");
        setCarModel("");
     }
    function handleCarRemove(e) {
        setCars(c => c.filter((_, i) => i !== e));
    }
    function handleCarYearChange(e) {
        setCarYear(e.target.value);
    }
    function handleCarNameChange(e) {
        setCarName(e.target.value);
    }
    function handleCarModelChange(e) {
        setCarModel(e.target.value);
    }
    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handleCarRemove(index)}>{car.year} {car.name} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleCarYearChange}></input><br/>
            <input type="text" value={carName} onChange={handleCarNameChange} placeholder='Enter Car Name'></input><br/>
            <input type="text" value={carModel} onChange={handleCarModelChange} placeholder='Enter Car Model'></input><br/>
            <button onClick={handleCarAdd}>Add Car</button>
        </div>
    );
}

export default Array;