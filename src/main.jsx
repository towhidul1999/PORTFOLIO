// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import './index.css';

// import About from './components/About';
// import Home from './components/Home';
// import Navbar from './components/Navbar';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/about",
//     element: <Navbar></Navbar>,
//     children: [
//       {
//         path: '/about',
//         element: <About></About>
//       }
//     ]
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
