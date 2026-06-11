import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PassengerLogin from "./pages/PassengerLogin";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import FeedbackForm from "./pages/FeedbackForm";
import History from "./pages/History";
import Analytics from "./pages/Analytics";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/passenger-login" element={<PassengerLogin />} />

<Route path="/admin-login" element={<AdminLogin />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/feedback" element={<FeedbackForm />} />

<Route path="/history" element={<History />} />

<Route path="/analytics" element={<Analytics />} />

<Route path="/admin-dashboard" element={<AdminDashboard />} />

</Routes>

</BrowserRouter>

);

}

export default App;