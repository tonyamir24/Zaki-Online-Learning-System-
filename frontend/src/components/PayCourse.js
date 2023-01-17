import {   useState } from 'react'

const PayCourse =() =>{
    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit =async (e) =>{
        e.preventDefault()
    }
    return(
        <div className = "PayCourse">
            <div className="Card">
                            
            </div>
            <h1> Please enter your card details </h1>
            <br></br>
       
            <label>Card Number:</label>
        <br></br>
        <input
        type="text"
        onChange={(e)=>setCardNumber(e.target.value)}
        value={cardNumber}
        />
        <br></br>
        <br></br>

        <label>Card Name ::</label>
        <br></br>
        <input
        type="text"
        onChange={(e)=>setCardName(e.target.value)}
        value={cardName}
        />
        <br></br>
        <br></br>

        <label> Expiry Date:</label>
        <br></br>
        <input
        type="date"
        onChange={(e)=>setExpiryDate(e.target.value)}
        value={expiryDate}
        />
        <br></br>
        <br></br>

        <label>CVV ::</label>
        <br></br>
        <input
        type="text"
        onChange={(e)=>setCvv(e.target.value)}
        value={cvv}
        />
        <br></br>
        <br></br>

<input type="submit" value="Pay" onClick={handleSubmit}/>
       


       
    {error && <div className="error"><p>{error}</p></div>}
        </div>
    )
} 
export default PayCourse