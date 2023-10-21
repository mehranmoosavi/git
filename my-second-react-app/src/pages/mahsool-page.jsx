import Head from '../head'
import Mahsool  from '../mahsool'
import Footer from '../footer'
import { useState } from 'react'
export default function MahsoolPage(){
    const [state,setstate]=useState(true)
return <>
<div className='page'><Head/>
<Mahsool setstate={()=>{setstate(!state)}}/>
<Footer/></div>
</>
}