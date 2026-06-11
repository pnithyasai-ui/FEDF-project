function FeedbackForm(){

return(

<div className="main">

<div className="feedback-box">

<h2>Submit Feedback</h2>

<input
type="number"
placeholder="Cabin Crew Rating"
/>

<input
type="number"
placeholder="Food Rating"
/>

<input
type="number"
placeholder="Cleanliness Rating"
/>

<textarea
placeholder="Comments"
/>

<button>

Submit Feedback

</button>

</div>

</div>

)

}

export default FeedbackForm;