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

//Comments









import {
    createBrowserRouter
} from "react-router-dom";
import './App.css';
import Main from "./Layout/Main";
import About from "./components/About";
import Article from "./components/Article";
import Home from "./components/Home";
import Project from "./components/Project";
import Resume from "./components/Resume";


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
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/project",
                element: <Project></Project>
            },
            {
                path: "/article",
                element: <Article></Article>
            },
            {
                path: "/resume",
                element: <Resume></Resume>
            }
        ]
    },
]);


export default router;
