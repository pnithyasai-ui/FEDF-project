import { useNavigate } from "react-router-dom";

function AdminLogin() {

const navigate = useNavigate();

return (

<div className="admin-login">

<div className="admin-overlay">

<div className="admin-box">

<div className="admin-header">

<h1>Admin Portal</h1>

<p>Manage passenger feedback efficiently</p>

</div>

<input
type="email"
placeholder="Admin Email"
/>

<input
type="password"
placeholder="Password"
/>

<button
className="admin-btn"
onClick={()=>navigate("/admin-dashboard")}
>

Login to Dashboard

</button>

<p className="admin-note">

Authorized Personnel Only

</p>

</div>

</div>

</div>

)

}

export default AdminLogin;