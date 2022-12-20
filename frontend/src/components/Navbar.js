import {Link} from 'react-router-dom'

const Navbar=()=>{

    return(
        <header>
            <div className="Container">
                <Link to ="/">
                    <h1>Ohh yeaaah !!</h1>
                </Link>
            </div>
        </header>
    )
}
export default Navbar