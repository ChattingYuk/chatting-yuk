import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
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