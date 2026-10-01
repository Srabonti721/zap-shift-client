import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            },
        ],
    },
]);
export default router;
