const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Fake Commerce</h1>
            <div className="links">
                <a href="/" className="btn-green">Product</a>
                <a href="/cart" className="btn-white">Cart</a>
            </div>
        </div>
    );
}
 
export default Navbar;