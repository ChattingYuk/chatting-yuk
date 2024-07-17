import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <ThemeProvider>
            <Outlet />
        </ThemeProvider>
    )
}