import items from  './data/data'
import  Item from './item'
export default function Sports(){

return <div className='grid-container'>
{[items.filter((item)=>item.category==='clothe').map((item)=><Item id={item.id} />)
]}


</div>

}