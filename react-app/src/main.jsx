import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import ErrorPage from './error'
import HomePage from './pages/homepage'
import ItemPage from './pages/itemspage'
import ClothesPage from './pages/clothespage'
import SearchPage from './pages/searchpage'
import MahsoolPage from './pages/mahsool-page';
import SportsPage from './pages/sportspage'
import Smartphones from './pages/smartphonespage'
import CartPage from './pages/cartpage'
import FilterItems from './filteritems'



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {path:'/items',
element:<ItemPage/>
  },
  {
    path:'/items/:productid',
    element:<MahsoolPage/>
  },
{
  path:'/cart',
  element:<CartPage/>
},
{path:'/smartphones',
element:<Smartphones/>},
{
  path:'/sports',
  element:<SportsPage/>
},
{path:'/clothes',
element:<ClothesPage/>
},
{path:'/search/:text',
element:<SearchPage/>},
{
  path:'/filter',
  element:<FilterItems/>
}




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
