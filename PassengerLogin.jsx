import { useNavigate } from "react-router-dom";

function PassengerLogin(){

const navigate=useNavigate();

return(

<div className="login">

<div className="login-box">

<h2>Passenger Login</h2>

<input placeholder="Email"/>

<input placeholder="Password"/>

<button onClick={()=>navigate("/dashboard")}>

Login

</button>

</div>

</div>

)

}

export default PassengerLogin;