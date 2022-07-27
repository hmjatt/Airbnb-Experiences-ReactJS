import airbnbLogo from "../images/airbnb.png";

function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav-logo" alt="airbnb-logo" />
        </nav>
    );
}

export default Navbar;