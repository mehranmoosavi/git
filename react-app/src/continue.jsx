import {jam} from './functions'
export default function Continue(){
  let items=JSON.parse(localStorage.selected)
return <>
  <div className="continue-outer"><div></div><div className="continue">continue to buy</div><div>total price:{jam()}$</div></div>
  
</>}
