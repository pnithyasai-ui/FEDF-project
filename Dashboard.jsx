import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">

      <div className="sidebar">
        <h2>Passenger</h2>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/history">History</Link>
        <Link to="/analytics">Analytics</Link>
      </div>

      <div className="main">

        <div className="dashboard-header">
          <h1>Dashboard</h1>

          <button
            className="logout-btn"
            onClick={() => window.location.href="/"}
          >
            Logout
          </button>

        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Feedback</h3>
            <h1>25</h1>
          </div>

          <div className="card">
            <h3>Positive Reviews</h3>
            <h1>18</h1>
          </div>

          <div className="card">
            <h3>Negative Reviews</h3>
            <h1>7</h1>
          </div>

          <div className="card">
            <h3>Average Rating</h3>
            <h1>4.5</h1>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;