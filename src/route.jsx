import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import MainLayout from "./components/MainLayout";
import { Landingpage } from "./pages/Landingpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landingpage />,
        // kalau mau dibuat landing page
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "/app",
                element: <HomePage /> ,
            }, 
        ]
    }
]);

export default router