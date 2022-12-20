import {useEffect , useState} from "react"
import  { Link } from 'react-router-dom'


const Contract = () => {
var x =  "I agree to terms & Conditions"

        return (
            <form className="create">
                 <table >
      
      <tr>
                 These General Terms and Conditions of Use (hereinafter: "GTC") apply to 
                 present or future video uploads on the use of our platform
                 </tr>
                 <tr>
                 I agree that the videos posted do not have any copyrights 
                 </tr>
                 <tr>
                 I agree that I will be charged 10 % on all purchases on my videos
                 </tr>
                 <tr>
                 I agree that all info included in those videos are on my own risk
                 </tr><tr>
                 I agree that that all videos doesnot have any inappropriate information or pictures
                 </tr> <tr>
                
                 </tr>
                 <Link to = "/" >
        <button> I agree to Terms & Conditions </button>
        </Link>
                 </table>
            </form>

    
        )}
    
    export default Contract
    