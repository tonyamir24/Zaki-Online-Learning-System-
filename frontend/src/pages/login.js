import { useLogin } from "../hooks/useLogin"

const { useState } = require("react")

const Login=()=>{

const [Username,setUsername]=useState('')
const [Password,setPassword]=useState('')
const {login, error ,isLoading} =useLogin()
const handleSubmit =async(e)=>{
e.preventDefault()
await login(Username,Password)


}

return(
    <div>
             <form className="login" onSubmit={handleSubmit}>
        <h3>Log In </h3>
        <label>Username: </label>
        <p></p>
        <input 
        type="text" 
        onChange={(e)=>setUsername(e.target.value)}
        value={Username}
        />
        <p></p>
        <label>Password: </label>
        <p></p>
        <input 
        type="password" 
        onChange={(e)=>setPassword(e.target.value)}
        value={Password}
        />
        <p></p>
        <button disabled={isLoading}>Log in</button>
    
    
    
    {error && <div className="error">{error}</div> }
    </form>
  </div>
)
}
export default Login