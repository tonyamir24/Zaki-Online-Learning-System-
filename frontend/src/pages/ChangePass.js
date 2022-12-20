import { useEffect,  useState } from 'react'
import { useParams } from 'react-router-dom'


const ChangePass =() =>{
    const {id}=useParams()
    const [OldPassword, setOldPassword] = useState('')
    const [Password, setNewPassword] = useState('')
    const [ReNewPassword, setReNewPassword] = useState('')
    const [mssg, setmssg] = useState('')
    const [error, seterror] = useState(null)

    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         const response = await fetch('/read/63653583768bd7c2e72fd457')
    //         const json = await response.json()

    //         if(response.ok){
    //             setdata(json)
    //         }
    //     }

    //     fetchData();
    // }, [] )
    
    const handleSubmit =async (e) =>{
        e.preventDefault()
       setmssg('')
        if(ReNewPassword===Password){
            //console.log('masa7 el fol')
            
            const response =await fetch('/changePassword/'+id,{
                method:'POST',
                body:JSON.stringify({
                    OldPassword:OldPassword
                    ,Password:Password
                }
                ),
                headers:{
                    'Content-Type':'application/json'
                }
    
            })
            const json =await response.json()
    
            if(!response.ok){
                seterror(json.error)
                console.log(json.error)
                //setmssg(error)

            //    return(<Link to={'/course/'+json._id}></Link>)
            }
            if(response.ok){
                
                setmssg('Password Changed')
                seterror(null)
                console.log(json)
            }
    
    


        }else{

            setmssg('Please re-enter your password correctly')

        }}
    return(
        <div className = "ChangePass">
            <div className="Data">
                            
            </div>
            <h1> You are going to Change the password of your account </h1>
            <br></br>
       
            <label>Old password:</label>
        <br></br>
        <input
        type="text"
        onChange={(e)=>setOldPassword(e.target.value)}
        value={OldPassword}
        />
        <br></br>
        <br></br>
        <label>New password:</label>
        <br></br>
        <input
        type="text"
        onChange={(e)=>setNewPassword(e.target.value)}
        value={Password}
        />
        <br></br>
        <br></br>
        <label>Retype the New password:</label>
        <br></br>
       
        <input
        type="text"
        onChange={(e)=>setReNewPassword(e.target.value)}
        value={ReNewPassword}
        />
        <br></br>
        <br></br>
       
        <input type="submit" value="Submit" onClick={handleSubmit}/>
        <label>{mssg}</label>

    {error && <div className="error"><p>{error}</p></div>}
        </div>
    )
} 

export default ChangePass