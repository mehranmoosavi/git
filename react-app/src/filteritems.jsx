import { useState } from "react"
import Filter from './filter'
import Item from './item'
import items from './data/data'
export default function FilterItems({category}){
    const[from,setfrom]=useState(0)
    const[to,setto]=useState(10000)
return     <div className='item-page-main'>
<Filter run={(a,b)=>{setfrom(a);setto(b)}}/>
<div className='grid-container'>{[items.filter((item)=>item.category===category&&item.price>=(+from)&&item.price<=(+to)).map((item)=><Item id={item.id} />)
]}</div>
    </div>

}