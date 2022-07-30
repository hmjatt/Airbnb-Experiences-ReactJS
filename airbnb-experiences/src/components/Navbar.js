import airbnbLogo from "../images/airbnb.svg";

function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav-logo" alt="airbnb-logo" />
        </nav>
    );
}

export default Navbar;
