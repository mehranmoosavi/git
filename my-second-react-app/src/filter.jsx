import { useState } from "react"
export default function Filter({run}){
  const[fromvalue,setfromvalue]=useState(0)
  const[tovalue,settovalue]=useState(5000)
  const [showpricerange,setshowpricerange]=useState(false)
return <div className="div">
<div className="filter">filters</div>
<div className="avilable">
  <div>available</div>
  <input title="available" type="checkbox" />
</div>
<div className="price-range">
  <div>price-range</div>
  <img src="./src/data/svg/arrow.svg" alt="" className={showpricerange?"arrow":'arrow-rotate'} onClick={()=>{setshowpricerange(!showpricerange)}}/>
</div>
<div className={showpricerange? 'range-show':"range-hidden"}>
  <div className="fromavailable">
    <div  className="availablefirstdiv"><p> from</p><p className="fromvalue">{fromvalue+'$'}</p></div>
    <div><p>0</p><input max='5000' value={fromvalue} onChange={(e)=>{setfromvalue(e.target.value)}} className="input-width" title="a" type="range" /><p>5000</p> </div>
  </div>
  <div className="toavailable">
    <div className="availablefirstdiv"><p> to</p><p className="fromvalue">{tovalue+'$'}</p></div>
    <div><p>0</p><input max='5000' value={tovalue} onChange={(e)=>{settovalue(e.target.value)}} className="input-width" title="a" type="range" /><p>5000</p></div>
  </div>
  <div className="submitouter"><button onClick={()=>{run(fromvalue,tovalue)}}>submit</button></div>
</div>

</div>


}
   
   
   