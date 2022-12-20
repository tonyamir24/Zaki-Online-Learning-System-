import {Link} from 'react-router-dom'

const ForgetPass =() =>{

    return(
        <header>
            <div className="ForgetPass">
                 

                 <Link to="/ForgetPassword">
                    <h1>Forget Password ?</h1>
                 </Link> 

                 {/* <Link to="/Create">
                    <h1>Create</h1>
                 </Link>  */}
            </div>
        </header>     
    )

}

export default ForgetPass;