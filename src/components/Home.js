import { Link } from "react-router-dom";


function Home(){
    return (
        <div>
        <h2>WELCOME</h2>
        <Link to='/records'><button>view records</button></Link>
        <Link to='/addRecords'><button>add records</button></Link>
        
        </div>
    )
}
export default Home