import {Link} from 'react-router-dom'
import { useAuthContex } from '../hooks/useAuthContex'
import { useLogout } from '../hooks/useLogout'

const Navbar=()=>{
    const {logout}=useLogout()
    const{user}=useAuthContex()
    return(
        <header>
            <div className="Container">
                <Link to ="/">
                    <h1>Ohh yeaaah !!</h1>
                </Link>
                <nav>
                    {user && (
                    <div>
                        <span>{user.Username}</span>
                        <button onClick={()=>{logout()}}>Log out</button>
                    </div>)}

                   {!user &&(<div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>

                    </div>)} 
                    
                </nav>
            </div>
        </header>
    )
}
export default Navbar