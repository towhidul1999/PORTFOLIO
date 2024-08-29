// import './App.css';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Navbar from './components/Navbar';

// function App() {

//     return (
//         <>
//             <Navbar></Navbar>
//             <Home></Home>
//             {/* <About></About> */}
//             <Footer></Footer>
//         </>
//     )
// }

// export default App;









import {
    createBrowserRouter
} from "react-router-dom";
import './App.css';
import Main from "./Layout/Main";
import About from "./components/About";
import Home from "./components/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: < Main ></ Main >,
        children: [
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    },
    // {
    //     path: "/about",
    //     element: < About ></ About >
    // }
]);


export default router;
