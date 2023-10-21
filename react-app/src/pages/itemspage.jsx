import Items from '../items'
import Head from '../head'
import Filter from '../filter'
import Footer from '../footer'
import { useState } from 'react'
import FilterItems from '../filteritems'
  
export default function ItemPage(){
    const [from,setfrom]=useState(0)
    const [to,setto]=useState(5000)
    return  <div className='page'>
        <Head/>
         <div className='item-page-main'>
<Filter run={(a,b)=>{setfrom(a);setto(b)}}/>
<Items from={from} to={to}/>
    </div>
    <Footer/>
    </div>
}  
  
  
  