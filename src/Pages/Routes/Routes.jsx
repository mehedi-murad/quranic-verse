import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import SurahDetails from "../SurahDetails/SurahDetails";
import Documentation from "../Documentation/Documentation";
import Feedback from "../Feedback/Feedback";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('https://al-quran-server.vercel.app/productsCount')
            },
            {
                path: "/details/:id",
                element: <SurahDetails></SurahDetails>,
                loader: ({params})=> fetch(`https://al-quran-server.vercel.app/verse/${params.id}`)
            },
            {
                path:"/documentation",
                element: <Documentation></Documentation>
            },
            {
                path:"/feedback",
                element: <Feedback></Feedback>
            }
        ]
    }
])

export default Routes;