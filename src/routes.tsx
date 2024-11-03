import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Projects from "./pages/projects";
import Background from "./pages/background";
import ReachOut from "./pages/reach_out";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path:"/Projects",
        element: <Projects />,
        errorElement: <Error />
    },
    {
        path:"/Background",
        element: <Background />,
        errorElement: <Error />
    },
    {
        path:"/ReachOut",
        element: <ReachOut />,
        errorElement: <Error />
    },
    {
        path:"/Error",
        element: <Error />,
        errorElement: <Error />
    },
])