import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <Link to = "/snacks">Show All Snacks</Link>
            <Link to = "/snacks/new">New Snack</Link>
        </nav>
    )
}

export default Navbar;