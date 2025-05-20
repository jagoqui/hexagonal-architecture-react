import { Link, Outlet } from "react-router";
import { Toaster } from "sonner";
import { PATH_NAMES } from "../../domain/schemas/pathnames.schema";

export const MainLayout = () => {
  return (
    <>
      <Link aria-label="Go to Home" to={PATH_NAMES.HOME}>
        <h1 className="text-3xl font-bold underline">Home</h1>
      </Link>
      <Link aria-label="List of Users" to={PATH_NAMES.USERS}>
        <h1 className="text-3xl font-bold underline">Users</h1>
      </Link>

      <Outlet />
      <Toaster expand={true} richColors />
    </>
  );
};
