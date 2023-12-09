import React, { useEffect, useState } from 'react'
// import {router} from './layouts/routes.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Register from './components/web/register/Register.jsx'
import Login from './components/web/login/Login.jsx'
import Home from './components/web/home/Home.jsx'
import Categories from './components/web/categories/Categories.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Layout from './layouts/Layout.jsx'
import HomeDashboard from './components/dashboard/home/Home.jsx'
import CategoriesDashboard from './components/dashboard/categories/Categories.jsx'
import { jwtDecode } from 'jwt-decode' 
import CategoriesDetails from './components/web/categories/CategoriesDetails.jsx'
import UserProfile from './components/web/users/UserProfile .jsx'
export default function App() {
   const [user,setUser] =useState(null);
   const saveCurrentUser = ()=>{
         const token = localStorage.getItem("userToken");
         const decoded =jwtDecode(token);
         console.log(decoded);
         setUser(decoded);
   }

   useEffect ( ()=>{
    if(localStorage.getItem("userToken"))
          saveCurrentUser();   
   },[])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser}/>,
      errorElement:<h2>404 not found--web</h2> ,
      children : [
        {
          path: 'register',
          element : <Register/>
        },
        {
          path: 'login',
        element : <Login  saveCurrentUser={saveCurrentUser}/>
        },
        {
          path: '/',
          // index : true ,
          element : <Home/>
        },
        {
          path: 'categories',
          element : <Categories/>
        },
        {
          path: 'products/category/:categoryId',
          element : <CategoriesDetails/>
        },
        {
          path: 'userProfile',
        element : <UserProfile  user={user}  />

        },
        {
          path: '*' ,
          element:<h2>404 Page not found web</h2>
        }
      ]
    },
    {
      path :"dashboard",
      element : <DashboardLayout/>,
      errorElement:<h2>404 not found --dashboard</h2> ,
      children :[
        {
          path :'home',
          element :<HomeDashboard/>
        },
        {
          path :'categories',
          element :<CategoriesDashboard/>
        } ,
        {
          path: '*' ,
          element:<h2>404 Page not found dashboard</h2>
        }
      ]
    }
    
  ]);
  return (
    <RouterProvider router={router} />
  )
}
