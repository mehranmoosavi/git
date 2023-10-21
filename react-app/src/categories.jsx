import { Link } from "react-router-dom"
export default function Categories(){
return <div className="flex-container">
  <div className="flex-container-inner1"><div className="flex-container-inner2"><Link to={'/items'}>ALL PRODUCTS</Link></div><div className="flex-container-inner">
    <Link to={'/clothes'}><div className="div1"></div></Link>
    <Link to={'/sports'}><div className="div2"></div></Link>
    <Link to={'./smartphones'}><div className="div3"></div></Link>
  </div></div>
</div>}