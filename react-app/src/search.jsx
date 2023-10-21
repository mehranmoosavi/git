import items from './data/data'
import Item from './item'
export default function Search({text}){
return <div className='grid-container'>
{[items.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase())).map((item)=><Item id={item.id} />)
]}
</div>
}