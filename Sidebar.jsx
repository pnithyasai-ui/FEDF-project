import {Link}

from "react-router-dom"

export default function Sidebar(){

return(

<div className="sidebar">

<h2>

Dashboard

</h2>

<Link to="/passenger-dashboard">

Home

</Link>

<Link to="/feedback">

Feedback

</Link>

<Link to="/history">

History

</Link>

<Link to="/analytics">

Analytics

</Link>

</div>

)

}