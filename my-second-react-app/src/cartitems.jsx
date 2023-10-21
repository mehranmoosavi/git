import CartItem from './cartitem'
import items from './data/data'
export default function Cart({run}){

return <div className='cartitems'>
{[JSON.parse(localStorage.selected).map((element)=><CartItem run={run} mahsool={items.find((item)=>item.id===element[0])} idtedad={element[1]} />)]
}</div>

}