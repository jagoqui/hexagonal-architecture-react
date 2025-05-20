import { Outlet } from "react-router"
import { Toaster } from "sonner"

export const MainLayout = () => {
    return (
    <>
        <Outlet />
        <Toaster expand={true} richColors />
    </>)
}