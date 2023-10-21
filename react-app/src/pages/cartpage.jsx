import Cart from '../cartitems'
import Head from '../head'
import Footer from '../footer'
import Continue from '../continue'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import { render } from 'react-dom'
export default function CartPage(){
    const[render,rerender]=useState(true)
let {text} = useParams()

 return <div className='page'>
 <Head/>
 <Cart run={()=>{rerender(!render)}}/>
 <Continue/>
 <Footer />
 </div>
}
