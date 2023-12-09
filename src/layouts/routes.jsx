import {createBrowserRouter,RouterProvider,}  from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './../components/web/home/Home.jsx'
import Categories from './../components/web/categories/Categories.jsx'
import DashboardLayout from './DashboardLayout.jsx'
import HomeDashboard from './../components/dashboard/home/Home.jsx'
import CategoriesDashboard from './../components/dashboard/categories/Categories.jsx'
import Register from './../components/web/register/Register.jsx'
import Login from './../components/web/login/Login.jsx'

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     errorElement:<h2>404 not found--web</h2> ,
//     children : [
//       {
//         path: 'register',
//         element : <Register/>
//       },
//       {
//         path: 'login',
//         element : <Login/>
//       },
//       {
//         path: 'home',
//         element : <Home/>
//       },
//       {
//         path: 'categories',
//         element : <Categories/>
//       },
//       {
//         path: '*' ,
//         element:<h2>404 Page not found web</h2>
//       }
//     ]
//   },
//   {
//     path :"dashboard",
//     element : <DashboardLayout/>,
//     errorElement:<h2>404 not found --dashboard</h2> ,
//     children :[
//       {
//         path :'home',
//         element :<HomeDashboard/>
//       },
//       {
//         path :'categories',
//         element :<CategoriesDashboard/>
//       } ,
//       {
//         path: '*' ,
//         element:<h2>404 Page not found dashboard</h2>
//       }
//     ]
//   }
  
// ]);