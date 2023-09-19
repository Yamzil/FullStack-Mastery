const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 style={
                {
                    color: "#18272F",
                    border: "3px solid hsla(196, 61%, 58%, .75)",
                    padding: "5px",
                }
            }>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/">About us</a>
            </div>
        </nav>
    );
}
 
export default Navbar;