import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div ClassName ="not-found">
            <h2>Sorry</h2>
            <p>That Page Cannot be found</p>
            <Link to='/'>Back to HomePage...</Link>
        </div>
    );
}
 
export default NotFound;