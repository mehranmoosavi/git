import {add,reduce} from './functions'
import { useState } from 'react'
import { Link } from "react-router-dom"
export default function CartItem({mahsool,idtedad,run}){ 
    const [tedad,settedad]=useState(idtedad)
    if (tedad==0){return}
return <div className="cart-container">
 <Link to={'/items/'+mahsool.id} className='itemaksa'><div className="aks-mahsool-cart"  style={{
    backgroundImage: "url"+'('+ mahsool.image + ')',
  }} ></div></Link>
  <div className="title-mahsool-cart">{mahsool.title}</div>
  <div className="add-reduce">
    <div><div className="negetive" onClick={()=>{run();reduce(mahsool.id,1),settedad(tedad-1)}}>-</div>
    <div className="tedad">{tedad}</div>
    <div className="positive"  onClick={()=>{run();add(mahsool.id,1);settedad(tedad+1)}}>+</div>
  </div></div>
  <div className="price">{(mahsool.price*tedad)+'$'}</div>
</div>}
