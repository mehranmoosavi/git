import Search from '../search' 
import Head from '../head'
import Footer from '../footer'
import {useParams} from 'react-router-dom'
export default function SearchPage(){
let {text} = useParams()

 return <div className='page'>
 <Head/>
 <Search text={text}/>
 <Footer />
 </div>
}