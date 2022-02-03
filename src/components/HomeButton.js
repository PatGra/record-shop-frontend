
import { Link } from "react-router-dom";

function HomeButton(){
    return (
        <div>
             <Link to='/'><button style={{margin: '3em'}}>Home</button></Link>
           
        </div>
    )
}
export default HomeButton