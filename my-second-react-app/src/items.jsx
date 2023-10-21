import items from './data/data'
import Item from './item'
import { Link } from "react-router-dom";
export default function Items({from,to}){

return <div className="grid-container">
  {items.filter((item)=>{return(item.price>=(+from)&item.price<=(+to))}).map((item)=><Item  id={item.id}/>
  )}

</div>



}