import { Link } from "react-router-dom";

function Home(){

return(

<div className="hero">

<h1>Passenger Feedback System</h1>

<p>Your Feedback Makes Journeys Better</p>

<div>

<Link to="/passenger-login">

<button>Passenger Login</button>

</Link>

<Link to="/admin-login">

<button>Admin Login</button>

</Link>

</div>

</div>

)

}

export default Home;