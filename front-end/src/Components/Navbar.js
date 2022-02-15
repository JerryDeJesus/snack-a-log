import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <Link to = "/snacks"><h1>SNACKS</h1></Link>
            <button className="btn-create-snack"><Link to = "/snacks/new">New Snack</Link></button>
        </nav>
    )
}

export default Navbar;