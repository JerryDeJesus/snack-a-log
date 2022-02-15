import SnackDetails from "../Components/SnackDetails.js";

function Show() {
    return(
        <div>
            <h1>Snacks</h1>
            <div className = "snack-details">
                <SnackDetails />
            </div>
        </div>
    )
}

export default Show;