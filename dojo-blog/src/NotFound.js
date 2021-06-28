import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h2 style={{color:"grey" , marginBottom:'15px', textDecoration : 'none'} }>Sorry, the page cannot be found...</h2>
            <Link to ='/'>Home page </Link>
        </div>
      );
}
 
export default NotFound;