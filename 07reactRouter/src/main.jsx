import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import About from './Components/About/About'
import Contact from './Contact/Contact'

// const router = createBrowserRouter([
//     {
//       path:'/',
//       element: <Layout/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:'About',
//           element: <About/>
//         },
//         {
//           path:'Contact',
//           element:<Contact/>
//         }
//       ]
//     }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
