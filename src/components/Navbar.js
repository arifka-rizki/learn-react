import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Fake Commerce</h1>
            <div className="links">
                <Link to="/" className="btn-green">Product</Link>
                <Link to="/cart" className="btn-white">Cart</Link>
            </div>
        </div>
    );
}
 
export default Navbar;