export default function AdminFeedback(){

const data=

JSON.parse(

localStorage.getItem("feedback")

)||[]

return(

<div>

<h1>All Feedback</h1>

{

data.map((x,i)=>(

<div key={i}>

<p>{x.comment}</p>

<p>{x.sentiment}</p>

<hr/>

</div>

))

}

</div>

)

}