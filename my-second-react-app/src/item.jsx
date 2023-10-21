import { Link } from "react-router-dom"
import items from './data/data'
export default function Item({id,fromprice,toprice}){
    let item=items.filter((element)=>element.id===id)[0]
return  <Link to={'/items/'+item.id}><div className="item1">
<div
className='akss'
style={{
  backgroundImage: "url"+'('+ item.image + ')',
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "70%"
}}
/>



<div className="title">{item.title}</div>
<div className="moshakhasat">
  <div className="rating">
    <img title="star" src="../src/data/svg/star.svg" className="star" />
    <div>{item.rating.rate}</div>
  </div>
  <div>{item.price+'$'}</div>
</div>
</div>
</Link>

}