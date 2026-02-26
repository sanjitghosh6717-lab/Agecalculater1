import { useState } from "react";
import '../index.css'
function CalculateAge (){
    const [birthDay,setBirthday]= useState("")
    const[result,setResult]=useState(null)
    const [error,setError] = useState("")
    const [clicked,setClicked] =useState(false)

    function AgeCal() {
        if(!birthDay){
            setError("Give a birth date")
        return
          }
 const dob = new Date(birthDay)
 const today =new Date()

 if(dob>today){
    setError("Birth Date can not be in future")
    return
 }
   let years = today.getFullYear()-dob.getFullYear()
   let months=today.getMonth()-dob.getMonth()
  let days=today.getDate()-dob.getDate()
  if(days<0){
    const lastmonth=new Date(today.getFullYear(),today.getMonth(),0)
    days+=lastmonth.getDate()
  }
  if(months<0){
    years--;
    months+=12;
  }
  const dayDiff= Math.floor((today-dob)/(1000*60*60*24));
  setResult({years,months,days,dayDiff})
  setError(true)
  setClicked(true)

    };
    return(
        <div className="box2">
        <div> 
<div className="card columns">
<h1>Age Calculator</h1>
<div className="main">
    <input placeholder="enter your date" type="date" required className="input" value={birthDay}
    onChange={(e) => setBirthday(e.target.value)}/>
    <button onClick={AgeCal} className="btn red-flag">Calculate</button>
 <div className="text">
 {error && <h4>{error}</h4>}
  {result&& (<h3> {result.years} Years {result.months} Months {result.days} Days</h3>)}
</div>
  </div>
</div>
   </div>
  <div className="box">
<div  className= {clicked ? "comic-buttonhover": "comic-button"}>
{clicked ? result.dayDiff:"Days you lived in world"} {clicked ? "Days" : ""}

</div>
<div  className= {clicked ? "comic-buttonhover": "comic-button"}>
{clicked ? result.years:"Age"}{clicked ? " Years" : ""}

</div>

<div  className= {clicked ? "comic-buttonhover": "comic-button"}>
{clicked ? new Date(birthDay).toLocaleDateString("en-IN")
:"Your Birth Date"}
</div>
</div>
        </div>
    );
}
export default CalculateAge
