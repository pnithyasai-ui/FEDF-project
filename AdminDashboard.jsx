import { Link } from "react-router-dom";

function AdminDashboard(){

return(

<div className="container">

<div className="sidebar">

<h2>Admin Panel</h2>

<Link to="/admin-dashboard">

Dashboard

</Link>

<Link to="/history">

All Feedback

</Link>

<Link to="/analytics">

Analytics

</Link>

<a href="/">

Logout

</a>

</div>


<div className="main">

<div className="dashboard-header">

<h1>

Admin Dashboard

</h1>

<button
className="logout-btn"
onClick={()=>window.location.href="/"}
>

Logout

</button>

</div>

<div className="cards">

<div className="card">

<h3>Total Feedback</h3>

<h1>520</h1>

</div>

<div className="card">

<h3>Positive Reviews</h3>

<h1>85%</h1>

</div>

<div className="card">

<h3>Negative Reviews</h3>

<h1>15%</h1>

</div>

<div className="card">

<h3>Registered Users</h3>

<h1>250</h1>

</div>

</div>

<div className="admin-section">

<div className="recent-feedback">

<h2>

Recent Feedback

</h2>

<div className="feedback-item">

<p>

Excellent cabin crew service.

</p>

<span>

⭐ 5

</span>

</div>

<div className="feedback-item">

<p>

Food quality could improve.

</p>

<span>

⭐ 3

</span>

</div>

<div className="feedback-item">

<p>

Clean airport experience.

</p>

<span>

⭐ 4

</span>

</div>

</div>

</div>

</div>

</div>

)

}

export default AdminDashboard;