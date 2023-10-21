import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import items from './data/data.js'
import {add} from './functions'
export default function Mahsool({setstate}){
  const [quantity,setquantity]=useState(1)
    let mahsool
    let {productid} = useParams()
    items.forEach(element => {if(element.id==productid){
         mahsool=element
    }
    });
console.log(quantity)
    return <div className="mahsool">
  <div className="chap">
    <div className="aks"   style={{
    backgroundImage: "url"+'('+ mahsool.image + ')',
  }} />
  </div>
  <div className="vasatt">
    <h3 className="title">{mahsool.title}</h3>
    <div className="mahsoolrate">
      <img className="mahsoolstar" src="../src/data/svg/star.svg" alt="star" />
      <div>{mahsool.rating.rate}</div>
    </div>
    <div className="description">
   {mahsool.description}
      <div className="sabad-container">
      </div>
    </div>
  </div>
  <div className='rast'>
  <div className='rast-inner'>

    <h3 className='mahsool-price'>{mahsool.price+'$'}</h3>
<h3 className='instock'>In Stock</h3>
<div className='quantity'>
  <div>{'qty:'+quantity}</div>
<div onClick={()=>{setquantity(quantity+1)}} className='plusbox'>+</div><div onClick={()=>{if (quantity==1){return};setquantity(quantity-1)}} className='minusbox'>-</div>
</div>
<div onClick={()=>{setstate();add(mahsool.id,quantity)}} className='addtocart'>Add To Cart</div>
<Link to={'/cart'}><div className='buynow'>Buy Now</div></Link>
    <div></div>
  </div></div>
</div>
}