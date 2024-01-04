import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import SurahDetails from "../SurahDetails/SurahDetails";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:5000/productsCount')
            },
            {
                path: "/details/:id",
                element: <SurahDetails></SurahDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/verse/${params.id}`)
            }
        ]
    }
])

export default Routes;