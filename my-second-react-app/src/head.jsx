import { Link } from 'react-router-dom'
import {num} from './functions'
import { useState } from 'react'
export default function Head(){
  const [inputvalue,setinputvalue]=useState('')
  let number =num()
return <>
<div className="header">
  <div className="header-inner">
    <Link to={'/'}><h3 className="title">mehran store</h3></Link>
    <form className="form" action="">
      <input type="text" placeholder="search" value={inputvalue} onChange={(e)=>{setinputvalue(e.target.value)}}/>
      <Link to={'/search/'+inputvalue}><button type="submit">s</button></Link>
    </form>
      <Link to={'/cart'} className='a' href=""><div>{number}</div>
    <img className="shoppingcart" src="../src/data/svg/cart.svg" alt="" /></Link>
  </div>
  <div className="header-inner2">
    <div className="menu">
      <img className="menuimg" src="../src/data/svg/menu.svg" alt="" />
      <h4>menu</h4>
    </div>
    <div>about</div>
    <div>main</div>
  </div>
</div>

</>



}