import { useSignup } from "../hooks/useSignup"

const { useState } = require("react")

const Signup=()=>{

const [Username,setUsername]=useState('')
const [Password,setPassword]=useState('')
const [FirstName,setFirstName]=useState('')
const [LastName,setLastName]=useState('')
const [Email,setEmail]=useState('')
const [accepted,setaccepted]=useState(false)
const genders = ["Male", "Female"];
const [Gender,setGender]=useState(genders[0])
const {signup , error ,isLoading} =useSignup()
const handleSubmit =async(e)=>{
  
e.preventDefault()

await signup(Username,Password,Email,FirstName,LastName,Gender)


console.log(Username,Password,Gender)
}
const handleChange = () => {
  setaccepted(!accepted);
};
return(
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label>Username: </label>
        <input 
        type="text" 
        onChange={(e)=>setUsername(e.target.value)}
        value={Username}
        />
        <p></p>
        <label>Password: </label>
        <input 
        type="password" 
        onChange={(e)=>setPassword(e.target.value)}
        value={Password}
        />
        <p></p>
        <label>Email: </label>
        <input 
        type="email" 
        onChange={(e)=>setEmail(e.target.value)}
        value={Email}
        />
        <p></p>
        <label>FirstName: </label>
        <input 
        type="text" 
        onChange={(e)=>setFirstName(e.target.value)}
        value={FirstName}
        />
        <p></p>
         <label>LastName: </label>
        <input 
        type="text" 
        onChange={(e)=>setLastName(e.target.value)}
        value={LastName}
        />
        <p></p>
        <label>Gender: </label>
        <select
        onChange={(e) => setGender(e.target.value)}
        defaultValue={Gender}
      >
        {genders.map((gender, idx) => (
          <option key={idx}>{gender}</option>
        ))}
      </select>
      <p></p>
      <label>  
               <input type="checkbox" checked={accepted}
          onChange={handleChange}/>
                 I herbely read and accepted <a href="/contract">terms</a> of privacy, payment and refund policies.
           </label>
           <p></p>
            <button disabled={!accepted || isLoading}>Sign Up</button>
            
            {error && <div className="error">{error}</div> }
    </form>

)
}
export default Signup