import React,{ useState } from 'react';
function Counter(){
     const [name, setName] = useState("");
     const [Quantity, setQuantity] = useState();
     const [comment, setComment] = useState("");
     const [Payment, setPayment]=useState();
     const [DeliveryStatus, setDeliveryStatus] = useState("Pending");
     const handleNameChange = (event) => {
         setName(event.target.value);
     }
      const handleQuantityChange = (event) => {
         setQuantity(event.target.value);
     }
      const handlecommentChange = (event) => {
         setComment(event.target.value);
     }
      const handlePaymentChange = (event) => {
         setPayment(event.target.value);
     }
      const handleDeliveryStatusChange = (event) => {
         setDeliveryStatus(event.target.value);
     }
     return(
        <div>
            <input value={name} onChange={handleNameChange} placeholder='Enter your Name'></input>
            <p>Name : {name}</p>
             <input value={Quantity} onChange={handleQuantityChange} type='number' placeholder='0'></input>
            <p>Quantity : {Quantity}</p>
            <textarea value={comment} onChange={handlecommentChange} placeholder='Enter your comment'></textarea>
            <p>Comment : {comment}</p>
            <select value={Payment} onChange={handlePaymentChange}>
                <option value="">Payment Method</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Credit/Debit Card">Credit/Debit Card</option>
                <option value="Pay Later">Pay Later</option>
            </select>
            <p>Payment : {Payment}</p>
            <h3>Delivery Status:</h3>
            <label>
                <input type='radio' value="Shipping" checked={DeliveryStatus === "Shipping"} onChange={handleDeliveryStatusChange}></input>
                Shipping
            </label><br/>
            <label>
                <input type='radio' value="Shipped" checked={DeliveryStatus === "Shipped"} onChange={handleDeliveryStatusChange}></input>
                Shipped
            </label><br/>
            <label>
                <input type='radio' value="Out to Delivery" checked={DeliveryStatus === "Out to Delivery"} onChange={handleDeliveryStatusChange}></input>
                Out to Delivery
            </label><br/>
            <label>
                <input type='radio' value="Delivered" checked={DeliveryStatus === "Delivered"} onChange={handleDeliveryStatusChange}></input>
                Delivered
            </label>
            <p><b>Delivery Status</b>:{DeliveryStatus}</p>
        </div>
     );
}
export default Counter;