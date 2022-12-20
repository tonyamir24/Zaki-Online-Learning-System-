import { useEffect,  useState } from 'react'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom';

//DataDetails
// import DataDetail from '../component/DataDetail'
// import dataform from '../component/dataform'

const ForgetPassword =() =>{
   
    const form = useRef();




    const {id}=useParams()
    const [error, seterror] = useState(null)





  const sendEmail =async (e) => {
    e.preventDefault();

   



      const response =await fetch('/forgetPassword/'+id,{
        method:'POST',
        body:JSON.stringify({Password:"Hazl2oom2022"
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
        emailjs.sendForm('service_4hwq6ed', 'template_mxmezcb', form.current, 'wuW1ln7tg27ySVof8')
        .then((result) => {
            console.log(result.text);
            console.log("MESSAGE SENT YA BASHA");
        }, (error) => {
            console.log(error.text);
        });
      //  setmssg('Password Changed')
        seterror(null)
        console.log(json)
    }






  };

    return(
        <div className = "ForgetPassword">
            <div className="Data">
             
           
            </div>

            <h1> Did you forget your password ? </h1>

            <h3>Please type your e-mail below and we will send you your new password</h3>

        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <br></br>
        <input type="text" name="user_name" />
        <br></br>
        <label>Email</label>
        <br></br>
        <input type="email" name="user_email" />
        <br></br>
        <br></br>
       
        <input type="submit" value="Send" />
        </form>

        </div>
        
    )
} 


export default ForgetPassword