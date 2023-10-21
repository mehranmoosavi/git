import { useState,useContext,createContext,useEffect } from "react"
import Items from './items'
import Filter from './filter'
import Head from './head'
import Categories from './categories'
import Mahsool from './mahsool'
import items from "./data/data"
 export default function App(){
return<>
<Head/>
<div className="vasat">
<Filter/> 
<Items/>
</div>
<Categories/>
<Mahsool mahsool={items[1]}/>
 </>}