import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    { path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "login",
      element: <><Navbar /> <Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
    },
  ])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App