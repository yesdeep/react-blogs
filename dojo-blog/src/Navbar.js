import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to = '/' style ={{
                marginLeft: '16px',
                padding: '6px',
                color: 'red',
                backgroundColor: 'white',
                borderRadius: '8px'
            }}>
            <h1>FIGHT CLUB </h1>
            </Link>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/Create" >New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;