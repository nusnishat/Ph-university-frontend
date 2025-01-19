import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths} from "./admin.route";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "contact",
                element: <Contact/>,
            }
        ]
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "register",
        element: <Register/>,
    },
    {
        path: "/admin",
        element: <App/>,
        children: routesGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App/>,
        children: routesGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App/>,
        children: routesGenerator(studentPaths)
    },
]);
export default router;